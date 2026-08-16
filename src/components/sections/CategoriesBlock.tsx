import { Link } from 'react-router-dom';
import { mockProducts, productCategories } from '@/entities/product/mockProducts';

const categoryDescriptions: Record<string, string> = {
  Сообщества: 'Оформление сообществ и каналов',
  Сайты: 'Дизайн, вёрстка и сайты-визитки',
  Брендинг: 'Логотипы и фирменный стиль',
  Продвижение: 'SEO-аудит и рост в поиске',
};

export function CategoriesBlock() {
  return (
    <section className="py-10 sm:py-14" aria-labelledby="categories-heading">
      <h2
        id="categories-heading"
        className="font-[var(--font-display)] text-2xl font-semibold tracking-tight"
      >
        Категории услуг
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {productCategories.map((category) => {
          const count = mockProducts.filter(
            (product) => product.category === category,
          ).length;

          return (
            <Link
              key={category}
              to={`/catalog?category=${encodeURIComponent(category)}`}
              className="flex flex-col gap-1 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-4 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(139,108,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"

            >
              <span className="font-medium">{category}</span>
              <span className="text-sm text-[var(--color-ink)]/60">
                {categoryDescriptions[category] ?? 'Услуги студии'}
              </span>
              <span className="mt-2 text-xs uppercase tracking-wide text-[var(--color-accent)]">
                {count} {pluralizeOffers(count)}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function pluralizeOffers(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return 'услуга';
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
    return 'услуги';
  }
  return 'услуг';
}
