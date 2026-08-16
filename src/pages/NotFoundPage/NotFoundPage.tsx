import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-4 py-16 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-900/30 blur-[100px]" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Small label */}
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
          Ошибка 404
        </p>

        {/* Giant 404 */}
        <h1
          className="select-none font-[var(--font-display)] text-[100px] font-black leading-none tracking-tighter text-white sm:text-[140px] md:text-[180px]"
          style={{
            textShadow:
              '0 0 80px rgba(168, 85, 247, 0.35), 0 0 160px rgba(168, 85, 247, 0.15)',
          }}
        >
          404
        </h1>

        {/* Message */}
        <div className="mt-6 max-w-md space-y-2">
          <p className="font-[var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
            Страница не найдена
          </p>
          <p className="text-[var(--color-ink)]/60 text-sm sm:text-base">
            Такой страницы не существует — возможно, ссылка устарела
            или страница была перемещена.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            На главную
          </Link>

          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            В каталог
          </Link>
        </div>
      </div>
    </div>
  );
}