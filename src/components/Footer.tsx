import Icon from '@/components/ui/icon';

const LINKS = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Блог', href: '#blog' },
];

const SOCIALS = [
  { icon: 'Github', label: 'GitHub', href: '#' },
  { icon: 'Instagram', label: 'Instagram', href: '#' },
  { icon: 'Linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'Twitter', label: 'Twitter', href: '#' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl font-bold uppercase tracking-widest text-neon-cyan text-glow-cyan mb-4">
              STUDIO
            </div>
            <p className="font-golos text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Создаю цифровые продукты на стыке дизайна и технологий. Открыт для интересных проектов.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-golos text-xs text-neon-green uppercase tracking-widest">Доступен для работы</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Навигация</h4>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-golos text-sm text-foreground hover:text-neon-cyan transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neon-cyan group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Контакты</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 font-golos text-sm text-foreground hover:text-neon-cyan transition-colors group">
                <Icon name="Mail" size={14} className="text-neon-cyan" />
                hello@example.com
              </a>
              <a href="tel:+79000000000" className="flex items-center gap-3 font-golos text-sm text-foreground hover:text-neon-cyan transition-colors group">
                <Icon name="Phone" size={14} className="text-neon-cyan" />
                +7 900 000-00-00
              </a>
            </div>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:border-neon-cyan hover:text-neon-cyan transition-all duration-200 hover:scale-110"
                >
                  <Icon name={social.icon} size={15} fallback="Link" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative py-8 mb-8">
          <div className="font-display text-[10vw] md:text-[8vw] font-black uppercase text-foreground/5 leading-none select-none text-center tracking-tighter">
            PORTFOLIO
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
          <p className="font-golos text-xs text-muted-foreground">
            © 2026 Studio. Все права защищены.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-golos text-xs text-muted-foreground">Сделано с</span>
            <Icon name="Heart" size={12} className="text-neon-pink" />
            <span className="font-golos text-xs text-muted-foreground">и кофе</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
