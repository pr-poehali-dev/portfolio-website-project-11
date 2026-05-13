import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const SKILLS = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Frontend Dev', level: 88 },
  { name: 'Брендинг', level: 82 },
  { name: 'Motion Design', level: 75 },
];

const SERVICES = [
  { icon: 'Layers', title: 'Дизайн интерфейсов', desc: 'Создаю удобные и красивые UI для web и mobile' },
  { icon: 'Code2', title: 'Веб-разработка', desc: 'Разрабатываю быстрые и современные сайты' },
  { icon: 'Zap', title: 'Брендинг', desc: 'Разрабатываю фирменный стиль с нуля' },
  { icon: 'TrendingUp', title: 'Стратегия', desc: 'Помогаю выстроить продуктовую стратегию' },
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

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef as React.RefObject<Element>);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/3 via-transparent to-neon-pink/3" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-neon-cyan">03</span>
              <span className="w-12 h-px bg-neon-cyan" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">Обо мне</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase text-foreground leading-none mb-8">
              Привет,<br />я <span className="text-neon-cyan text-glow-cyan">дизайнер</span><br />и разработчик
            </h2>
            <p className="font-golos text-muted-foreground text-lg leading-relaxed mb-6">
              Я создаю цифровые продукты, которые работают и выглядят отлично. 
              Фокусируюсь на деталях, функциональности и эстетике.
            </p>
            <p className="font-golos text-muted-foreground leading-relaxed mb-10">
              5 лет в индустрии, более 50 реализованных проектов для стартапов 
              и крупных компаний. Работаю на стыке дизайна и технологий.
            </p>

            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <div key={skill.name} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display text-sm uppercase tracking-widest text-foreground">{skill.name}</span>
                    <span className="font-display text-xs text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full transition-all duration-1000"
                      style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${i * 100 + 500}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 group flex items-center gap-3 px-8 py-4 bg-neon-cyan text-background font-display text-sm font-semibold uppercase tracking-widest rounded-sm hover:glow-cyan hover:scale-105 transition-all duration-300">
              Скачать резюме
              <Icon name="Download" size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 rounded-2xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-xl overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-pink/30 border-2 border-neon-cyan/50 mb-6 flex items-center justify-center glow-cyan animate-float">
                    <span className="text-5xl">👤</span>
                  </div>
                  <div className="font-display text-2xl font-bold uppercase text-foreground mb-2">Ваше Имя</div>
                  <div className="font-golos text-sm text-neon-cyan uppercase tracking-widest mb-6">Designer & Developer</div>
                  
                  <div className="flex gap-4">
                    {['Behance', 'Dribbble', 'GitHub'].map((social) => (
                      <button key={social} className="px-4 py-2 border border-border rounded-sm font-golos text-xs text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan transition-all duration-200">
                        {social}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-neon-pink">50+</div>
                <div className="font-golos text-xs text-muted-foreground uppercase tracking-wider mt-1">проектов</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="font-display text-2xl font-bold text-neon-cyan">30+</div>
                <div className="font-golos text-xs text-muted-foreground uppercase tracking-wider mt-1">клиентов</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`group p-6 bg-card border border-border rounded-xl card-hover transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100 + 400}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/40 transition-all duration-300">
                <Icon name={service.icon} size={20} className="text-neon-cyan" fallback="Star" />
              </div>
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-golos text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}