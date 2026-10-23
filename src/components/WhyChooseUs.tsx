import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Boxes, DollarSign } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const CHECKPOINTS = [
  { icon: ShieldCheck, label: 'Fully insured team' },
  { icon: Truck, label: 'Reliable fleet & equipment' },
  { icon: Boxes, label: 'Careful, trained crew' },
  { icon: DollarSign, label: 'No hidden charges' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="px-[5vw] max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/7464403/pexels-photo-7464403.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Two men loading a couch into a van on a sunny city street"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="label text-accent mb-4"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="headline text-foreground text-[clamp(40px,6vw,80px)] mb-8"
            >
              NO DAMAGE.<br />
              NO DRAMA.<br />
              <span className="text-accent">NO DELAYS.</span>
            </motion.h2>

            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-5 text-muted-foreground font-light text-base lg:text-lg leading-relaxed max-w-xl mb-8"
            >
              <p>
                Every move is handled by our trained, experienced team — not
                casual labor. We treat your belongings like our own, from the
                first box to the last.
              </p>
              <p>
                With over 20 years in the business, we've built a reputation on
                reliability, attention to detail, and getting the job done right
                the first time.
              </p>
            </motion.div>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {CHECKPOINTS.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-3 bg-surface-raised border border-border rounded-sm px-4 py-3 hover:border-accent transition-colors duration-200"
                >
                  <point.icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground/80 font-light text-sm">{point.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
