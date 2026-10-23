import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import StatsStrip from '@/components/StatsStrip';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import QuoteCTA from '@/components/QuoteCTA';
import QuoteContact from '@/components/QuoteContact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <StatsStrip />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <QuoteCTA />
        <QuoteContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
