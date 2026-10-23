import { motion } from 'framer-motion';
import { FileText, CalendarCheck, PackageCheck, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const STEPS = [
  {
    icon: FileText,
    title: 'Get a Quote',
    description: 'Tell us your move details — size, distance, and date. We come back with a fair, honest price.',
  },
  {
    icon: CalendarCheck,
    title: 'Book Your Date',
    description: 'Pick a date that works for you. We confirm your slot and walk you through everything beforehand.',
  },
  {
    icon: PackageCheck,
    title: 'We Pack & Load',
    description: 'Our trained crew arrives on time, packs with care, and loads everything safely into the truck.',
  },
  {
    icon: MapPin,
    title: 'Delivered On Time',
    description: 'Your belongings arrive safe and sound at your new location. We unload and place everything exactly where you want it.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 px-[5vw] max-w-[1600px] mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="label text-accent mb-4 text-center"
      >
        How It Works
      </motion.p>

      <motion.h2
        custom={0.1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="headline text-foreground text-[clamp(40px,7vw,85px)] mb-20 text-center"
      >
        THE DONE RIGHT PROCESS
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            custom={i * 0.12}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="font-headline text-[120px] text-accent/[0.07] absolute -top-8 -left-2 leading-none pointer-events-none select-none">
                {i + 1}
              </div>
              <div className="relative w-14 h-14 rounded-sm bg-surface-raised border border-border flex items-center justify-center group-hover:border-accent transition-colors duration-200">
                <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="font-headline text-2xl text-foreground tracking-wide mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              {step.description}
            </p>

            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-7 left-[90%] w-[calc(100%-90px)]">
                <div className="h-px bg-gradient-to-r from-border to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
