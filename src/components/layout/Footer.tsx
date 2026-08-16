import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-accent-soft)]/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-[var(--font-display)] text-lg font-semibold tracking-tight">
            Dot&Craft
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-ink)]/70">
            Небольшая студия цифровых услуг: сообщества, сайты, брендинг и
            продвижение — аккуратно и в срок.
          </p>
        </div>

        <nav aria-label="Ссылки в подвале">
          <p className="text-sm font-medium">Магазин</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--color-ink)]/70">
            <li>
              <Link
                to="/catalog"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Корзина
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-medium">Контакты</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-[var(--color-ink)]/70">
            <li>
              <a
                href="mailto:hello@dotcraft.studio"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                hello@dotcraft.studio
              </a>
            </li>
            <li>
              <a
                href="tel:+79990000000"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                +7 (999) 000-00-00
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-[var(--color-ink)]/60">
          © {new Date().getFullYear()} Dot&Craft. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
