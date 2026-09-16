import { PhoneCall } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function MobileStickyCta() {
  const location = useLocation();
  const isCommercial = location.pathname.startsWith('/commercial-insurance');
  const phoneTel = isCommercial ? 'tel:8882370877' : 'tel:8889870834';
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 pb-safe">
      <a href={phoneTel} className="w-full bg-[#1A3C6E] text-white py-3.5 rounded-xl text-base font-medium flex items-center justify-center gap-2 shadow-lg">
        <PhoneCall className="w-5 h-5" />
        Call Now for Help
      </a>
    </div>
  );
}
