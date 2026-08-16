import type { InputHTMLAttributes } from 'react';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function GlassInput({ label, className = '', id, ...rest }: GlassInputProps) {
  const inputId = id ?? rest.name;
  return (
    <label className="flex flex-col gap-1.5 text-sm" htmlFor={inputId}>
      <span className="text-[var(--color-ink)]/65">{label}</span>
      {/* здесь liquid glass: поле ввода со свечением фокуса */}
      <input
        id={inputId}
        className={`glass rounded-xl px-4 py-2.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/35 outline-none transition-shadow duration-300 focus:shadow-[0_0_0_2px_var(--color-accent),0_0_24px_rgba(139,108,255,0.3)] ${className}`}
        {...rest}
      />
    </label>
  );
}