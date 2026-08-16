import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/format';

/**
 * Not part of the assignment's 3 required pages — kept as a light demo
 * screen so the "Оформить заказ" flow from the cart doesn't dead-end.
 * No backend, so submitting just clears the cart and shows a confirmation.
 */
export function CheckoutPage() {
  const { items, totalPrice, clear } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <section className="flex flex-col items-start gap-4 py-10">
        <h1 className="font-[var(--font-display)] text-2xl font-semibold">
          Спасибо за заказ!
        </h1>
        <p className="text-[var(--color-ink)]/70">
          Это демо-версия оформления заказа без реальной оплаты и отправки данных.
        </p>
        <Link to="/catalog">
          <Button variant="secondary">Вернуться в каталог</Button>
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section>
        <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
          Оформление заказа
        </h1>
        <p className="text-[var(--color-ink)]/70">
          Корзина пуста — добавьте товары, чтобы оформить заказ.
        </p>
        <Link to="/catalog" className="mt-4 inline-block">
          <Button variant="secondary">В каталог</Button>
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1 className="mb-6 font-[var(--font-display)] text-2xl font-semibold">
        Оформление заказа
      </h1>

      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setIsSubmitted(true);
          clear();
        }}
      >
        <Field label="Имя" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Телефон" name="phone" type="tel" autoComplete="tel" required />

        <div className="flex items-center justify-between border-t border-[var(--color-line)] pt-4">
          <span className="text-[var(--color-ink)]/70">К оплате</span>
          <span className="text-xl font-medium">{formatPrice(totalPrice)}</span>
        </div>

        <Button type="submit" className="mt-2">
          Подтвердить заказ
        </Button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-[var(--color-ink)]/70">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
      />
    </label>
  );
}
