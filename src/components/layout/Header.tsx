import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const navItems = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
];

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `rounded-sm text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
    isActive
      ? 'font-medium text-[var(--color-accent)]'
      : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
  }`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-sm font-[var(--font-display)] text-xl font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <img
            src="/logo.svg"
            alt="Dot&Craft"
            className="h-8 w-auto"
          />
          <span>Dot&Craft</span>
        </Link>

        <nav
          className="hidden items-center gap-6 sm:flex"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartLink totalCount={totalCount} className="hidden sm:inline-flex" />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <BurgerIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t border-[var(--color-line)] px-4 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                {item.label}
              </NavLink>
            ))}
            <CartLink totalCount={totalCount} />
          </div>
        </nav>
      )}
    </header>
  );
}

function CartLink({
  totalCount,
  className = '',
}: {
  totalCount: number;
  className?: string;
}) {
  return (
    <Link
      to="/cart"
      className={`inline-flex items-center gap-2 rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm transition-colors hover:border-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${className}`}
    >
      Корзина
      {totalCount > 0 && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent)] px-1.5 text-xs font-medium text-white">
          {totalCount}
        </span>
      )}
    </Link>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M3 3 L15 15 M15 3 L3 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M2 5 H16 M2 9 H16 M2 13 H16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}