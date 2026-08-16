import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function Banner() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 py-10 sm:py-14 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col items-start gap-5">
        <p className="text-sm uppercase tracking-wide text-[var(--color-accent)]">
          ВЕБ-СТУДИЯ
        </p>
        <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Услуги, собранные с заботой о каждой детали
        </h1>
        <p className="max-w-md text-[var(--color-ink)]/70">
          Оформляем сообщества, собираем сайты, выстраиваем бренд и помогаем
          расти в поиске — небольшими и аккуратно сделанными заказами.
        </p>
        <Link to="/catalog">
          <Button>Перейти в каталог</Button>
        </Link>
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

