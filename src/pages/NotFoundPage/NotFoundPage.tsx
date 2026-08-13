import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-start gap-4 py-12">
      <h1 className="font-[var(--font-display)] text-3xl font-semibold">
        Страница не найдена
      </h1>
      <Link to="/" className="text-[var(--color-accent)] underline">
        На главную
      </Link>
    </section>
  );
}
