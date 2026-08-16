import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(139,108,255,0.25)] hover:shadow-[0_0_28px_rgba(139,108,255,0.4)] hover:brightness-110',
  secondary:
    'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-line)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:bg-white/5',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

