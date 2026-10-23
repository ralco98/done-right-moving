import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const TRUST_CHIPS = [
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: Clock, label: 'Same-Day Quote' },
  { icon: MapPin, label: 'DFW & Beyond' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/7464712/pexels-photo-7464712.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional mover carrying a couch across a sunny street"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />

      <div className="relative z-10 px-[5vw] lg:px-[7vw] max-w-[1600px] mx-auto w-full">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="label text-accent mb-6"
          >
            Moving & Delivery Services &middot; Serving DFW Since 2004
          </motion.p>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="headline text-foreground text-[clamp(56px,11vw,160px)] text-shadow-strong"
          >
            EFFICIENT,<br />
            RELIABLE,<br />
            <span className="text-accent">STRESS-FREE.</span>
          </motion.h1>

          <motion.p
            custom={0.26}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-lg lg:text-xl font-light text-foreground/80 max-w-2xl leading-relaxed"
          >
            Residential and commercial moves, packing, out-of-state relocations,
            and delivery — handled with care and professionalism every single time.
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-4 rounded-sm text-base hover:shadow-[0_0_25px_hsl(48_92%_55%/0.4)] transition-all duration-200 hover:scale-[1.03]"
            >
              Get a Free Quote &rarr;
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-7 py-4 rounded-sm text-base hover:border-accent hover:text-accent transition-all duration-200"
            >
              See Our Services
            </a>
          </motion.div>

          <motion.div
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap gap-3"
          >
            {TRUST_CHIPS.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-border rounded-sm px-4 py-2"
              >
                <chip.icon className="w-4 h-4 text-accent" />
                <span className="label text-foreground/70">{chip.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="label text-muted-foreground">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
