export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
