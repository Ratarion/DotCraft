<<<<<<< HEAD
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/product/ProductCard';
import { mockProducts, productCategories } from '@/entities/product/mockProducts';
import type { ProductCategory } from '@/types/product';

type SortOption = 'default' | 'price-asc' | 'price-desc';

const sortLabels: Record<SortOption, string> = {
  default: 'По умолчанию',
  'price-asc': 'Сначала дешевле',
  'price-desc': 'Сначала дороже',
};
=======
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '@/entities/product/mockProducts';
import { formatPrice } from '@/lib/format';
import { Button } from '@/components/ui/Button';
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f

type SortOption = 'default' | 'price-asc' | 'price-desc';

export function CatalogPage() {
<<<<<<< HEAD
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
=======
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [sort, setSort] = useState<SortOption>('default');

  const categories = useMemo(() => {
    const map = new Map<string, string>();
    mockProducts.forEach((p) => {
      map.set(p.category.id, p.category.name);
    });
    return Array.from(map.entries());
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.name.toLowerCase().includes(q)
      );
    }

    if (category !== 'all') {
      result = result.filter((p) => p.category.id === category);
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f

  return (
    <section>
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Каталог
      </h1>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<<<<<<< HEAD
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={(category) => updateParam('category', category)}
        />

        <label className="flex items-center gap-2 text-sm">
          <span className="text-[var(--color-ink)]/70">Сортировка:</span>
          <select
            value={sort}
            onChange={(event) => updateParam('sort', event.target.value)}
            className="rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-2 py-1.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
=======
        <input
          type="search"
          placeholder="Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs rounded-md border border-[var(--color-line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
        />

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border border-[var(--color-line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          >
            <option value="all">Все категории</option>
            {categories.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-md border border-[var(--color-line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена: по возрастанию</option>
            <option value="price-desc">Цена: по убыванию</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-[var(--color-ink)]/60">Ничего не найдено</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
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
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <h2 className="font-medium">{product.title}</h2>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                {product.category.name}   {/* ← .name */}
              </p>
              <p className="mt-2 font-medium">
                {formatPrice(product.price, product.currency)}
              </p>
              <Button className="mt-6" disabled={!product.inStock}>
                {product.inStock ? 'Добавить в корзину' : 'Сейчас не можем'}
              </Button>
            </Link>
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f
          ))}
        </div>
      )}
    </section>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> 83c228d905cca2fac1874b9fee842e89f77cb07f
