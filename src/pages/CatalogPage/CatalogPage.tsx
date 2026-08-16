import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts, productCategories } from '@/entities/product/mockProducts';
import type { ProductCategory } from '@/types/product';
import { ScrollReveal } from '@/components/ui/ScrollReveal';



type SortOption = 'default' | 'price-asc' | 'price-desc';

const sortLabels: Record<SortOption, string> = {
  default: 'По умолчанию',
  'price-asc': 'Сначала дешевле',
  'price-desc': 'Сначала дороже',
};

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('category');
  const sort = (searchParams.get('sort') as SortOption) ?? 'default';

  const products = useMemo(() => {
    let result = mockProducts;

    if (activeCategory) {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (sort === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sort]);

  function updateParam(key: 'category' | 'sort', value: string | null) {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  }

  return (
    <section>
      <ScrollReveal className="w-full" >
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Каталог
      </h1>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={(category) => updateParam('category', category)}
        />

        <label className="flex items-center gap-2 text-sm">
          <span className="text-[var(--color-ink)]/70">Сортировка:</span>
          <select
            value={sort}
            onChange={(event) => updateParam('sort', event.target.value)}
            className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] px-2 py-1.5 text-sm text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"

          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {products.length === 0 ? (
        <p className="text-[var(--color-ink)]/70">
          В этой категории пока нет товаров.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      )}
      </ScrollReveal>
    </section>
  );
}

function CategoryFilter({
  activeCategory,
  onChange,
}: {
  activeCategory: string | null;
  onChange: (category: ProductCategory | null) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Фильтр по категории"
    >
      <FilterPill
        label="Все"
        isActive={activeCategory === null}
        onClick={() => onChange(null)}
      />
      {productCategories.map((category) => (
        <FilterPill
          key={category}
          label={category}
          isActive={activeCategory === category}
          onClick={() => onChange(category)}
        />
      ))}
    </div>
  );
}

function FilterPill({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
        isActive
          ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
          : 'border-[var(--color-line)] text-[var(--color-ink)]/70 hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]'
      }`}
    >
      {label}
    </button>
  );
}
