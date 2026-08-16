<<<<<<< HEAD
export type ProductCategory = 'Сообщества' | 'Сайты' | 'Брендинг' | 'Продвижение';

export type ProductArtVariant = 'community' | 'website' | 'branding' | 'promotion';

export interface ProductSpec {
  label: string;
  value: string;
=======
export interface Category {
  id: string;
  name: string;
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
<<<<<<< HEAD
  art: ProductArtVariant;
  category: ProductCategory;
=======
  image: string;
  category: Category;
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f
  description: string;
  specs: ProductSpec[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}