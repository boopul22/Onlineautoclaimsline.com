import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'File Your Claim Today', href: '/#claim' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1A3C6E] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1A3C6E]">Online Auto Claimsline</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-600 hover:text-[#1A3C6E] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:8889870834" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#1A3C6E] transition-colors">
            <Phone className="w-4 h-4 text-[#1A3C6E]" />
            888 987 0834
          </a>
          <Link
            to="/#claim"
            className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#e65a2d] transition-colors shadow-sm shadow-[#FF6B35]/20"
          >
            File Your Claim Today
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3 shadow-lg absolute w-full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block text-base font-medium text-slate-700 py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:8889870834" className="flex items-center gap-2 text-base font-medium text-[#1A3C6E] py-2">
            <Phone className="w-5 h-5" />
            Call: 888 987 0834
          </a>
          <Link
            to="/#claim"
            className="block w-full text-center bg-[#FF6B35] text-white px-5 py-3 rounded-xl text-base font-medium mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            File Your Claim Today
          </Link>
        </div>
      )}
    </header>
  );
}
