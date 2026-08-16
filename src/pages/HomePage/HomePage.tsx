import { Banner } from '@/components/sections/Banner';
import { CategoriesBlock } from '@/components/sections/CategoriesBlock';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

export function HomePage() {
  return (
    <div className="flex flex-col divide-y divide-[var(--color-line)]">
      <Banner />
      <CategoriesBlock />
      <FeaturedProducts />
    </div>
  );
}
