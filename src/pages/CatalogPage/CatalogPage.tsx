import { Link } from 'react-router-dom';
import { mockProducts } from '@/entities/product/mockProducts';
import { formatPrice } from '@/lib/format';
import { Button } from '@/components/ui/Button';

export function CatalogPage() {
  return (
    <section>
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Каталог
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group rounded-lg border border-[var(--color-line)] p-4 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="mb-3 aspect-square overflow-hidden rounded-md bg-[var(--color-accent-soft)]">
              {product.image && (
                  <img
                  src={product.image}
                  alt={product.title}
                  className='h-full w-full object-cover'
                  />
                )}
            </div>

            <h2 className="font-medium">{product.title}</h2>
            <p className="mt-1 text-sm text-[var(--color-ink)]/60">
              {product.category}
            </p>
            <p className="mt-2 font-medium">
              {formatPrice(product.price, product.currency)}
            </p>
            <Button className="mt-6" disabled={!product.inStock}>
              {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
