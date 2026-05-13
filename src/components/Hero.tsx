import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const TICKER_ITEMS = [
  'Дизайн', 'Разработка', 'Брендинг', 'UX/UI', 'Анимация', 'Стратегия',
  'Дизайн', 'Разработка', 'Брендинг', 'UX/UI', 'Анимация', 'Стратегия',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('[data-animate]');
    items?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg noise-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-neon-pink/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div
          data-animate
          className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/30 rounded-full text-neon-cyan text-xs font-golos uppercase tracking-widest mb-8"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          Доступен для проектов
        </div>

        <h1
          data-animate
          className="font-display text-6xl md:text-8xl lg:text-[120px] font-bold uppercase leading-none tracking-tight mb-6"
          style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <span className="block text-foreground">Создаю</span>
          <span className="block text-neon-cyan text-glow-cyan">цифровые</span>
          <span className="block text-foreground">продукты</span>
        </h1>

        <p
          data-animate
          className="font-golos text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          Дизайнер и разработчик. Превращаю идеи в яркие, запоминающиеся интерфейсы.
        </p>

        <div
          data-animate
          className="flex flex-wrap gap-4"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 px-8 py-4 bg-neon-cyan text-background font-display text-sm font-semibold uppercase tracking-widest rounded-sm hover:glow-cyan hover:scale-105 transition-all duration-300"
          >
            Смотреть работы
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 border border-border text-foreground font-display text-sm font-semibold uppercase tracking-widest rounded-sm hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
          >
            Обо мне
          </button>
        </div>

        <div
          data-animate
          className="mt-16 flex items-center gap-8 md:gap-12"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          {[
            { value: '50+', label: 'проектов' },
            { value: '5', label: 'лет опыта' },
            { value: '30+', label: 'клиентов' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-neon-cyan">{stat.value}</div>
              <div className="font-golos text-sm text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-b border-border/40 py-4 mt-8">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="font-display text-sm uppercase tracking-widest text-muted-foreground flex items-center gap-4">
              {item}
              <span className="text-neon-cyan">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
