import { Link } from 'react-router-dom';
import { ProductArt } from '@/components/product/ProductArt';
import { AddToCartButton } from '@/components/product/AddToCartButton';
import { formatPrice } from '@/lib/format';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-line)] bg-white/40 transition-colors focus-within:border-[var(--color-accent)] hover:border-[var(--color-accent)]">
      <Link
        to={`/product/${product.id}`}
        className="block aspect-[4/3] overflow-hidden rounded-t-lg focus:outline-none"
      >
        <ProductArt
          variant={product.art}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs uppercase tracking-wide text-[var(--color-accent)]">
          {product.category}
        </p>

        <h3 className="font-medium leading-snug">
          <Link
            to={`/product/${product.id}`}
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            {product.title}
          </Link>
        </h3>

        <p className="mt-auto pt-2 text-lg font-medium">
          {formatPrice(product.price, product.currency)}
        </p>

        <AddToCartButton product={product} className="mt-1 w-full" />
      </div>
    </article>
  );
}
