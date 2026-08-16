import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const navItems = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) =>
      location.pathname.startsWith(item.to)
    );

    const activeBtn = btnRefs.current[activeIndex];
    const pill = pillRef.current;

    if (activeBtn && pill) {
      pill.style.width = `${activeBtn.offsetWidth}px`;
      pill.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    } else if (pill) {
      pill.style.width = '0px';
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)]/60 bg-[var(--color-paper)]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-sm font-[var(--font-display)] text-xl font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <img src="/logo.svg" alt="Dot&Craft" className="h-8 w-auto" />
          <span>Dot&Craft</span>
        </Link>

        {/* Полное меню — только настоящий десктоп (>=1024px) */}
        <nav
          className="hidden lg:block"
          aria-label="Основная навигация"
        >
          <div className="liquid-nav" ref={navRef}>
            <div className="nav-items">
              <div className="active-pill" ref={pillRef} />
              {navItems.map((item, i) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  ref={(el) => {
                    btnRefs.current[i] = el;
                  }}
                  className={({ isActive }) =>
                    `nav-btn ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <CartLink totalCount={totalCount} className="hidden lg:inline-flex" />

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <BurgerIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* Мобильное/планшетное меню — до 1024px */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t border-[var(--color-line)] px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-[var(--color-accent)]/15 font-medium text-[var(--color-accent)]'
                      : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
                  }`
                }
              >
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
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/60 px-3.5 py-1.5 text-sm backdrop-blur-md transition-colors hover:border-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${className}`}
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