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
      setActiveIndex((prev) => (prev + 1) % productCategories.length);
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Автопрокрутка, с паузой пока пользователь взаимодействует (тач/мышь)
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  // Центрируем активную карточку. offsetLeft не зависит от текущего
  // scrollLeft, поэтому позиция всегда считается верно — в отличие от
  // getBoundingClientRect, который давал накопительную ошибку и «залипание».
  useEffect(() => {
    const container = containerRef.current;
    const item = itemsRef.current[activeIndex];

    if (container && item) {
      const target = item.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({
        left: Math.max(0, target),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-10 sm:py-14" aria-labelledby="categories-heading">
      <div className="flex items-center justify-between mb-10">
        <h2 id="categories-heading" className="font-[var(--font-display)] text-2xl font-semibold tracking-tight">
          Категории услуг
        </h2>

        <Link
          to="/catalog"
          className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-soft)] transition-colors"
        >
          Все услуги →
        </Link>
      </div>

      <div className="relative">
        {/* Стрелки — только от планшета и выше, на телефоне мешают тапу по краю карточки, там работает свайп */}
        <button
          type="button"
          onClick={() => {
            stopAutoplay();
            setActiveIndex((prev) => (prev - 1 + productCategories.length) % productCategories.length);
            startAutoplay();
          }}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-[var(--color-surface)]/90 backdrop-blur-md rounded-2xl border border-[var(--color-line)]/60 text-[var(--color-ink)] hover:text-white hover:border-[var(--color-accent)] transition-all"
          aria-label="Предыдущая категория"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => {
            stopAutoplay();
            setActiveIndex((prev) => (prev + 1) % productCategories.length);
            startAutoplay();
          }}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-[var(--color-surface)]/90 backdrop-blur-md rounded-2xl border border-[var(--color-line)]/60 text-[var(--color-ink)] hover:text-white hover:border-[var(--color-accent)] transition-all"
          aria-label="Следующая категория"
        >
          →
        </button>

        <div
          ref={containerRef}
          onPointerDown={stopAutoplay}
          onPointerUp={startAutoplay}
          onMouseLeave={startAutoplay}
          className="flex gap-8 overflow-x-auto overflow-y-visible py-6 snap-x snap-mandatory scrollbar-none -mx-2 px-2 sm:px-12"
          style={{ scrollbarWidth: 'none' }}
        >
          {productCategories.map((category, index) => {
            const count = mockProducts.filter((p) => p.category === category).length;

            return (
              <Link
                key={category}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                to={`/catalog?category=${encodeURIComponent(category)}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`
                  flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px]
                  rounded-3xl border border-[var(--color-line)]
                  bg-[var(--color-surface)]/50 p-6 sm:p-7 transition-all duration-300
                  snap-center origin-center block
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                  ${index === activeIndex
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 shadow-[0_0_32px_rgba(139,108,255,0.28)] scale-[1.03] z-10'
                    : 'hover:border-[var(--color-accent)] hover:shadow-[0_0_22px_rgba(139,108,255,0.12)] hover:scale-[1.02] hover:z-10'
                  }
                `}
              >
                <div className="flex flex-col gap-3">
                  <span className="font-medium text-xl">{category}</span>
                  <span className="text-sm text-[var(--color-ink)]/70 leading-relaxed">
                    {categoryDescriptions[category] ?? 'Услуги студии'}
                  </span>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[2px] text-[var(--color-accent)] font-medium">
                      {count} {pluralizeOffers(count)}
                    </span>

                    {index === activeIndex && (
                      <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full font-medium">
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
    </section>
  );
}

function pluralizeOffers(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return 'услуга';
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
    return 'услуги';
  }
  return 'услуг';
}