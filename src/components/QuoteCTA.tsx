import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function QuoteCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-accent overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-foreground rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-foreground rounded-full blur-[120px]" />
      </div>

      <div className="relative px-[5vw] max-w-[1600px] mx-auto text-center">
        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="headline text-accent-foreground text-[clamp(40px,7vw,90px)] mb-6"
        >
          GET YOUR FREE QUOTE<br />
          IN 60 SECONDS
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-accent-foreground/70 font-light text-lg max-w-2xl mx-auto mb-10"
        >
          Tell us your move date, locations, and size — we'll come back with a
          fixed price, no surprises. Reliable & affordable, big or small.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#quote"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-sm text-base hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-[1.03]"
          >
            Get a Free Quote &rarr;
          </a>
          <p className="label text-accent-foreground/60">
            No Obligation &middot; Fixed Pricing &middot; Available 7 Days
          </p>
        </motion.div>
      </div>
    </section>
  );
}
