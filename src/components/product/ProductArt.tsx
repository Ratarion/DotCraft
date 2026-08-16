import type { ProductArtVariant } from '@/types/product';

interface ProductArtProps {
  variant: ProductArtVariant;
  className?: string;
}

/**
 * Brand-consistent product illustrations.
 *
 * The shop doesn't sell physical goods, so real product photos don't apply —
 * each service gets a small line-art icon instead. Every icon carries one
 * filled "dot" accent, a quiet nod to the "Dot&Craft" name.
 */
export function ProductArt({ variant, className = '' }: ProductArtProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={artLabels[variant]}
    >
      <rect width="400" height="400" fill="var(--color-accent-soft)" />
      {artByVariant[variant]}
    </svg>
  );
}

const artLabels: Record<ProductArtVariant, string> = {
  community: 'Иллюстрация: оформление сообщества',
  website: 'Иллюстрация: разработка сайта',
  branding: 'Иллюстрация: разработка бренда',
  promotion: 'Иллюстрация: продвижение и SEO',
};

const strokeProps = {
  fill: 'none',
  stroke: 'var(--color-ink)',
  strokeWidth: 4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const artByVariant: Record<ProductArtVariant, React.ReactNode> = {
  community: (
    <g>
      <rect x="96" y="132" width="150" height="104" rx="20" {...strokeProps} />
      <path d="M126 236 L126 264 L160 236" {...strokeProps} />
      <rect
        x="176"
        y="188"
        width="128"
        height="92"
        rx="20"
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
        strokeWidth="4"
      />
      <path
        d="M280 280 L280 306 L250 280"
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="132" cy="184" r="8" fill="var(--color-ink)" />
      <circle cx="164" cy="184" r="8" fill="var(--color-ink)" />
      <circle cx="238" cy="234" r="10" fill="var(--color-accent)" />
    </g>
  ),
  website: (
    <g>
      <rect x="88" y="112" width="224" height="176" rx="14" {...strokeProps} />
      <line x1="88" y1="152" x2="312" y2="152" {...strokeProps} />
      <circle cx="112" cy="132" r="6" fill="var(--color-ink)" />
      <circle cx="134" cy="132" r="6" fill="var(--color-ink)" />
      <circle cx="156" cy="132" r="6" fill="var(--color-accent)" />
      <rect x="112" y="176" width="80" height="88" rx="8" {...strokeProps} />
      <line x1="208" y1="176" x2="288" y2="176" {...strokeProps} />
      <line x1="208" y1="200" x2="288" y2="200" {...strokeProps} />
      <line x1="208" y1="224" x2="264" y2="224" {...strokeProps} />
    </g>
  ),
  branding: (
    <g>
      <circle cx="176" cy="196" r="72" {...strokeProps} />
      <path d="M196 128 L256 268 L136 268 Z" {...strokeProps} />
      <circle cx="256" cy="140" r="12" fill="var(--color-accent)" />
    </g>
  ),
  promotion: (
    <g>
      <line x1="104" y1="288" x2="104" y2="96" {...strokeProps} />
      <line x1="104" y1="288" x2="304" y2="288" {...strokeProps} />
      <rect x="128" y="220" width="32" height="68" fill="var(--color-ink)" />
      <rect x="180" y="180" width="32" height="108" fill="var(--color-ink)" />
      <rect x="232" y="140" width="32" height="148" fill="var(--color-ink)" />
      <path d="M132 176 L192 132 L232 160 L288 108" {...strokeProps} />
      <circle cx="288" cy="108" r="10" fill="var(--color-accent)" />
    </g>
  ),
};
