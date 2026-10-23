import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const TESTIMONIALS = [
  {
    quote:
      'I was impressed by the professionalism and efficiency of Done Right! Moving & Delivery. They handled our commercial move with precision and care, ensuring everything arrived intact and on time. I would definitely use their services again.',
    name: 'James Parker',
    type: 'Commercial Move',
    image: 'https://images.pexels.com/photos/4320869/pexels-photo-4320869.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      "I can't thank Done Right! Moving & Delivery enough for their help with our out-of-state move. They made the process easy and stress-free, and our belongings arrived safely at our new home. I highly recommend them to anyone in need of moving services.",
    name: 'Sarah Adams',
    type: 'Out-of-State Move',
    image: 'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    quote:
      'The price he gave us to move was incredible. They worked HARD. Phillip and his crew were more than we could have ever asked for. They are very kind and work efficiently. I will be sure to use them again and hope you give them a try as well!',
    name: 'Joshua McLemore',
    type: 'Residential Move',
    image: 'https://images.pexels.com/photos/12311572/pexels-photo-12311572.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-surface-raised">
      <div className="px-[5vw] max-w-[1600px] mx-auto">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="label text-accent mb-4 text-center"
        >
          Testimonials
        </motion.p>

        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="headline text-foreground text-[clamp(40px,7vw,85px)] mb-16 text-center"
        >
          WHAT OUR CUSTOMERS SAY
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i * 0.12}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="bg-surface border border-border rounded-sm p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              <p className="text-foreground/80 font-light italic text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <div className="text-foreground font-medium text-sm">{t.name}</div>
                  <div className="label text-muted-foreground mt-0.5">{t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
