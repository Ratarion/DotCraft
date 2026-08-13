import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { ProductPage } from '@/pages/ProductPage/ProductPage';
import { CartPage } from '@/pages/CartPage/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage/CheckoutPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
