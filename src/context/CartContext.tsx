import { useEffect, useMemo, useReducer, type ReactNode } from 'react';
import type { CartItem, Product } from '@/types/product';
import { CartContext, type CartContextValue } from './cart-context';

const STORAGE_KEY = 'dotcraft:cart';

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'SET_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR' };

function readInitialState(): CartState {
  if (typeof window === 'undefined') return { items: [] };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return { items: [] };
    return { items: parsed };
  } catch {
    return { items: [] };
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.product.id === action.product.id,
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + action.quantity }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          { product: action.product, quantity: action.quantity },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (item) => item.product.id !== action.productId,
        ),
      };

    case 'SET_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (item) => item.product.id !== action.productId,
          ),
        };
      }

      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item,
        ),
      };
    }

    case 'CLEAR':
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, readInitialState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );

    return {
      items: state.items,
      totalCount,
      totalPrice,
      addItem: (product, quantity = 1) =>
        dispatch({ type: 'ADD_ITEM', product, quantity }),
      removeItem: (productId) => dispatch({ type: 'REMOVE_ITEM', productId }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: 'SET_QUANTITY', productId, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
