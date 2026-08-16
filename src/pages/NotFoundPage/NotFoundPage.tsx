// ================================================
// NotFoundPage.tsx — ЭПИЧНАЯ 404 С ТЕКСТ-ГЛОУ (твой оригинал + жидкий космос)
// ================================================
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFoundPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-[100vw] bg-[var(--color-paper)] flex flex-col items-center justify-center overflow-hidden">
      {/* Космический фон с blob'ами — свой overflow-hidden, чтобы блобы
          никогда не создавали горизонтальный скролл на маленьких экранах */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[380px] w-[380px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)]/20 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] translate-x-1/4 translate-y-1/4 bg-[var(--color-ink)]/10 rounded-full blur-[90px] sm:blur-[120px]" />
        <div className="absolute top-0 left-0 h-[240px] w-[240px] sm:h-[400px] sm:w-[400px] -translate-x-1/4 -translate-y-1/4 bg-[var(--color-accent)]/10 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 60 }}
        transition={{ duration: 1, ease: [0.34, 1.25, 0.64, 1] }}
        className="relative z-10 w-full text-center px-6"
      >
        {/* Заголовок ошибки */}
        <p className="uppercase tracking-[8px] text-[var(--color-accent)] text-sm font-medium mb-6">Страница не найдена</p>

        {/* 404 с glow */}
        <motion.h1
          className="select-none text-[88px] sm:text-[180px] font-black leading-none text-white tracking-[-4px] sm:tracking-[-12px]"
          style={{
            textShadow: '0 0 100px rgba(139,108,255,0.6), 0 0 220px rgba(168,85,247,0.3)',
          }}
        >
          404
        </motion.h1>

        {/* Сообщение */}
        <div className="mt-8 max-w-lg mx-auto space-y-4">
          <p className="text-2xl font-semibold text-[var(--color-ink)]">Страница исчезла в космосе</p>
          <p className="text-[var(--color-muted)]">Такой страницы не существует — возможно, она была перенесена в другой мир</p>
        </div>

        {/* Кнопки */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center text-center px-10  rounded-3xl bg-gradient-to-r from-[var(--color-accent)] to-[#C4A5FF] text-black font-semibold text-sm hover:scale-105 transition-transform"
          >
            На главную
          </Link>
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center text-center px-10 py-4 rounded-3xl border border-white/20 text-white/90 hover:bg-white/5 transition-all"
          >
            В каталог
          </Link>
        </div>
      </motion.div>
    </div>
  );
}