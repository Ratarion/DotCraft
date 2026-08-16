import { Link } from 'react-router-dom';
import { ProductArt } from '@/components/product/ProductArt';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/format';

export function CartPage() {
  const { items, totalPrice, setQuantity, removeItem, clear } = useCart();

  return (
    <section>
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Корзина
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-start gap-4">
          <p className="text-[var(--color-ink)]/70">Ваша корзина пуста.</p>
          <Link to="/catalog">
            <Button variant="secondary">В каталог</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <ul className="flex flex-1 flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {items.map((item) => (
              <li key={item.product.id} className="flex gap-4 py-4">
                <Link
                  to={`/product/${item.product.id}`}
                  className="h-20 w-20 shrink-0 overflow-hidden rounded-md"
                >
                  <ProductArt variant={item.product.art} className="h-full w-full" />
                </Link>

                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-medium hover:text-[var(--color-accent)]"
                    >
                      {item.product.title}
                    </Link>
                    <p className="font-medium">
                      {formatPrice(item.product.price * item.quantity, item.product.currency)}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--color-ink)]/60">
                    {formatPrice(item.product.price, item.product.currency)} / шт.
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm">
                      Кол-во:
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(event) =>
                          setQuantity(item.product.id, Number(event.target.value) || 1)
                        }
                        className="w-16 rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-2 py-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="rounded-sm text-sm text-[var(--color-ink)]/60 underline-offset-2 hover:text-[var(--color-ink)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="w-full shrink-0 rounded-lg border border-[var(--color-line)] p-5 lg:w-72">
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-ink)]/70">Итого</span>
              <span className="text-xl font-medium">{formatPrice(totalPrice)}</span>
            </div>

            <Link to="/checkout" className="mt-4 block">
              <Button className="w-full">Оформить заказ</Button>
            </Link>

            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full rounded-sm text-center text-sm text-[var(--color-ink)]/60 hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              Очистить корзину
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
