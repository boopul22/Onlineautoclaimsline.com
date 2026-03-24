import { ShieldCheck, Check } from 'lucide-react';
import whyChooseUsImage from '../assets/why_choose_us.png';

export default function WhyChooseUs() {
  const features = [
    "Specialized Expertise",
    "Zero Upfront Costs",
    "Local & Trusted",
    "Fast & Responsive",
    "Help Desk 24/7",
    "Max Compensation"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 items-center">

          <div className="hidden lg:block lg:w-2/5 relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#1A3C6E]/20 rounded-3xl z-0"></div>
            <div className="aspect-[3/4] rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden relative z-10 shadow-2xl">
              <img src={whyChooseUsImage} alt="Expert Inspection" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 text-[#1A3C6E] border border-blue-100">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-[#1A3C6E] mb-6 leading-tight">
              Your Trusted Car Accident <br className="hidden lg:block" /> <span className="text-[#FF6B35]">Claim Experts</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We specialize in fighting for victims of car accidents — because you deserve justice, not just a settlement.
              Whether you're facing vehicle repairs, lost wages, or insurance pushback, our experienced legal team is here to guide you every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href="#claim" className="inline-flex items-center gap-2 bg-[#1A3C6E] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors shadow-md">
              Start Your Free Claim
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
