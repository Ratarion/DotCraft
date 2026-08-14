import type { Product, Category } from '@/types/product';

const categories: Category[] = [
  { id: 'cat-1', name: 'Сообщества' },
  { id: 'cat-2', name: 'Сайт' },
];

  export const mockProducts: Product[] = [
    {
      id: 'p1',
      title: 'Сообщество в ВК (Бизнес)',
      price: 890,
      currency: 'RUB',
      image: '/src/assets/img/product/vk(business).jpg',
      category: categories[0],
      description: 'Создания сообщества в ВК под заказ',
      inStock: true,
    },
    {
      id: 'p2',
      title: 'Разработка дизайна и макета сайта',
      price: 3400,
      currency: 'RUB',
      image: '/src/assets/img/product/site.jpg',
      category: categories[1],
      description: 'Описание',
      inStock: true,
    },
    {
      id: 'p3',
      title: 'Сайт-визитка',
      price: 1650,
      currency: 'RUB',
      image: '/src/assets/img/product/site-card.jpg',
      category: categories[1],
      description: 'Одностраничный сайт о чем пожелаете',
      inStock: false,
    },
  ];
