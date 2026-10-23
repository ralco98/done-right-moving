import { useEffect, useState } from 'react';
import { PackageOpen, Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#quote' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-[5vw] py-4 max-w-[1600px] mx-auto">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <PackageOpen className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
          <span className="font-headline text-2xl tracking-wider text-foreground">
            DONE RIGHT!
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="label text-muted-foreground hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:8179966741"
            className="flex items-center gap-2 border border-border text-foreground px-4 py-2.5 rounded-sm text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            (817) 996-6741
          </a>
          <a
            href="#quote"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#quote');
            }}
            className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-sm text-sm hover:shadow-[0_0_20px_hsl(48_92%_55%/0.4)] transition-all duration-200 hover:scale-[1.03]"
          >
            Get a Free Quote
            <span className="text-base leading-none">&rarr;</span>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-[5vw] py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="label text-muted-foreground hover:text-accent transition-colors duration-150 py-3 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href="tel:8179966741"
                className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground px-4 py-3 rounded-sm text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#quote');
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-sm text-sm"
              >
                Get a Quote &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
