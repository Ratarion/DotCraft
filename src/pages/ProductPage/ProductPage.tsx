import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '@/entities/product/mockProducts';
import { formatPrice } from '@/lib/format';
import { Button } from '@/components/ui/Button';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <p>Товар не найден.</p>
        <Link to="/catalog" className="text-[var(--color-accent)] underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="aspect-square rounded-lg bg-[var(--color-accent-soft)]">
              {product.image && (
                  <img
                  src={product.image}
                  alt={product.title}
                  className='h-full w-full object-cover'
                  />
                )}
            </div>
      <div>
        <h1 className="font-[var(--font-display)] text-3xl font-semibold">
          {product.title}
        </h1>
        <p className="mt-2 text-[var(--color-ink)]/60">{product.category}</p>
        <p className="mt-4 text-2xl font-medium">
          {formatPrice(product.price, product.currency)}
        </p>
        <p className="mt-4 text-[var(--color-ink)]/80">
          {product.description}
        </p>

        <Button className="mt-6" disabled={!product.inStock}>
          {product.inStock ? 'Добавить в корзину' : 'Сейчас не можем'}
        </Button>
      </div>
    </section>
  );
}
