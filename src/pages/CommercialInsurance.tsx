import { useEffect } from 'react';
import { ShieldCheck, Phone, CheckCircle, Truck, Clock, Lock, ArrowRight } from 'lucide-react';
import ClaimForm from '../components/ClaimForm';

const COMMERCIAL_PHONE_DISPLAY = '888 237 0877';
const COMMERCIAL_PHONE_TEL = 'tel:8882370877';

export default function CommercialInsurance() {
  useEffect(() => {
    document.title = 'Commercial Vehicle Claims | Online Auto Claimsline';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'File your commercial vehicle insurance claim. Trucks, fleets, vans & commercial autos — free review, serving all of USA. Call 888 237 0877.'
      );
    }
    if (window.location.hash) {
      try {
        const el = document.querySelector(window.location.hash);
        if (el) {
          el.scrollIntoView();
          return;
        }
      } catch {
        // Ignore malformed hash and fall through to top.
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero — commercial only number */}
      <section className="relative pt-16 pb-20 overflow-hidden lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1A3C6E] shadow-sm mb-6">
                <Truck className="w-4 h-4 text-[#FF6B35]" />
                Commercial Vehicle Claims — USA
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-[#1A3C6E] mb-6 leading-tight">
                Commercial Insurance <span className="text-[#FF6B35]">Claim Support</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Trucks, vans, fleets and commercial autos. File your claim in 2 minutes —
                get a free review and help protecting your business, vehicle and driver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#commercial-claim-form"
                  className="inline-flex justify-center items-center gap-2 bg-[#1A3C6E] text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-all shadow-md shadow-[#1A3C6E]/10"
                >
                  File Commercial Claim <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={COMMERCIAL_PHONE_TEL}
                  className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-full text-base font-medium hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Phone className="w-5 h-5 text-[#1A3C6E]" />
                  {COMMERCIAL_PHONE_DISPLAY}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Quick &amp; Easy Form (2 minutes)</span>
                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Your Information is Secure</span>
                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> We&apos;ll Contact You Shortly</span>
                <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Serving All of USA</span>
              </div>

              <p className="text-sm text-slate-500 font-medium">
                Need Immediate Help? Call{' '}
                <a href={COMMERCIAL_PHONE_TEL} className="text-[#1A3C6E] hover:underline font-semibold">
                  {COMMERCIAL_PHONE_DISPLAY}
                </a>
              </p>
            </div>

            <div className="hidden lg:block lg:w-1/2 relative mt-16 lg:mt-0">
              <div className="rounded-3xl bg-[#1A3C6E] text-white p-10 shadow-2xl shadow-slate-200/50 border border-slate-200">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/15 border border-[#FF6B35]/20 flex items-center justify-center mb-6">
                  <Truck className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Built for commercial drivers &amp; fleets</h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Semi-trucks, box trucks, vans, pickups &amp; fleet vehicles</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Downtime, cargo &amp; liability guidance</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> DOT / insurer paperwork help</li>
                  <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> All 50 states + DC</li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-[#FF6B35]" /> Same-day review
                  <span className="w-1 h-1 bg-slate-500 rounded-full" />
                  <Lock className="w-4 h-4 text-green-400" /> 256-bit secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="bg-[#1A3C6E] py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <p className="font-bold">Commercial Help Desk — 24/7</p>
              <a href={COMMERCIAL_PHONE_TEL} className="font-mono text-xl font-bold hover:text-[#FF6B35] transition-colors">
                {COMMERCIAL_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <a
            href="#commercial-claim"
            className="bg-white text-[#1A3C6E] px-8 py-3.5 rounded-full text-base font-bold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Start Free Review
          </a>
        </div>
      </section>

      {/* Form — routes to admin@ via /api/commercial-claim */}
      <ClaimForm
        endpoint="/api/commercial-claim"
        source="commercial-insurance"
        sectionId="commercial-claim"
        title="File Your Claim Online"
        subtitle="Commercial form — select your state. Submissions go to our commercial team."
        submitLabel="Submit My Commercial Claim"
      />

      {/* Bottom reassurance */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3C6E] mb-4">Prefer to talk?</h2>
          <p className="text-slate-600 mb-8">Call our commercial line directly — this number is only used for commercial claims so we can prioritise your business.</p>
          <a
            href={COMMERCIAL_PHONE_TEL}
            className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e65a2d] transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" /> Call {COMMERCIAL_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
