import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts, productCategories } from '@/entities/product/mockProducts';

const categoryDescriptions: Record<string, string> = {
  Сообщества: 'Оформление сообществ и каналов',
  Сайты: 'Дизайн, вёрстка и сайты-визитки',
  Брендинг: 'Логотипы и фирменный стиль',
  Продвижение: 'SEO-аудит и рост в поиске',
};

const AUTOPLAY_MS = 4000;

export function CategoriesBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const intervalRef = useRef<number | null>(null);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = window.setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % productCategories.length
      );
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();

    return stopAutoplay;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const item = itemsRef.current[activeIndex];

    if (container && item) {
      const target =
        item.offsetLeft -
        container.offsetLeft -
        16;

      container.scrollTo({
        left: Math.max(0, target),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section
      className="py-10 sm:py-14"
      aria-labelledby="categories-heading"
    >
      <div className="mb-10 flex items-center justify-between">
        <h2
          id="categories-heading"
          className="font-[var(--font-display)] text-2xl font-semibold tracking-tight"
        >
          Категории услуг
        </h2>

        <Link
          to="/catalog"
          className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-soft)]"
        >
          Все услуги →
        </Link>
      </div>

      <div className="relative">
        {/* Левая стрелка */}
        <button
          type="button"
          onClick={() => {
            stopAutoplay();

            setActiveIndex(
              (prev) =>
                (prev - 1 + productCategories.length) %
                productCategories.length
            );

            startAutoplay();
          }}
          className="hidden sm:flex absolute left-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--color-line)]/60 bg-[var(--color-surface)]/80 text-[var(--color-ink)] backdrop-blur-xl transition-all hover:border-[var(--color-accent)] hover:text-white"
          aria-label="Предыдущая категория"
        >
          ←
        </button>

        {/* Правая стрелка */}
        <button
          type="button"
          onClick={() => {
            stopAutoplay();

            setActiveIndex(
              (prev) =>
                (prev + 1) % productCategories.length
            );

            startAutoplay();
          }}
          className="hidden sm:flex absolute right-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--color-line)]/60 bg-[var(--color-surface)]/80 text-[var(--color-ink)] backdrop-blur-xl transition-all hover:border-[var(--color-accent)] hover:text-white"
          aria-label="Следующая категория"
        >
          →
        </button>

        <div
          ref={containerRef}
          onPointerDown={stopAutoplay}
          onPointerCancel={startAutoplay}
          onPointerLeave={startAutoplay}
          onPointerUp={startAutoplay}
          onMouseLeave={startAutoplay}
          className="flex gap-8 overflow-x-auto overflow-y-visible py-8 snap-x snap-mandatory scrollbar-none -mx-2 px-2 sm:px-12"
          style={{ scrollbarWidth: 'none' }}
        >
          {productCategories.map((category, index) => {
            const count = mockProducts.filter(
              (p) => p.category === category
            ).length;

            const isActive = index === activeIndex;

            return (
              <Link
                key={category}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                to={`/catalog?category=${encodeURIComponent(category)}`}
                onFocus={() => setActiveIndex(index)}
                onPointerMove={(event) => {
                  if (event.pointerType !== 'mouse') return;

                  const element = event.currentTarget;
                  const rect = element.getBoundingClientRect();

                  const x =
                    ((event.clientX - rect.left) / rect.width) * 100;

                  const y =
                    ((event.clientY - rect.top) / rect.height) * 100;

                  const centerX = x - 50;
                  const centerY = y - 50;

                  const rotateY = centerX * 0.10;
                  const rotateX = centerY * -0.10;

                  element.style.setProperty(
                    '--mouse-x',
                    `${x}%`
                  );

                  element.style.setProperty(
                    '--mouse-y',
                    `${y}%`
                  );

                  element.style.setProperty(
                    '--rotate-x',
                    `${rotateX}deg`
                  );

                  element.style.setProperty(
                    '--rotate-y',
                    `${rotateY}deg`
                  );

                  element.style.setProperty(
                    '--glow-opacity',
                    '1'
                  );
                }}
                onPointerLeave={(event) => {
                  const element = event.currentTarget;

                  element.style.setProperty(
                    '--rotate-x',
                    '0deg'
                  );

                  element.style.setProperty(
                    '--rotate-y',
                    '0deg'
                  );

                  element.style.setProperty(
                    '--glow-opacity',
                    '0'
                  );
                }}
                className={`category-glass
                  ${isActive ? 'category-glass-active' : ''}
                  flex-shrink-0
                  block
                  w-[280px]
                  snap-center
                  origin-center
                  rounded-3xl
                  p-6
                  sm:w-[320px]
                  sm:p-7
                  lg:w-[340px]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-accent)]
                `}
              >
                <div className="relative z-10 flex flex-col gap-3">
                  <span className="text-xl font-medium">
                    {category}
                  </span>

                  <span className="text-sm leading-relaxed text-[var(--color-ink)]/70">
                    {categoryDescriptions[category] ??
                      'Услуги студии'}
                  </span>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[2px] text-[var(--color-accent)]">
                      {count} {pluralizeOffers(count)}
                    </span>

                    {isActive && (
                      <span className="rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                        Смотреть
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        {productCategories.map((category, index) => (
          <button
            key={category}
            type="button"
            aria-label={`Показать категорию ${category}`}
            onClick={() => {
              stopAutoplay();
              setActiveIndex(index);
              startAutoplay();
            }}
            className="group relative h-2 w-2 rounded-full"
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-125 bg-[var(--color-accent)] shadow-[0_0_10px_rgba(139,108,255,0.8)]'
                  : 'bg-[var(--color-line)] group-hover:bg-[var(--color-accent)]/50'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function pluralizeOffers(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 'услуга';
  }

  if (
    [2, 3, 4].includes(mod10) &&
    ![12, 13, 14].includes(mod100)
  ) {
    return 'услуги';
  }

  return 'услуг';
}