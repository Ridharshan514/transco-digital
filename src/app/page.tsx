import Hero from '@/components/Hero/Hero';
import LogoStrip from '@/components/LogoStrip/LogoStrip';
import Expertise from '@/components/Expertise/Expertise';
import ParallaxTikTok from '@/components/ParallaxTikTok/ParallaxTikTok';
import Brands from '@/components/Brands/Brands';
import TrackRecord from '@/components/TrackRecord/TrackRecord';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import CTABand from '@/components/CTABand/CTABand';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Expertise />
      <ParallaxTikTok />
      <Brands />
      <TrackRecord />
      <Testimonials />
      <Contact />
      <CTABand />
    </main>
  );
}
