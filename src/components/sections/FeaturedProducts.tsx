import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts } from '@/entities/product/mockProducts';

export function FeaturedProducts() {
  return (
    <section className="py-10 sm:py-14" aria-labelledby="featured-heading">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2
          id="featured-heading"
          className="font-[var(--font-display)] text-2xl font-semibold tracking-tight"
        >
          Популярные услуги
        </h2>
        <Link
          to="/catalog"
          className="rounded-sm text-sm text-[var(--color-accent)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          Весь каталог →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
