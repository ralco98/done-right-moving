import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Where to Find Us',
    value: '601 N Oak St, Roanoke, TX 76262',
  },
  {
    icon: Phone,
    label: 'Contact',
    value: '(817) 996-6741',
    href: 'tel:8179966741',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'donerightmoving@yahoo.com',
    href: 'mailto:donerightmoving@yahoo.com',
  },
];

export default function QuoteContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get('name') as string)?.trim(),
      email: (formData.get('email') as string)?.trim(),
      phone: (formData.get('phone') as string)?.trim(),
      num_boxes: (formData.get('num_boxes') as string)?.trim(),
      move_date: (formData.get('date') as string)?.trim(),
      moving_from: (formData.get('moving_from') as string)?.trim(),
      moving_to: (formData.get('moving_to') as string)?.trim(),
      message: (formData.get('message') as string)?.trim(),
    };

    if (!payload.name || !payload.email || !payload.phone) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    try {
      const { error } = await supabaseInsert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please call us at (817) 996-6741.');
    }
  };

  return (
    <section id="quote" className="relative py-24 lg:py-32 bg-surface">
      <div className="px-[5vw] max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="label text-accent mb-4"
            >
              Get a Free Quote
            </motion.p>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="headline text-foreground text-[clamp(40px,6vw,72px)] mb-6"
            >
              BIG OR SMALL,<br />
              <span className="text-accent">TRUST DONE RIGHT</span><br />
              FOR THEM ALL.
            </motion.h2>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-muted-foreground font-light text-base lg:text-lg mb-10 max-w-md leading-relaxed"
            >
              Fill out the form with your move details and we'll get back to you
              with a quote — reliable and affordable, every time.
            </motion.p>

            <div className="space-y-5">
              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.label}
                  custom={0.3 + i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-surface-raised border border-border flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="label text-muted-foreground mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-light text-base hover:text-accent transition-colors duration-150"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-light text-base">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="bg-surface-raised border border-border rounded-sm p-8 lg:p-10"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <CheckCircle2 className="w-16 h-16 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl text-foreground mb-3 tracking-wide">Quote Request Sent!</h3>
                <p className="text-muted-foreground font-light max-w-sm">
                  Thanks for reaching out. We'll be in touch with your quote shortly.
                  For urgent requests, call us at (817) 996-6741.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-accent hover:text-foreground transition-colors text-sm font-medium"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Number of Boxes" name="num_boxes" type="text" />
                  <Field label="Date (dd/mm/yyyy)" name="date" type="text" />
                  <div />
                  <Field label="Moving From" name="moving_from" type="text" />
                  <Field label="Moving To" name="moving_to" type="text" />
                </div>

                <div>
                  <label className="label text-muted-foreground block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your move..."
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground font-light text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-150 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm font-light">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-4 rounded-sm text-base hover:shadow-[0_0_25px_hsl(48_92%_55%/0.4)] transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get a Free Quote
                    </>
                  )}
                </button>
                <p className="text-center label text-muted-foreground">
                  No Obligation &middot; Fixed Pricing &middot; Available 7 Days
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label text-muted-foreground block mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground font-light text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-150"
      />
    </div>
  );
}

async function supabaseInsert(payload: Record<string, string | undefined>) {
  const { supabase } = await import('@/lib/supabase');
  return supabase.from('quote_requests').insert(payload);
}
