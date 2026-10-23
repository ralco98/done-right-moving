import { PackageOpen, Phone, Mail, MapPin, Star } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Residential Moving', href: '#services' },
      { label: 'Commercial Moves', href: '#services' },
      { label: 'Packing Services', href: '#services' },
      { label: 'Out of State Moves', href: '#services' },
      { label: 'Loading & Unloading', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Get a Quote', href: '#quote' },
      { label: 'Contact', href: '#quote' },
    ],
  },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-border pt-16 pb-8">
      <div className="px-[5vw] max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PackageOpen className="w-7 h-7 text-accent" strokeWidth={2.5} />
              <span className="font-headline text-2xl tracking-wider text-foreground">
                DONE RIGHT!
              </span>
            </div>
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs mb-4">
              Moving & Delivery Services. Efficient, reliable, and stress-free
              since 2004. Big or small, trust Done Right for them all.
            </p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-accent" />
              ))}
              <span className="label text-muted-foreground ml-2 self-center">4.0 Google</span>
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="label text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="text-muted-foreground hover:text-accent transition-colors duration-150 text-sm font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light text-sm">
                  601 N Oak St, Roanoke, TX 76262
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:8179966741"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-light"
                >
                  (817) 996-6741
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:donerightmoving@yahoo.com"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-light"
                >
                  donerightmoving@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-muted-foreground text-center sm:text-left">
            &copy; 2026 Done Right! Moving & Delivery &middot; All Rights Reserved
          </p>
          <p className="label text-muted-foreground">
            Fully Insured &middot; Reliable & Affordable
          </p>
        </div>
      </div>
    </footer>
  );
}
