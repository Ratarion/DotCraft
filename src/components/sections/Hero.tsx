import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { productCategories } from '@/entities/product/mockProducts';

const SPRING = { type: 'spring' as const, stiffness: 200, damping: 22 };

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 py-10 sm:py-14 md:grid-cols-2 md:gap-16">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
          className="flex flex-col items-start gap-6"
        >
          <span className="hero-glass rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[3px] text-[var(--color-accent)]">
            Веб-студия
          </span>

          {/* заголовок со свечением */}
          <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient glow-text">Услуги, собранные</span>
            <br />
            с заботой о&nbsp;каждой детали
          </h1>

          <p className="max-w-md text-base text-[var(--color-ink)]/70 sm:text-lg">
            Оформляем сообщества, собираем сайты, выстраиваем бренд и помогаем
            расти в поиске — аккуратно сделанными заказами, без лишней суеты.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/catalog">
              {/* здесь liquid glass кнопка с усиленным glow на hover */}
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(139,108,255,0.35)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,108,255,0.55)]"
              >
                Перейти в каталог →
              </motion.span>
            </Link>

            <a href="#categories-heading">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                className="hero-glass inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-[var(--color-ink)]"
              >
                Смотреть направления
              </motion.span>
            </a>
          </div>

          {/* мини-статы — стеклянные чипы */}
          <div className="mt-2 flex flex-wrap gap-2">
            {[`${productCategories.length} направления`, 'Быстрые сроки', 'Работаем онлайн'].map((label) => (
              <span
                  key={label}
                  className="hero-glass rounded-full px-3.5 py-1.5 text-xs text-[var(--color-ink)]/70"
                >
                  {label}
                </span>
            ))}
          </div>
        </motion.div>
      </div>

      <BannerArt className="mx-auto w-full max-w-sm md:max-w-none" />
    </section>
  );
}




/** Loose cluster of dots — a literal nod to the "Dot&Craft" name. */
function BannerArt({ className = '' }: { className?: string }) {
  const dots = [
    { cx: 90, cy: 90, r: 34, fill: 'var(--color-accent)' },
    { cx: 190, cy: 60, r: 14, fill: 'var(--color-ink)' },
    { cx: 250, cy: 140, r: 22, fill: 'var(--color-accent)' },
    { cx: 150, cy: 170, r: 10, fill: 'var(--color-ink)' },
    { cx: 60, cy: 200, r: 16, fill: 'var(--color-ink)' },
    { cx: 220, cy: 230, r: 8, fill: 'var(--color-accent)' },
    { cx: 300, cy: 220, r: 12, fill: 'var(--color-ink)' },
  ];

  return (
    <svg
      viewBox="0 0 340 280"
      className={className}
      role="img"
      aria-label="Абстрактная композиция из точек, символизирующая бренд Dot&Craft"
    >
      <defs>
        <radialGradient id="bannerGlow" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        width="340"
        height="280"
        rx="24"
        fill="var(--color-accent-soft)"
      />
      <rect
        width="340"
        height="280"
        rx="24"
        fill="url(#bannerGlow)"
      />
      <path
        d="M90 90 L190 60 M190 60 L250 140 M250 140 L150 170 M150 170 L60 200 M150 170 L220 230 M250 140 L300 220"
        stroke="var(--color-ink)"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        fill="none"
      />
      {dots.map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill}
          opacity={dot.fill === 'var(--color-accent)' ? 0.95 : 0.85}
        />
      ))}
    </svg>
  );
}

