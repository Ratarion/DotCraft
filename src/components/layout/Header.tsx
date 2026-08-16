import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/hooks/useCart';

const navItems = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/blog', label: 'Блог' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
];

const SPRING = { type: 'spring' as const, stiffness: 380, damping: 30 };

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Плотность стекла растёт при скролле — премиальная деталь
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeItem = navItems.find((item) => location.pathname.startsWith(item.to));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-[var(--color-line)]/70 bg-[var(--color-paper)]/80 backdrop-blur-2xl'
          : 'border-transparent bg-[var(--color-paper)]/40 backdrop-blur-2xl'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Логотип с мягким glow */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-sm font-[var(--font-display)] text-xl font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <span className="relative flex h-8 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]/30 blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            <img src="/logo.svg" alt="Dot&Craft" className="relative h-8 w-auto" />
          </span>
          <span className="text-gradient">Dot&Craft</span>
        </Link>

        {/* Desktop nav — liquid glass капсула */}
        <nav className="hidden lg:block" aria-label="Основная навигация">
          <div className="liquid-nav">
            {navItems.map((item) => {
              const isActive = item.to === activeItem?.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? 'var(--color-ink)' : 'var(--nav-text, rgba(232,228,240,0.62))' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={SPRING}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'var(--pill-bg)',
                        boxShadow: 'var(--pill-shadow)',
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <CartLink totalCount={totalCount} className="hidden lg:inline-flex" />

          <button
            type="button"
            className="nav-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-ink)] transition-transform duration-300 [transition-timing-function:var(--ease-spring)] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <BurgerIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      {/* ══ Мобильное/планшетное меню — glass-шторка с анимацией ══ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Мобильная навигация"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.34, 1.25, 0.64, 1] }}
            className="overflow-hidden border-t border-[var(--color-line)]/60 glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, ...SPRING }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-[var(--color-accent)]/15 font-medium text-[var(--color-accent)]'
                          : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <CartLink totalCount={totalCount} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
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
      className={`nav-glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-transform duration-300 [transition-timing-function:var(--ease-spring)] hover:scale-105 hover:shadow-[0_0_24px_rgba(139,108,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${className}`}
    >
      Корзина
      {totalCount > 0 && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-accent)] px-1.5 text-xs font-medium text-white shadow-[0_0_12px_rgba(139,108,255,0.6)]">
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
        <path d="M3 3 L15 15 M15 3 L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M2 5 H16 M2 9 H16 M2 13 H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}