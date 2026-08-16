import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3">
        {/* Левая колонка – описание */}
        <div>
          <p className="font-[var(--font-display)] text-lg font-semibold tracking-tight">
            Dot&Craft
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-ink)]/70">
            Вуб-студия цифровых услуг: сообщества, сайты, брендинг и
            продвижение — аккуратно и в срок.
          </p>
        </div>

        {/* Средняя колонка – навигация */}
        <nav aria-label="Ссылки в подвале">
          <p className="text-sm font-medium">Навигация</p>
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
            <li>
              <Link
                to="/contacts"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Контакты
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                О компании
              </Link>
            </li>
          </ul>
        </nav>

        {/* Правая колонка – контакты с увеличенными иконками */}
        <div>
          <p className="text-sm font-medium">Контакты</p>
          <ul className="mt-3 flex flex-col gap-3 text-sm text-[var(--color-ink)]/70">
            <li className="flex items-center gap-3">
              <img src="/email.svg" alt="Email" className="h-7 w-7" />
              <a
                href="mailto:gustausartrm@gmail.com"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                gustausartrm@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src="/phone.svg" alt="Phone" className="h-7 w-7" />
              <a
                href="tel:+79922927286"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                +7 (992) 292-72-86
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src="/vk.svg" alt="VK" className="h-7 w-7" />
              <a
                href="https://vk.ru/dotandcraft"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Официальная группа
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src="/vk.svg" alt="Имя" className="h-7 w-7" />
              <a
                href="https://vk.ru/id497112867"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Артем Густаус
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src="/map.svg" alt="Адрес" className="h-7 w-7" />
              <a
                href="https://yandex.ru/maps/213/moscow/house/elektrolitny_proyezd_7/Z04YcAdpQUQGQFtvfXp2cnhhbA==/?ll=37.610917%2C55.673875&z=17.92"
                className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                Москва, Электролитный проезд, д.7, Великие Луки
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-[var(--color-ink)]/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Dot&Craft. Все права защищены.</span>
          <Link
            to="/privacy"
            className="rounded-sm hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}