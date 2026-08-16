import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/types/product';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
}

const FEEDBACK_DURATION_MS = 1600;

export function AddToCartButton({
  product,
  quantity = 1,
  className = '',
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;
    const timeout = window.setTimeout(() => setJustAdded(false), FEEDBACK_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [justAdded]);

  if (!product.inStock) {
    return (
      <Button variant="secondary" className={className} disabled>
        Нет в наличии
      </Button>
    );
  }

  return (
    <Button
      className={className}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        addItem(product, quantity);
        setJustAdded(true);
      }}
      aria-live="polite"
    >
      {justAdded ? 'Добавлено ✓' : 'В корзину'}
    </Button>
  );
}
