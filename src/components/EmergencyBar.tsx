import { AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function EmergencyBar() {
  const location = useLocation();
  const isCommercial = location.pathname.startsWith('/commercial-insurance');
  const phoneTel = isCommercial ? 'tel:8882370877' : 'tel:8889870834';
  const phoneDisplay = isCommercial ? '888 237 0877' : '888 987 0834';
  return (
    <div className="bg-[#1A3C6E] text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 relative z-50">
      <AlertCircle className="w-4 h-4" />
      Need Immediate Help? Call <a href={phoneTel} className="underline font-bold hover:text-[#FF6B35] transition-colors">{phoneDisplay}</a>
    </div>
  );
}
