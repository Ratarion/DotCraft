import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(139,108,255,0.25)] hover:shadow-[0_0_32px_rgba(139,108,255,0.45)] hover:brightness-110',
  secondary:
    'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-line)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:bg-white/5',
  // здесь liquid glass кнопка — для второстепенных действий на стеклянных панелях
  glass:
    'glass text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_24px_rgba(139,108,255,0.2)]',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 [transition-timing-function:var(--ease-spring)] hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}