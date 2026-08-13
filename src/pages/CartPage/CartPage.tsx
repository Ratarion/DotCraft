import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function CartPage() {
  const isEmpty = true;

  return (
    <section>
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Корзина
      </h1>

      {isEmpty ? (
        <div className="flex flex-col items-start gap-4">
          <p className="text-[var(--color-ink)]/70">Ваша корзина пуста.</p>
          <Link to="/catalog">
            <Button variant="secondary">В каталог</Button>
          </Link>
        </div>
      ) : (
        <Link to="/checkout">
          <Button>Оформить заказ</Button>
        </Link>
      )}
    </section>
  );
}
