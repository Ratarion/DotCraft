export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[var(--color-ink)]/60">
        Информация
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--color-ink)]/60">
          © {new Date().getFullYear()} Dot&Craft. Все права защищены.
        </div>
      </div>
    </footer>
  );
}