import { ShieldCheck, Phone, CheckCircle, Timer } from 'lucide-react';
import heroImage from '../assets/hero_image.png';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1A3C6E] shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
              24/7 Expert Claims Assistance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-[#1A3C6E] mb-6 leading-tight">
              Fast, Stress-Free <span className="text-[#FF6B35]">Support for Non-Fault Accidents</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Secure the compensation you deserve with guidance from our dedicated UK-based specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#claim" className="inline-flex justify-center items-center gap-2 bg-[#1A3C6E] text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-all shadow-md shadow-[#1A3C6E]/10">
                Begin Your Free Claim
              </a>
              <a href="tel:8886263214" className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-full text-base font-medium hover:bg-slate-50 transition-all shadow-sm">
                <Phone className="w-5 h-5 text-[#1A3C6E]" />
                888 626 3214
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm mb-6">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Rapid, Responsive Support</span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Full Claims Management</span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> Like-for-Like Replacement Cars</span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium"><CheckCircle className="w-4 h-4 text-[#28A745] flex-shrink-0" /> 24/7 Assistance</span>
            </div>

            <p className="text-sm text-slate-500 font-medium">
              Need Immediate Help? Call <a href="tel:8886263214" className="text-[#1A3C6E] hover:underline font-semibold">888 626 3214</a>
            </p>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative mt-16 lg:mt-0">
            <div className="aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-2xl shadow-slate-200/50 flex items-center justify-center">
              <img src={heroImage} alt="Person inspecting car damage" className="w-full h-full object-cover relative z-10" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white z-20">
                <p className="font-semibold">Fast Assessment</p>
                <p className="text-sm opacity-90">Get results in 24 hours</p>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-full bg-green-50 text-[#28A745] flex items-center justify-center">
                  <Timer className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Rapid Evaluation</p>
                  <p className="text-base tracking-tight font-semibold text-slate-800">Results within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
