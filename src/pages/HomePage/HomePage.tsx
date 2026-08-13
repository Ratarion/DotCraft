import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function HomePage() {
  return (
    <section className="flex flex-col items-start gap-4 py-12">
      <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight">
        Товары, сделанные с заботой
      </h1>
      <p className="max-w-xl text-[var(--color-ink)]/70">
        Стартовая страница проекта.
      </p>
      <Link to="/catalog">
        <Button>Перейти в каталог</Button>
      </Link>
    </section>
  );
}
