import { Timer, MessageCircle, ShieldAlert, History, EyeOff, Scale, Clock, Shield } from 'lucide-react';

export default function Commitment() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Numbered steps */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white text-[#1A3C6E] border border-slate-100 shadow-sm">
              <span className="font-bold uppercase tracking-wider text-xs">Our Commitment</span>
            </div>
            <h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-[#1A3C6E] mb-6 leading-tight">
              Helping You Reclaim What You Deserve After a Car Accident
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              If you've been injured in a car accident, we're here to ensure you receive maximum compensation. Whether it's damage, medical bills, or lost income — we simplify the claim process and fight for your rights so you can focus on recovery.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <span className="text-[#1A3C6E] font-bold text-2xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Fast &amp; Free Claim Assessment</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">Know your claim's worth in minutes. No fees, no pressure — just straight answers from experts.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <span className="text-[#1A3C6E] font-bold text-2xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Car Accident Claim Specialists</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">From minor fender-benders to serious injuries, we've helped thousands get compensated — and we can help you too.</p>
                </div>
              </div>
            </div>

            <a href="#claim" className="inline-flex items-center gap-2 bg-[#1A3C6E] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors shadow-md">
              Get Started Free
            </a>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-6 hover:translate-x-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Win, No Fee Guarantee</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  You only pay when we win your case. That's how confident we are in securing your rightful compensation.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:flex-row gap-6 hover:translate-x-2 transition-transform duration-300 delay-75">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">24/7 Support &amp; Case Updates</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Accidents don't follow a schedule. Our team is available around the clock to answer your questions and update your case.
                </p>
              </div>
            </div>

            <div className="bg-[#1A3C6E] p-6 rounded-3xl shadow-xl flex items-center justify-between text-white hover:translate-x-2 transition-transform duration-300 delay-150">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Strictly Confidential</p>
                  <p className="text-xs text-slate-400">Your privacy is protected</p>
                </div>
              </div>
              <div className="h-2 w-20 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                <div className="h-full w-2/3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
