import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const POINTS = [
  'Experienced team since 2004',
  'Personalized service for every move',
  'Safe transport of your belongings',
  'Residential & commercial expertise',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-[5vw] max-w-[1600px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="label text-accent mb-4"
          >
            About Us
          </motion.p>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="headline text-foreground text-[clamp(40px,6vw,80px)] mb-8"
          >
            SEAMLESS MOVES,<br />
            <span className="text-accent">SUPERIOR SERVICE.</span>
          </motion.h2>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5 text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-xl"
          >
            <p>
              Established in 2004, Done Right! Moving & Delivery has been a trusted
              partner for residential and commercial moves of all sizes. With a
              focus on reliability, efficiency, and customer satisfaction, we've
              built a reputation for excellence in the industry.
            </p>
            <p>
              Whether moving to a new home, relocating an office, or needing
              assistance with packing, we ensure a seamless transition. We
              prioritize the safety of your belongings and deliver them in
              pristine condition — every time.
            </p>
          </motion.div>

          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg"
          >
            {POINTS.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-foreground/80 font-light">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="https://images.pexels.com/photos/7464232/pexels-photo-7464232.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Two movers carrying boxes in a sunlit room"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-sm shadow-2xl hidden sm:block">
            <div className="font-headline text-5xl leading-none">20+</div>
            <div className="label mt-1 text-accent-foreground/70">Years Experience</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-surface-raised border border-border p-6 rounded-sm hidden sm:block">
            <div className="font-headline text-4xl text-accent leading-none">4.0★</div>
            <div className="label mt-1 text-muted-foreground">Google Rated</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
