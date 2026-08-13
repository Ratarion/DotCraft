import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/about', label: 'О компании'},
  { to: '/contact', label: 'Контакты'},
  { to: '/menu', label: 'Меню' },
];

export function Header() {
  return (
    <header className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="font-[var(--font-display)] text-xl font-semibold tracking-tight"
        >
          Dot&Craft
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? 'text-[var(--color-accent)] font-medium'
                    : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/cart"
          className="rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm hover:border-[var(--color-accent)]"
        >
          Корзина
        </Link>
      </div>
    </header>
  );
}
