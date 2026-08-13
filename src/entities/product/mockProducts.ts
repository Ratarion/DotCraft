import type { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    title: 'Сообщество в ВК',
    price: 890,
    currency: 'RUB',
    image: '',
    category: 'Сообщества',
    description: 'Создания сообщества в ВК под заказ',
    inStock: true,
  },
  {
    id: 'p2',
    title: 'Разработка дизайна и макета сайта',
    price: 3400,
    currency: 'RUB',
    image: '/src/assets/img/product/site.jpg',
    category: 'Сайт',
    description: 'Описание',
    inStock: true,
  },
  {
    id: 'p3',
    title: 'Деревянная разделочная доска',
    price: 1650,
    currency: 'RUB',
    image: '',
    category: 'Кухня',
    description: 'Доска из массива дуба.',
    inStock: false,
  },
];
