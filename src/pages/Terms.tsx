import { useEffect, useState } from 'react';
import { ChevronUp, List, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'services', title: '2. Marketing and Administrative Services' },
  { id: 'changes', title: '3. Changes to these Terms' },
  { id: 'tcpa', title: '4. Consent to Electronic & Telephone Communications (TCPA)' },
  { id: 'prohibited', title: '5. Prohibited Conduct' },
  { id: 'submitted', title: '6. Submitted Materials' },
  { id: 'intellectual', title: '7. Intellectual Property' },
  { id: 'third-party', title: '8. Third-Party Websites' },
  { id: 'indemnification', title: '9. Indemnification' },
  { id: 'disclaimers', title: '10. Disclaimers' },
  { id: 'liability', title: '11. Limitation of Liability' },
  { id: 'security', title: '12. Security & Data Breach' },
  { id: 'termination', title: '13. Termination' },
  { id: 'law-venue', title: '14. Applicable Law & Venue' },
  { id: 'dispute', title: '15. Dispute Resolution; Class Action & Jury Trial Waiver' },
  { id: 'ada', title: '16. ADA Compliance' },
  { id: 'contact', title: '17. Contact Us' },
];

export default function Terms() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">TERMS OF USE</h1>
          <p className="text-gray-500 text-sm">Last Updated: January 26, 2026</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-12 text-center">
          <p className="text-red-900 font-bold text-sm">
            IMPORTANT NOTICE: THESE TERMS OF USE ARE SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION AND JURY TRIAL RIGHTS AS DETAILED IN SECTION 15 BELOW.
          </p>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              These Terms of Use ("Terms") constitute a legal contract between you and Online Auto Claimsline ("Company," "we," "us," or "our"). These Terms govern your access to and use of our website, subdomains, and mobile features (the "Sites") and all marketing, administrative, and technology services provided therein (the "Services").
            </p>
            <p className="leading-relaxed mt-4">
              By using our Sites or Services, you represent that you are at least 18 years of age and agree to be bound by these Terms.
            </p>
          </section>

          <section id="services">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">2. Marketing and Administrative Services</h2>
            <p className="leading-relaxed mb-4">Online Auto Claimsline is a marketing and technology platform.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Not a Law Firm:</strong> We are not a law firm, lawyer referral service, or insurance provider. We do not provide legal advice or insurance adjusting services.</li>
              <li><strong>Compensation Disclosure:</strong> We are compensated by third-party marketing partners (law firms and intake specialists) for marketing and administrative services. We do not share in any legal fees or insurance settlements.</li>
              <li><strong>No Attorney-Client Relationship:</strong> Your use of our Services does not create an attorney-client relationship. Such a relationship is only formed via a separate, written agreement with a law firm to which you may be connected.</li>
            </ul>
          </section>

          <section id="changes">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">3. Changes to these Terms</h2>
            <p className="leading-relaxed">
              We may modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Sites or Services signifies your acceptance of the updated Terms.
            </p>
          </section>

          <section id="tcpa">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">4. Consent to Electronic &amp; Telephone Communications (TCPA)</h2>
            <p className="leading-relaxed mb-4">
              By providing your phone number, you provide express written consent to receive calls and text messages, including those delivered via automated technology (dialers), artificial voice, and pre-recorded messages, from Online Auto Claimsline and its marketing partners.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard Rates:</strong> Message and data rates may apply.</li>
              <li><strong>Opt-Out:</strong> Reply STOP to unsubscribe from SMS.</li>
              <li><strong>Recordings:</strong> You consent to the recording and monitoring of all inbound and outbound calls for quality assurance and verification purposes.</li>
            </ul>
          </section>

          <section id="prohibited">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">5. Prohibited Conduct</h2>
            <p className="leading-relaxed mb-4">You may not use the Sites or Services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Engage in unauthorized spidering, scraping, or harvesting of content.</li>
              <li>Impersonate any person or provide fraudulent accident/injury information.</li>
              <li>Use any automated means (bots) to compile information or interfere with Site operation.</li>
              <li>Attempt to gain unauthorized access to our computer systems or user data.</li>
              <li>Reverse engineer or decompile any software comprising the Sites.</li>
            </ul>
          </section>

          <section id="submitted">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">6. Submitted Materials</h2>
            <p className="leading-relaxed">
              If you submit photos, stories, or data regarding an accident ("Submitted Material"), you grant Online Auto Claimsline a royalty-free, perpetual, irrevocable, and sub-licensable right to use, copy, and distribute that material in any media. You warrant that you own the rights to any material you submit.
            </p>
          </section>

          <section id="intellectual">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on the Sites — including text, graphics, logos, and "look and feel" — is the property of Online Auto Claimsline or its licensors. You may not reproduce or distribute any content without our prior written consent.
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">8. Third-Party Websites</h2>
            <p className="leading-relaxed">
              Our Sites may link to third-party websites (e.g., law firms). We do not control or endorse the content or privacy practices of these Linked Sites. Your dealings with third parties found through our Sites are solely between you and those parties.
            </p>
          </section>

          <section id="indemnification">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">9. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to defend and indemnify Online Auto Claimsline, its officers, and affiliates from any claims, losses, or liabilities (including attorney's fees) arising from: (i) your use of the Services; (ii) your violation of these Terms; or (iii) any fraudulent information you provide.
            </p>
          </section>

          <section id="disclaimers">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">10. Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <p className="leading-relaxed font-bold text-yellow-900 uppercase text-sm">
                YOUR USE OF THE SITE IS AT YOUR OWN RISK. WE PROVIDE THE SERVICES "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR THAT ANY CLAIM WILL RESULT IN A FINANCIAL RECOVERY.
              </p>
            </div>
          </section>

          <section id="liability">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">11. Limitation of Liability</h2>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-5">
              <p className="leading-relaxed font-bold text-gray-900 uppercase text-sm">
                TO THE FULLEST EXTENT PERMITTED BY LAW, ONLINE AUTO CLAIMSLINE'S AGGREGATE LIABILITY SHALL NOT EXCEED $100.00 USD. WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICES OR YOUR DEALINGS WITH THIRD-PARTY PARTNERS.
              </p>
            </div>
          </section>

          <section id="security">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">12. Security &amp; Data Breach</h2>
            <p className="leading-relaxed">
              We implement reasonable security measures. In the event of a data breach affecting personal information, we will notify affected users as required by applicable law.
            </p>
          </section>

          <section id="termination">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">13. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your access to the Sites at any time, for any reason, without notice.
            </p>
          </section>

          <section id="law-venue">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">14. Applicable Law &amp; Venue</h2>
            <p className="leading-relaxed">
              These Terms are governed by the laws of the State of Georgia, without regard to conflict of law principles. You agree that for purposes of jurisdiction, any interaction with our Services (including inbound calls) is deemed to have occurred in the State of Georgia, regardless of where you are physically located at the time of the call. You further agree that any legal action or proceeding not subject to the Arbitration provisions in Section 15 shall be brought exclusively in the state or federal courts located in Gwinnett County, Georgia.
            </p>
          </section>

          <section id="dispute">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">15. Dispute Resolution; Class Action &amp; Jury Trial Waiver</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
              <p className="leading-relaxed font-bold text-red-800">
                PLEASE READ CAREFULLY. YOU ARE WAIVING YOUR RIGHT TO A JURY TRIAL.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Mandatory Arbitration:</strong> Any dispute arising out of these Terms or the Services shall be resolved through binding individual arbitration administered by the American Arbitration Association (AAA) or JAMS.</li>
              <li><strong>Class Action Waiver:</strong> You agree that any proceedings will be conducted solely on an individual basis. You will not seek to have any dispute heard as a class action or representative proceeding.</li>
              <li><strong>Time Limit:</strong> Any claim must be filed within one (1) year after the cause of action accrues, or it is permanently barred.</li>
            </ul>
          </section>

          <section id="ada">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">16. ADA Compliance</h2>
            <p className="leading-relaxed">
              We are committed to accessibility. If you have difficulty navigating our content, please contact us at <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a>.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">17. Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="mb-2"><strong>Online Auto Claimsline</strong></p>
              <p className="mb-1">Email: <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a></p>
              <p>Address: C/O Burton Varley Ltd Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, United Kingdom, M20 2DW</p>
            </div>
          </section>

        </div>

        {/* Acceptance Notice */}
        <div className="mt-12 p-6 bg-[#1A3C6E]/5 rounded-xl border border-[#1A3C6E]/20">
          <p className="text-center text-gray-700">
            By using our Site or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
