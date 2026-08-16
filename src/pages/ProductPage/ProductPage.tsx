import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductArt } from '@/components/product/ProductArt';
import { AddToCartButton } from '@/components/product/AddToCartButton';
import { mockProducts } from '@/entities/product/mockProducts';
import { formatPrice } from '@/lib/format';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-start gap-3 py-10">
        <p>Товар не найден.</p>
        <Link to="/catalog" className="text-[var(--color-accent)] underline">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <section>
      <Link
        to="/catalog"
        className="mb-6 inline-block rounded-sm text-sm text-[var(--color-ink)]/60 hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
      >
        ← Назад в каталог
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <ProductArt variant={product.art} className="h-full w-full" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--color-accent)]">
            {product.category}
          </p>
          <h1 className="mt-2 font-[var(--font-display)] text-3xl font-semibold">
            {product.title}
          </h1>
          <p className="mt-4 text-2xl font-medium">
            {formatPrice(product.price, product.currency)}
          </p>
          <p className="mt-4 text-[var(--color-ink)]/80">{product.description}</p>

          <h2 className="mt-8 text-sm font-medium uppercase tracking-wide text-[var(--color-ink)]/60">
            Характеристики
          </h2>
          <dl className="mt-3 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-2 text-sm">
                <dt className="text-[var(--color-ink)]/60">{spec.label}</dt>
                <dd className="text-right font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex items-center gap-4">
            {product.inStock && (
              <QuantityStepper value={quantity} onChange={setQuantity} />
            )}
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuantityStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="inline-flex items-center rounded-md border border-[var(--color-line)]"
      role="group"
      aria-label="Количество"
    >
      <StepButton
        label="Уменьшить количество"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
      >
        −
      </StepButton>
      <span className="w-8 text-center text-sm" aria-live="polite">
        {value}
      </span>
      <StepButton label="Увеличить количество" onClick={() => onChange(value + 1)}>
        +
      </StepButton>
    </div>
  );
}

function StepButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center text-lg text-[var(--color-ink)]/70 transition-colors hover:text-[var(--color-ink)] disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      {children}
    </button>
  );
}
