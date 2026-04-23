import { Clock } from 'lucide-react';

export default function MidCta() {
  return (
    <section className="bg-[#1A3C6E] py-12 lg:py-20 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-center">

          {/* Fast Review */}
          <div className="flex items-center gap-5 border-b border-white/10 md:border-b-0 lg:border-r pb-8 md:pb-0 md:pr-8">
            <div className="p-3 bg-white/5 rounded-2xl">
              <Clock className="w-8 h-8 text-[#FF6B35] flex-shrink-0" />
            </div>
            <div>
              <p className="text-xl font-bold leading-tight">Fast Review</p>
              <p className="text-slate-400 text-sm">Same-day analysis</p>
            </div>
          </div>

          {/* Help Desk */}
          <div className="flex items-center gap-4 border-b border-white/10 md:border-b-0 pb-8 md:pb-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-20 animate-pulse"></div>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF6B35] bg-[#1A3C6E]/50 flex items-center justify-center">
                <span className="text-white font-bold text-xl">24</span>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#1A3C6E] rounded-full"></div>
            </div>
            <div>
              <p className="font-bold flex items-center gap-2 text-sm text-slate-300 uppercase tracking-wide">
                Help Desk 24/7
              </p>
              <a href="tel:8889870834" className="text-white font-mono text-xl font-bold hover:text-[#FF6B35] transition-colors">
                888 987 0834
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <a
              href="#claim"
              className="w-full md:w-auto bg-white text-[#1A3C6E] px-8 py-3.5 rounded-full text-base font-bold hover:bg-slate-100 transition-colors shadow-lg text-center"
            >
              Get Started
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
