import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0B1120] text-gray-400 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A3C6E]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1A3C6E] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Autoclaimfiling</span>
            </Link>
            <p className="text-base text-gray-500 leading-relaxed max-w-xs">
              Fast, Fair, and Hassle-Free Accident Claim Support.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="flex items-center hover:text-white transition-colors group">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FF6B35]" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#claim" className="flex items-center hover:text-white transition-colors group">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#FF6B35]" />
                  File a Claim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/your-privacy-choices" className="hover:text-white transition-colors">Your Privacy Choices</Link></li>
              <li><Link to="/wa-health-policy" className="hover:text-white transition-colors">WA Health Policy</Link></li>
              <li><Link to="/partners-and-sponsors" className="hover:text-white transition-colors">Partners &amp; Sponsors</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Phone size={20} className="text-[#FF6B35]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Phone</span>
                  <a href="tel:8886263214" className="text-white font-bold text-lg hover:text-[#FF6B35] transition-colors">888 626 3214</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B35]/20 transition-colors">
                  <Mail size={20} className="text-[#FF6B35]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</span>
                  <a href="mailto:help@onlineautoclaimsline.com" className="text-white font-medium hover:text-[#FF6B35] transition-colors break-all">help@onlineautoclaimsline.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B35]/20 transition-colors">
                  <MapPin size={20} className="text-[#FF6B35]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Address</span>
                  <span className="text-gray-300 text-sm">C/O Burton Varley Ltd Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, United Kingdom, M20 2DW</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* About Us & Ad Disclosure */}
        <div className="space-y-6">
          <div className="border-t border-b border-white/10 py-6 mt-10">
            <h5 className="text-white font-semibold mb-3 text-base">About Us</h5>
            <p className="text-sm font-medium text-gray-200 mb-1">
              Autoclaimfiling is operated by Online Auto Claimsline LTD
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Company No. 17095931, Registered in England &amp; Wales
            </p>
            <p className="text-sm text-gray-500">
              Registered Office: C/O Burton Varley Ltd Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, United Kingdom, M20 2DW
            </p>
          </div>

          <div className="pb-6 border-b border-white/10">
            <h5 className="text-white font-semibold mb-3 text-base">Ad Disclosure</h5>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              ADVERTISEMENT: This website is a paid advertisement operated by Online Auto Claimsline LTD (Company No. 17095931). Autoclaimfiling is not a law firm, a lawyer referral service, or an insurance provider. We do not provide legal advice, medical advice, or insurance adjusting services. You may request free information about an attorney's background and experience. Individuals appearing on this website may be paid actors or spokespersons and not actual attorneys. Any depictions of accidents or consultations are dramatizations. Use of this site, our forms, or our phone lines does not create an attorney-client relationship.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              FOR NORTH CAROLINA RESIDENTS: Autoclaimfiling is a legal advertising service. We do not offer legal services or representation. Legal services are available only through independent attorneys licensed to practice law in North Carolina. Contacting us does not create an attorney-client relationship.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2026 Autoclaimfiling. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Use</Link>
              <span>|</span>
              <button onClick={scrollToTop} className="hover:text-white transition-colors" aria-label="Scroll to top">
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
