export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  category: Category;
  description: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}