import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-start gap-4 py-12">
      <h1 className="font-[var(--font-display)] text-3xl font-semibold">
        Страница не найдена
      </h1>
      <p className="text-[var(--color-ink)]/70">
        Такой страницы не существует — возможно, ссылка устарела.
      </p>
      <Link to="/" className="text-[var(--color-accent)] underline">
        На главную
      </Link>
    </section>
  );
}
