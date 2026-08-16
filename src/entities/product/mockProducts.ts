import type { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    title: 'Сообщество ВКонтакте (Бизнес)',
    price: 890,
    currency: 'RUB',
    art: 'community',
    category: 'Сообщества',
    description:
      'Оформляем сообщество ВКонтакте под ключ: обложка, меню, виджеты и первые посты. ' +
      'Подходит малому бизнесу, который выходит в соцсети впервые.',
    specs: [
      { label: 'Срок выполнения', value: '1–2 дня' },
      { label: 'В комплекте', value: 'Обложка, меню, 5 постов' },
      { label: 'Правки', value: '2 бесплатные' },
      { label: 'Формат передачи', value: 'Доступ администратора' },
    ],
    inStock: true,
  },
  {
    id: 'p2',
    title: 'Telegram-канал под ключ',
    price: 1200,
    currency: 'RUB',
    art: 'community',
    category: 'Сообщества',
    description:
      'Собираем Telegram-канал с нуля: оформление, описание, закреплённый пост и структура рубрик. ' +
      'Готовим канал так, чтобы первые подписчики сразу поняли, зачем он нужен.',
    specs: [
      { label: 'Срок выполнения', value: '1 день' },
      { label: 'В комплекте', value: 'Аватар, описание, 3 поста' },
      { label: 'Правки', value: '2 бесплатные' },
      { label: 'Формат передачи', value: 'Права администратора' },
    ],
    inStock: true,
  },
  {
    id: 'p3',
    title: 'Дизайн и макет сайта',
    price: 3400,
    currency: 'RUB',
    art: 'website',
    category: 'Сайты',
    description:
      'Прорабатываем дизайн-макет сайта в Figma: структура страниц, адаптив под мобильные устройства ' +
      'и подготовка макета к вёрстке.',
    specs: [
      { label: 'Срок выполнения', value: '5–7 дней' },
      { label: 'Количество экранов', value: 'До 5 страниц' },
      { label: 'Адаптив', value: 'Desktop, tablet, mobile' },
      { label: 'Формат передачи', value: 'Ссылка на Figma' },
    ],
    inStock: true,
  },
  {
    id: 'p4',
    title: 'Сайт-визитка',
    price: 1650,
    currency: 'RUB',
    art: 'website',
    category: 'Сайты',
    description:
      'Одностраничный сайт на выбранную тему: аккуратная вёрстка, форма обратной связи и адаптация ' +
      'под любые экраны — от десктопа до телефона.',
    specs: [
      { label: 'Срок выполнения', value: '3–4 дня' },
      { label: 'Количество блоков', value: 'До 6 секций' },
      { label: 'Хостинг', value: 'Не включён' },
      { label: 'Формат передачи', value: 'Готовые файлы проекта' },
    ],
    inStock: false,
  },
  {
    id: 'p5',
    title: 'Логотип и фирменный стиль',
    price: 2500,
    currency: 'RUB',
    art: 'branding',
    category: 'Брендинг',
    description:
      'Разрабатываем логотип и базовый набор фирменного стиля: цвета, шрифты и правила использования, ' +
      'чтобы бренд узнавали в любом канале.',
    specs: [
      { label: 'Срок выполнения', value: '4–5 дней' },
      { label: 'В комплекте', value: 'Логотип, палитра, шрифты' },
      { label: 'Правки', value: '3 бесплатные' },
      { label: 'Формат передачи', value: 'SVG, PNG, PDF' },
    ],
    inStock: true,
  },
  {
    id: 'p6',
    title: 'SEO-аудит сайта',
    price: 1800,
    currency: 'RUB',
    art: 'promotion',
    category: 'Продвижение',
    description:
      'Проверяем сайт по ключевым SEO-факторам и готовим понятный отчёт с приоритизированным списком ' +
      'правок для роста в поиске.',
    specs: [
      { label: 'Срок выполнения', value: '2–3 дня' },
      { label: 'Глубина проверки', value: 'До 20 страниц' },
      { label: 'В отчёте', value: 'Технические и контентные правки' },
      { label: 'Формат передачи', value: 'PDF-отчёт' },
    ],
    inStock: true,
  },
];

export const productCategories = Array.from(
  new Set(mockProducts.map((product) => product.category)),
);
