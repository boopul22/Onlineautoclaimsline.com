import { useEffect, useState } from 'react';
import { ChevronUp, List, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'introduction', title: '1. Introduction and Scope' },
  { id: 'not-law-firm', title: '2. Not a Law Firm or Insurance Provider' },
  { id: 'information-collected', title: '3. Information Collected' },
  { id: 'california-colorado', title: '4. CA & CO Notice: Do Not Sell' },
  { id: 'use-sharing', title: '5. Use and Sharing of Data' },
  { id: 'tcpa', title: '6. TCPA Consent' },
  { id: 'cookies', title: '7. Cookies and Tracking' },
  { id: 'security', title: '8. Security and Retention' },
  { id: 'minors', title: '9. Minors' },
  { id: 'contact', title: '10. Contact Us' },
];

export default function Privacy() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowToc(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">PRIVACY POLICY</h1>
          <p className="text-gray-500 text-sm">Last Updated: January 26, 2026</p>
        </div>

        {/* Mobile TOC Toggle */}
        <button
          onClick={() => setShowToc(!showToc)}
          className="lg:hidden fixed bottom-20 right-4 z-40 bg-[#1A3C6E] text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle Table of Contents"
        >
          {showToc ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Mobile TOC Overlay */}
        {showToc && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setShowToc(false)}>
            <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl p-6 pt-20 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-bold text-lg text-[#1A3C6E] mb-4">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button onClick={() => scrollToSection(section.id)} className="text-left w-full text-gray-600 hover:text-[#1A3C6E] transition-colors py-1 text-sm">
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop TOC */}
        <div className="hidden lg:block bg-gray-50 rounded-xl p-6 mb-12 border border-gray-100">
          <h3 className="font-bold text-lg text-[#1A3C6E] mb-4">Table of Contents</h3>
          <nav>
            <ul className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button onClick={() => scrollToSection(section.id)} className="text-left text-gray-600 hover:text-[#1A3C6E] transition-colors text-sm">
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">

          <section id="introduction">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">1. INTRODUCTION AND SCOPE</h2>
            <p className="leading-relaxed">
              Autoclaimfiling.online ("Company," "we," "our," or "us") is a marketing and technology platform. This Privacy Policy governs the personal information we collect when you: (a) visit our website (the "Site"); (b) utilize our claim-facilitation tools; or (c) contact us via our dedicated telephone lines or request to be contacted by our third-party marketing partners, including but not limited to, law firms, intake specialists, and legal advocates (collectively, "Marketing Partners").
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-4">
              <p className="leading-relaxed font-medium text-red-800 text-sm">
                IF YOU DO NOT AGREE TO THIS PRIVACY POLICY IN ITS ENTIRETY, YOU MAY NOT ACCESS THE SITE OR UTILIZE OUR SERVICES.
              </p>
            </div>
          </section>

          <section id="not-law-firm">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">2. NOT A LAW FIRM OR INSURANCE PROVIDER</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-4">
              <p className="leading-relaxed font-medium text-yellow-800 text-sm">
                <strong>Important Disclosure:</strong> Autoclaimfiling.online is not a law firm, a lawyer referral service, or an insurance company. We do not provide legal advice, mediation, or insurance adjusting services.
              </p>
            </div>
            <p className="leading-relaxed">
              <strong>No Attorney-Client Relationship:</strong> Your use of the Site, or any communication with our representatives via telephone, does not create an attorney-client relationship between you and the Company or any Marketing Partner. An attorney-client relationship is only formed if you sign a formal engagement agreement directly with a law firm.
            </p>
          </section>

          <section id="information-collected">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">3. INFORMATION COLLECTED (WEB &amp; TELEPHONE)</h2>
            <p className="leading-relaxed mb-4">We collect information that identifies you ("Personal Information") when you complete our inquiry forms or call our dedicated phone lines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identifiers:</strong> Full name, email address, zip code, and telephone number.</li>
              <li><strong>Claim Data:</strong> Date of accident, description of property damage, and insurance status.</li>
              <li><strong>Sensitive/Health Data:</strong> Details regarding your physical injuries and medical treatments.</li>
              <li><strong>Audio Recordings:</strong> We record and/or monitor all inbound and outbound calls. By calling our number or providing your number to us, you expressly consent to the recording and retention of the audio and data provided during such calls for quality assurance, training, and claim verification.</li>
            </ul>
          </section>

          <section id="california-colorado">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">4. CALIFORNIA &amp; COLORADO NOTICE: "DO NOT SELL OR SHARE MY PERSONAL INFORMATION"</h2>
            <p className="leading-relaxed mb-4">
              Under the California Consumer Privacy Act (CCPA/CPRA) and the Colorado Privacy Act (CPA), residents have the right to opt-out of the "sale" or "sharing" of their personal information.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Notice of Sale/Sharing:</strong> Autoclaimfiling.online is a marketing platform. We share the personal information you provide (including name, contact details, and accident information) with our Marketing Partners in exchange for an administrative or marketing fee. Under certain state laws, this transfer is classified as a "sale" or "sharing" of information.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Right to Opt-Out:</strong> You have the right to direct us not to sell or share your information. Please Note: If you exercise this right, we will be unable to process your claim inquiry or connect you with a Marketing Partner, as our service relies on this data transfer.
            </p>
            <div className="bg-[#1A3C6E]/5 border border-[#1A3C6E]/20 rounded-lg p-5">
              <p className="leading-relaxed text-sm">
                <strong>How to Opt-Out:</strong> To exercise this right, please visit our <Link to="/your-privacy-choices" className="text-[#1A3C6E] hover:underline">Your Privacy Choices</Link> page or email us at <a href="mailto:help@autoclaimfiling.online" className="text-[#1A3C6E] hover:underline">help@autoclaimfiling.online</a> with the subject line "Opt-Out Request."
              </p>
            </div>
          </section>

          <section id="use-sharing">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">5. USE AND SHARING OF DATA (MARKETING MODEL)</h2>
            <p className="leading-relaxed mb-4">We share your information with our Third-Party Marketing Partners.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Administrative Fees:</strong> These partners pay us an administrative, marketing, or technology fee to receive inquiries. We do not receive a percentage of any legal recovery or insurance payout.</li>
              <li><strong>Transfer of Data:</strong> We may transfer audio recordings, transcripts, or form data to our Partners to assist them in evaluating your potential claim.</li>
            </ul>
          </section>

          <section id="tcpa">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">6. TCPA CONSENT &amp; TELEMARKETING DISCLOSURE</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="leading-relaxed text-blue-900 text-sm">
                By providing your telephone number on our Site and/or initiating a call to our phone lines, you provide "prior express written consent" to be contacted by Autoclaimfiling.online and our designated Marketing Partners via live calls, artificial/synthesized voice, pre-recorded messages, and/or SMS text messages delivered via automated technology. You provide this consent even if your number is listed on any State or Federal Do-Not-Call list.
              </p>
            </div>
          </section>

          <section id="cookies">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">7. COOKIES AND BEHAVIORAL TRACKING</h2>
            <p className="leading-relaxed">
              We use Cookies, pixels, and tracking technology to analyze Site traffic and target advertisements to you across various devices (mobile, desktop, tablet).
            </p>
          </section>

          <section id="security">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">8. SECURITY AND RETENTION</h2>
            <p className="leading-relaxed">
              We utilize industry-standard TLS encryption for data in transit. No transmission over the internet or via telephone is 100% secure; you provide data at your own risk.
            </p>
          </section>

          <section id="minors">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">9. MINORS</h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under the age of eighteen (18).
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">10. CONTACT US</h2>
            <p className="leading-relaxed mb-4">To exercise your privacy rights or opt-out, please contact:</p>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="mb-2"><strong>Autoclaimfiling.online</strong></p>
              <p className="mb-1">Email: <a href="mailto:help@autoclaimfiling.online" className="text-[#1A3C6E] hover:underline">help@autoclaimfiling.online</a></p>
              <p>Address: C/O Nra Accountancy, Arrow Mill, Queensway, Rochdale, Lancashire, England, OL11 2YW</p>
            </div>
          </section>

        </div>

        {/* Acceptance Notice */}
        <div className="mt-12 p-6 bg-[#1A3C6E]/5 rounded-xl border border-[#1A3C6E]/20">
          <p className="text-center text-gray-700">
            By using our Site or Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-40 bg-[#1A3C6E] text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Back to Top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Final CTA */}
      <div className="py-16 bg-[#1A3C6E] text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">We're Here When You Need Us Most</h2>
          <p className="text-gray-400 mb-8">Being in a car accident is stressful — getting help shouldn't be.</p>
          <Link to="/#claim" className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#e65a2d] transition-colors shadow-xl shadow-[#FF6B35]/30">
            Get Free Claim Now
          </Link>
        </div>
      </div>
    </main>
  );
}
