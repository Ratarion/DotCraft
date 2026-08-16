import { Hero } from '@/components/sections/Hero';
import { CategoriesBlock } from '@/components/sections/CategoriesBlock';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

export function HomePage() {
  return (
    <div className="flex flex-col divide-y divide-[var(--color-line)]">
      <Hero />
      <CategoriesBlock />
      <FeaturedProducts />
    </div>
  );
}
