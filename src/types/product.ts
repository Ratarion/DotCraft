export type ProductCategory = 'Сообщества' | 'Сайты' | 'Брендинг' | 'Продвижение';

export type ProductArtVariant = 'community' | 'website' | 'branding' | 'promotion';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  art: ProductArtVariant;
  category: ProductCategory;
  description: string;
  specs: ProductSpec[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}