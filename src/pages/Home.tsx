import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import MidCta from '../components/MidCta';
import HowItWorks from '../components/HowItWorks';
import ClaimForm from '../components/ClaimForm';
import Commitment from '../components/Commitment';
import FinalCta from '../components/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <MidCta />
      <HowItWorks />
      <ClaimForm />
      <Commitment />
      <FinalCta />
    </main>
  );
}
