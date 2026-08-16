import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Hero } from '@/components/sections/Hero';
import { CategoriesBlock } from '@/components/sections/CategoriesBlock';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

export function HomePage() {
  return (
    <div className="flex flex-col divide-y divide-[var(--color-line)]">
      <Hero />

      <ScrollReveal>
        <CategoriesBlock />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedProducts />
      </ScrollReveal>
    </div>
  );
}