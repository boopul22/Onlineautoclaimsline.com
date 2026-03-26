import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WaHealth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">WASHINGTON CONSUMER HEALTH DATA POLICY</h1>
          <p className="text-gray-500 text-sm">Effective Date: January 26, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">

          <p className="leading-relaxed">
            This policy applies specifically to Washington residents and describes how Online Auto Claimsline ("we," "us," or "our") collects, uses, and shares "Consumer Health Data" as defined by the Washington My Health My Data Act (MHMDA).
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">1. Categories of Health Data Collected</h2>
            <p className="mb-4">To facilitate your inquiry and connect you with a Marketing Partner, we collect the following categories of Consumer Health Data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Injury &amp; Condition Information:</strong> Details regarding physical injuries, medical conditions, or symptoms resulting from a motor vehicle accident provided via our web forms or telephone lines.</li>
              <li><strong>Health-Related Inferences:</strong> Inferences regarding your health status, physical condition, or medical needs drawn from the description of your accident and subsequent inquiries.</li>
              <li><strong>Technical Identifiers:</strong> IP addresses or unique device IDs that may be linked to your health-related search or inquiry on our Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">2. Sources of Collection</h2>
            <p className="mb-4">We collect Consumer Health Data directly from you when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete our online claim evaluation forms.</li>
              <li>Speak with our intake specialists via our recorded telephone lines.</li>
              <li>Interact with our Site (via automated tracking technologies like cookies or pixels).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">3. Purpose of Collection and Use</h2>
            <p className="mb-4">We collect and use this data strictly for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Marketing Connections:</strong> To identify and connect you with independent third-party law firms, intake teams, or legal professionals ("Marketing Partners").</li>
              <li><strong>Administrative Services:</strong> To verify the validity of a claim inquiry and ensure you are matched with a Partner capable of handling your specific injury type.</li>
              <li><strong>Compliance:</strong> To maintain a record of consent as required by state and federal law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">4. Sharing of Health Data</h2>
            <p className="mb-4">We share the categories of data listed above with our Third-Party Marketing Partners and necessary service providers (such as cloud storage or communication platforms).</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Sale of Health Data:</strong> We do not sell Consumer Health Data to data brokers. We receive administrative and marketing fees from our Partners for the technology services used to facilitate these connections.</li>
              <li><strong>Affiliates:</strong> A list of the categories of third parties with whom we share data can be found on our <Link to="/partners-and-sponsors" className="text-[#1A3C6E] hover:underline">Sponsors/Partners Page</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">5. Your Rights and How to Exercise Them</h2>
            <p className="mb-4">Washington residents have the following specific rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Confirm if we are processing your health data and obtain a list of third parties with whom we have shared it.</li>
              <li><strong>Right to Delete:</strong> Request the deletion of your health data. We will also notify any third parties with whom we shared your data to honor this request.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke your consent for the future processing of your health data.</li>
            </ul>
            <div className="bg-[#1A3C6E]/5 border border-[#1A3C6E]/20 rounded-lg p-5 mt-6">
              <p className="leading-relaxed text-sm">
                <strong>How to Exercise Your Rights:</strong> Please submit your request to <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a> with the subject line "Washington Privacy Request."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C6E] mb-4">6. Appeals Process</h2>
            <p className="mb-4">
              If we deny your request to exercise a right under the MHMDA, you have the right to appeal our decision within 30 days.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To appeal, please email <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a> with the subject line "Privacy Appeal."</li>
              <li>We will respond to your appeal within 45 days. If your appeal is denied, you may contact the Washington State Attorney General at <a href="https://www.atg.wa.gov" target="_blank" rel="noopener noreferrer" className="text-[#1A3C6E] hover:underline">www.atg.wa.gov</a>.</li>
            </ul>
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
