import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const POSTS = [
  {
    id: 1,
    category: 'Дизайн',
    date: '10 мая 2026',
    title: '5 трендов UI-дизайна, которые изменят 2026 год',
    excerpt: 'Разбираем главные направления: bento-сетки, liquid glass, неоморфизм нового поколения и отказ от скевоморфизма.',
    readTime: '4 мин',
    color: 'cyan',
    tag: '🔥 Хит',
  },
  {
    id: 2,
    category: 'Разработка',
    date: '5 мая 2026',
    title: 'Как я ускорил загрузку сайта в 3 раза без бэкенда',
    excerpt: 'Практические советы по оптимизации: lazy loading, prefetch, code splitting и правильная работа с изображениями.',
    readTime: '6 мин',
    color: 'pink',
    tag: null,
  },
  {
    id: 3,
    category: 'Карьера',
    date: '28 апреля 2026',
    title: 'Фриланс vs найм: честный разбор после 5 лет в индустрии',
    excerpt: 'Личный опыт, цифры, плюсы и минусы каждого пути. Что выбрать, если вы только начинаете путь дизайнера.',
    readTime: '8 мин',
    color: 'cyan',
    tag: '✦ Личное',
  },
];

function useIntersection(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef as React.RefObject<Element>);

  return (
    <section id="blog" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-neon-pink">04</span>
              <span className="w-12 h-px bg-neon-pink" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">Блог</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-foreground leading-none">
              Мысли<br /><span className="text-neon-pink text-glow-pink">вслух</span>
            </h2>
          </div>
          <button className="group self-start md:self-auto flex items-center gap-3 px-6 py-3 border border-border text-muted-foreground font-display text-xs uppercase tracking-widest rounded-sm hover:border-neon-pink hover:text-neon-pink transition-all duration-300">
            Все статьи
            <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <article
              key={post.id}
              className={`group relative bg-card border border-border rounded-xl overflow-hidden card-hover cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className={`h-1 w-full ${post.color === 'cyan' ? 'bg-gradient-to-r from-neon-cyan to-neon-cyan/20' : 'bg-gradient-to-r from-neon-pink to-neon-pink/20'}`} />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-display text-xs uppercase tracking-widest ${post.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'}`}>
                    {post.category}
                  </span>
                  {post.tag && (
                    <span className="font-golos text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-sm">
                      {post.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-foreground leading-tight mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="font-golos text-sm text-muted-foreground leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-golos text-xs text-muted-foreground">{post.date}</span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    <span className="font-golos text-xs">{post.readTime}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                  <span className="font-display text-xs uppercase tracking-widest">Читать</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-16 p-8 md:p-12 bg-card border border-border rounded-xl relative overflow-hidden transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-neon-pink/10 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-2">
                Подпишитесь на <span className="text-neon-pink">рассылку</span>
              </h3>
              <p className="font-golos text-muted-foreground text-sm">
                Новые статьи и кейсы — прямо в почту, без спама
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-3 bg-background border border-border rounded-sm font-golos text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-pink transition-colors"
              />
              <button className="px-6 py-3 bg-neon-pink text-white font-display text-xs uppercase tracking-widest rounded-sm hover:glow-pink hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
