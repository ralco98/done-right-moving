import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, Building2, Truck, Container, Boxes, ArrowRight, X, CheckCircle2, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

type Service = {
  icon: typeof Home;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    icon: Home,
    title: 'Residential Moving',
    tagline: 'Your Home, Handled with Care',
    description:
      'Whether moving to a new house, apartment, or condo, we handle all aspects of your residential move — from packing and loading to transportation and unloading.',
    details: [
      'Full-service packing, loading, transportation, and unloading',
      'Furniture disassembly and reassembly included',
      'Free in-home or phone estimates',
      'Same-day local moves available',
      'Fragile items handled with specialized care',
    ],
    image: 'https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Package,
    title: 'Packing Services',
    tagline: 'Effortless Packing, Secure Transport',
    description:
      'Packing can be time-consuming and stressful. Let our professionals handle it with high-quality materials and techniques to keep your belongings safe in transit.',
    details: [
      'Full or partial packing services available',
      'High-quality boxes, bubble wrap, and packing materials provided',
      'Professional techniques for fragile and valuable items',
      'Labeling and inventory for organized unpacking',
      'Unpacking services also available at your new location',
    ],
    image: 'https://images.pexels.com/photos/7203849/pexels-photo-7203849.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Building2,
    title: 'Commercial Moves',
    tagline: 'Seamless Business Relocation',
    description:
      "Moving your business? Our experienced team specializes in commercial moves of all sizes, minimizing downtime so you're back up and running fast.",
    details: [
      'Office furniture, IT equipment, and file moves',
      'After-hours and weekend scheduling to minimize disruption',
      'Systematic labeling and floor-plan setup at new location',
      'Experience with warehouses, retail, and medical offices',
      'Dedicated project manager for larger moves',
    ],
    image: 'https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Truck,
    title: 'Out of State Moves',
    tagline: 'Across States, Stress-Free',
    description:
      'Moving across state lines? Our long-distance services ensure your belongings are transported safely and efficiently, no matter how far away.',
    details: [
      'Door-to-door long-distance moving service',
      'GPS-tracked trucks for real-time location updates',
      'Detailed inventory and itemized loading lists',
      'Flexible delivery windows to fit your schedule',
      'Fully insured for the entire journey',
    ],
    image: 'https://images.pexels.com/photos/4487485/pexels-photo-4487485.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Container,
    title: 'Loading & Unloading Pods',
    tagline: 'Pods Packed Right, Delivered with Ease',
    description:
      'Need help with a portable storage container? We have the experience and expertise to carefully load your belongings and unload them safely when ready.',
    details: [
      'Expert loading of PODS, U-Pack, and other containers',
      'Space-maximizing packing to fit more per container',
      'Furniture wrapping and secure tie-downs',
      'Unloading services when your container arrives',
      'Available for both residential and commercial containers',
    ],
    image: 'https://images.pexels.com/photos/6169177/pexels-photo-6169177.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Boxes,
    title: 'Delivery Services',
    tagline: 'Big or Small, We Deliver All',
    description:
      'From single items to full loads, our delivery service gets your items where they need to go — on time, intact, and with the same care as every move.',
    details: [
      'Single-item and multi-item delivery available',
      'Furniture, appliances, and large-item delivery',
      'White-glove handling and placement service',
      'Same-day local delivery available',
      'Insured for every item in transit',
    ],
    image: 'https://images.pexels.com/photos/7464724/pexels-photo-7464724.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const scrollToQuote = () => {
    setActiveService(null);
    setTimeout(() => {
      document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <section id="services" className="relative py-24 lg:py-32 bg-surface">
        <div className="px-[5vw] max-w-[1600px] mx-auto">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="label text-accent mb-4 text-center"
          >
            Our Services
          </motion.p>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="headline text-foreground text-[clamp(40px,7vw,85px)] mb-4 text-center"
          >
            WE MAKE MOVING EASY,<br />
            <span className="text-accent">FAST, AND HASSLE-FREE.</span>
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-muted-foreground font-light text-center max-w-2xl mx-auto mb-16 text-lg"
          >
            From residential to commercial, across town or across state lines —
            we've got the experience and team to get it done right.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.button
                key={service.title}
                custom={i * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                onClick={() => setActiveService(service)}
                className="group relative bg-surface-raised border border-border rounded-sm p-8 text-left transition-all duration-200 hover:border-accent hover:shadow-[0_0_18px_hsl(48_92%_55%/0.12)] cursor-pointer"
              >
                <div className="absolute top-6 right-6 font-headline text-6xl text-border group-hover:text-accent/15 transition-colors duration-200">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <service.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />

                <h3 className="font-headline text-2xl text-foreground mb-1 tracking-wide">
                  {service.title}
                </h3>
                <p className="label text-accent/80 mb-4">{service.tagline}</p>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} onQuote={scrollToQuote} />
    </>
  );
}

function ServiceModal({
  service,
  onClose,
  onQuote,
}: {
  service: Service | null;
  onClose: () => void;
  onQuote: () => void;
}) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative bg-surface-raised border border-border rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-sm bg-background/80 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-150"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-sm">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/40 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <service.icon className="w-12 h-12 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl sm:text-4xl text-foreground tracking-wide">
                  {service.title}
                </h3>
                <p className="label text-accent mt-1">{service.tagline}</p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-muted-foreground font-light text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground/80 font-light text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onQuote}
                  className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-sm text-base hover:shadow-[0_0_25px_hsl(48_92%_55%/0.4)] transition-all duration-200 hover:scale-[1.01]"
                >
                  <ArrowRight className="w-4 h-4" />
                  Request This Service
                </button>
                <a
                  href="tel:8179966741"
                  className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground px-6 py-4 rounded-sm text-base hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call (817) 996-6741
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
