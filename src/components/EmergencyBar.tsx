import { AlertCircle } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div className="bg-[#1A3C6E] text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 relative z-50">
      <AlertCircle className="w-4 h-4" />
      Need Immediate Help? Call <a href="tel:8886263214" className="underline font-bold hover:text-[#FF6B35] transition-colors">888 626 3214</a>
    </div>
  );
}
