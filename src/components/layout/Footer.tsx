export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-[var(--color-ink)]/60">
        © {new Date().getFullYear()} Магазин. Все права защищены.
      </div>
    </footer>
  );
}
