import { PhoneCall } from 'lucide-react';

export default function MobileStickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 pb-safe">
      <a href="tel:8886263214" className="w-full bg-[#1A3C6E] text-white py-3.5 rounded-xl text-base font-medium flex items-center justify-center gap-2 shadow-lg">
        <PhoneCall className="w-5 h-5" />
        Call Now for Help
      </a>
    </div>
  );
}
