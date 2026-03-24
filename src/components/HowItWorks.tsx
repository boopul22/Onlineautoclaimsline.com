import { Edit, Users, CircleDollarSign, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Edit,
      step: "01",
      title: "Start Your Free Review",
      description: "Fill out a quick form or call us — we'll evaluate your accident and potential claim.",
    },
    {
      icon: Users,
      step: "02",
      title: "We Do the Work",
      description: "From gathering documents to negotiating with insurers, our experts take care of it all.",
    },
    {
      icon: CircleDollarSign,
      step: "03",
      title: "You Get Paid",
      description: "After a successful settlement, you receive your payout — no hassle, no hidden fees.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-[#FF6B35] tracking-tight uppercase">Simple Process</span>
          <h2 className="text-3xl tracking-tight font-semibold text-[#1A3C6E] mt-3 mb-4">How It Works (3 Easy Steps)</h2>
          <p className="text-base text-slate-600">
            We've simplified the process so you can focus on healing. Just three easy steps to get the compensation you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden group hover:border-[#1A3C6E]/30 transition-all hover:-translate-y-1 hover:shadow-xl duration-300">
              <span className="text-6xl tracking-tighter font-semibold text-slate-50 absolute -right-2 -top-4 select-none group-hover:text-slate-100 transition-colors">{item.step}</span>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center mb-6 relative z-10">
                <item.icon className="w-6 h-6 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl tracking-tight font-semibold text-slate-800 mb-3 relative z-10">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 relative z-10">{item.description}</p>
              <a href="#claim" className="text-sm font-medium text-[#1A3C6E] hover:text-[#FF6B35] flex items-center gap-1 relative z-10 transition-colors opacity-0 group-hover:opacity-100">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
