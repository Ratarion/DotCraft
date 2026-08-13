import type { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    title: 'Сообщество в ВК (Бизнес)',
    price: 890,
    currency: 'RUB',
    image: '/src/assets/img/product/vk(business).jpg',
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
    title: 'Сайт-визитка',
    price: 1650,
    currency: 'RUB',
    image: '/src/assets/img/product/site-card.jpg',
    category: 'Сайт',
    description: 'Одностраничный сайт о чем пожелаете',
    inStock: false,
  },
];
