import { useCountUp, useInView } from '../hooks/useScrollAnim';

const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 8000, suffix: '+', label: 'Moves Completed' },
  { value: 100, suffix: '%', label: 'Insured & Licensed' },
  { value: 4, suffix: '.0★', label: 'Google Rating' },
];

export default function StatsStrip() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="bg-accent py-12 lg:py-16 overflow-hidden">
      <div className="px-[5vw] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-accent-foreground/15">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  inView,
  delay,
}: {
  stat: { value: number; suffix: string; label: string };
  inView: boolean;
  delay: number;
}) {
  const animated = useCountUp(stat.value, 2000, inView);
  const displayValue = stat.value >= 1000 ? Math.round(animated).toLocaleString() : Math.round(animated);

  return (
    <div className={`text-center lg:px-4 ${delay > 0 ? 'lg:border-l' : ''}`}>
      <div className="font-headline text-[clamp(48px,7vw,80px)] text-accent-foreground leading-none">
        {displayValue}
        <span className="text-[0.5em]">{stat.suffix}</span>
      </div>
      <div className="label text-accent-foreground/60 mt-3">{stat.label}</div>
    </div>
  );
}
