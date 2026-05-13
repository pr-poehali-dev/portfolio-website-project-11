import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const NAV_ITEMS = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Блог', href: '#blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="font-display text-xl font-bold tracking-widest uppercase text-neon-cyan text-glow-cyan"
        >
          STUDIO
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="font-golos text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-neon-cyan transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="px-5 py-2 bg-neon-cyan text-background font-display text-sm font-semibold uppercase tracking-widest rounded-sm hover:glow-cyan transition-all duration-300 hover:scale-105"
          >
            Связаться
          </button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left font-display text-lg uppercase tracking-widest text-foreground hover:text-neon-cyan transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-2 px-5 py-3 bg-neon-cyan text-background font-display text-sm font-semibold uppercase tracking-widest rounded-sm"
            >
              Связаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
