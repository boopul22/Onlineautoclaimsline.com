import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">OUR MARKETING PARTNERS &amp; SPONSORS</h1>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="leading-relaxed text-yellow-800 text-sm">
              Online Auto Claimsline is a legal advertising service that connects consumers with independent attorneys. Online Auto Claimsline is not a law firm, does not provide legal advice, and does not endorse or recommend any attorney. No attorney-client relationship is formed by using this website or its services. Past results do not guarantee future outcomes. These attorneys participate in the Online Auto Claimsline advertising program and have paid for promotional placement on this site. Selection of an attorney is solely at the consumer's discretion.
            </p>
          </div>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-6">PARTICIPATING LEGAL SPONSORS</h2>
            <p className="mb-6 leading-relaxed">
              The following attorneys and law firms are current participants in our joint advertising program. You have the right to request an attorney by name or choose an attorney not affiliated with this program.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A3C6E] mb-3">Morgan &amp; Morgan, P.A.</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Principal Office:</strong> Orlando, Florida</li>
                  <li><strong>Jurisdictions:</strong> Licensed to practice in FL, GA, PA, AZ, and other states</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A3C6E] mb-3">Injury Law Center</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Principal Office:</strong> Los Angeles, California</li>
                  <li><strong>Jurisdictions:</strong> Licensed to practice in CA, TX, NV</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm leading-relaxed">
                <strong>Note:</strong> Online Auto Claimsline does not determine which attorney will handle a specific case. You have the right to choose any attorney, including those not affiliated with this program.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">Become a Partner</h2>
            <p className="leading-relaxed">
              If you are a licensed legal professional specializing in road traffic accidents and personal injury and are interested in joining our network, please reach out to our legal partnership team at <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline font-medium">help@onlineautoclaimsline.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="mb-2"><strong>Online Auto Claimsline</strong></p>
              <p className="mb-1">Email: <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a></p>
              <p>Address: C/O Burton Varley Ltd Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, United Kingdom, M20 2DW</p>
            </div>
          </section>

        </div>
      </div>

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
