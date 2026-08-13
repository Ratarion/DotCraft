# Интернет-магазин — заготовка проекта

Стек: **React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router v7**

## Запуск

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
```

## Структура проекта

```
src/
├── app/                 # Точка сборки приложения
│   ├── App.tsx           # Корневой компонент
│   └── router.tsx        # Конфигурация маршрутов
│
├── pages/               # Страницы (по одной папке на роут)
│   ├── HomePage/
│   ├── CatalogPage/
│   ├── ProductPage/
│   ├── CartPage/
│   ├── CheckoutPage/
│   └── NotFoundPage/
│
├── components/
│   ├── layout/            # Header, Footer, Layout (обёртка с <Outlet />)
│   └── ui/                # Переиспользуемые UI-примитивы (Button и т.д.)
│
├── entities/
│   └── product/           # Данные и логика, связанные с товаром
│       └── mockProducts.ts  # Заглушка вместо реального API
│
├── types/                # Общие TypeScript-типы (Product, CartItem)
├── lib/                  # Утилиты (форматирование цены и т.п.)
├── hooks/                # Кастомные React-хуки (пока пусто)
├── assets/                # Статика, попадающая в сборку
└── index.css              # Подключение Tailwind + design tokens
```

## Маршруты

| Путь              | Страница        |
|-------------------|------------------|
| `/`               | Главная          |
| `/catalog`        | Каталог товаров  |
| `/product/:id`    | Карточка товара  |
| `/cart`           | Корзина          |
| `/checkout`       | Оформление заказа|
| `*`               | 404              |

## Дизайн-токены

Цвета и шрифты заданы через `@theme` в `src/index.css` (Tailwind v4):
`--color-ink`, `--color-paper`, `--color-accent`, `--color-accent-soft`, `--color-line`,
`--font-display`, `--font-body`. Меняйте их там — переменные подхватятся во всех компонентах.

## Что дальше

- Подключить реальный API вместо `entities/product/mockProducts.ts`
- Добавить состояние корзины (Context / Zustand / Redux Toolkit) — сейчас `CartPage` статична
- Добавить форму в `CheckoutPage`
- Настроить путь `@/*` уже работает (алиас на `src/`), можно им пользоваться сразу
