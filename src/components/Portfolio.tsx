import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const PROJECTS = [
  {
    id: 1,
    title: 'Цифровая платформа',
    category: 'Веб-разработка',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/8cf1f413-ae86-4d66-889d-ea0b90071d98/files/52b2fac8-29c4-430b-acf1-656eb1fbd22b.jpg',
    tags: ['React', 'TypeScript', 'Node.js'],
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Ребрендинг студии',
    category: 'Брендинг',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/8cf1f413-ae86-4d66-889d-ea0b90071d98/files/06d4dba9-4f07-47d6-b6f8-5975890f6b96.jpg',
    tags: ['Логотип', 'Айдентика', 'Гайдлайн'],
    color: 'pink',
  },
  {
    id: 3,
    title: 'Мобильное приложение',
    category: 'UX/UI Design',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/8cf1f413-ae86-4d66-889d-ea0b90071d98/files/6c09ba8f-5eed-467b-9c95-3b82055b7f97.jpg',
    tags: ['Figma', 'Prototyping', 'iOS'],
    color: 'cyan',
  },
];

const FILTERS = ['Все', 'Веб-разработка', 'Брендинг', 'UX/UI Design'];

function useIntersection(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIntersection(sectionRef as React.RefObject<Element>);
  const [activeFilter, setActiveFilter] = useState('Все');

  const filtered = activeFilter === 'Все'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-neon-cyan">02</span>
            <span className="w-12 h-px bg-neon-cyan" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">Портфолио</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-foreground leading-none">
            Избранные<br /><span className="text-neon-cyan text-glow-cyan">работы</span>
          </h2>
        </div>

        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 font-display text-xs uppercase tracking-widest rounded-sm transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-neon-cyan text-background glow-cyan'
                  : 'border border-border text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative bg-card border border-border rounded-lg overflow-hidden card-hover transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/10 transition-colors duration-500" />
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${project.color === 'cyan' ? 'bg-neon-cyan' : 'bg-neon-pink'}`}>
                    <Icon name="ArrowUpRight" size={18} className="text-background" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display text-xs uppercase tracking-widest ${project.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-pink'}`}>
                    {project.category}
                  </span>
                  <span className="font-golos text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-foreground mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-golos bg-secondary text-muted-foreground rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-display text-sm font-semibold uppercase tracking-widest rounded-sm hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300">
            Все проекты
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
