import { ArrowRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-24 bg-[#1A3C6E] text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-white mb-6">
          We're Here When You Need Us Most
        </h2>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Being in a car accident is stressful — getting help shouldn't be. At Online Auto Claimsline, we make it easy to connect with our claims team so you can get the support and answers you need, fast.
        </p>
        <a
          href="#claim"
          className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#e65a2d] transition-colors shadow-xl shadow-[#FF6B35]/30"
        >
          Get Free Claim Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
