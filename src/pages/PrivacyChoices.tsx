import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyChoices() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    doNotSell: false,
    limitSensitive: false,
    optOutAds: false,
    deleteRequest: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const payload = {
        ...formData,
        type: 'PRIVACY_OPT_OUT',
        timestamp: new Date().toISOString()
      };

      const emailResponse = await fetch('https://formsubmit.co/ajax/help@onlineautoclaimsline.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          _subject: 'PRIVACY OPT-OUT REQUEST - Online Auto Claimsline',
          _template: 'table'
        })
      });

      if (emailResponse.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">Request Received</h1>
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-8">
              <p className="text-lg text-green-800">
                We have received your request to opt-out. Your information has been added to our suppression list, and we will no longer share your data with marketing partners.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', phone: '', state: '', doNotSell: false, limitSensitive: false, optOutAds: false, deleteRequest: false });
                }}
                className="mt-6 px-6 py-2 bg-[#1A3C6E] text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Return to Form
              </button>
            </div>
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

  return (
    <main className="flex-1 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A3C6E] mb-4">YOUR PRIVACY CHOICES</h1>
          <p className="text-gray-500 text-sm">Last Updated: January 26, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            If you are a resident of California, Colorado, Connecticut, Texas, Utah, or Virginia, you have specific rights regarding your personal data. This page allows you to exercise your Right to Opt-Out of the sale/sharing of your data and your Right to Limit the use of your sensitive personal information.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#1A3C6E] mb-4">1. NOTICE OF DATA PRACTICES</h2>
            <p className="mb-4">
              Online Auto Claimsline is a marketing and technology platform. To provide our services, we "sell" or "share" your information (including identifiers and accident details) with our Marketing Partners (law firms and intake specialists). Because the information you provide often includes details about your physical injuries, it is classified as Sensitive Personal Information.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <p className="text-yellow-800 font-medium text-sm">
                PLEASE NOTE: Our service is built on the transfer of this data. If you opt-out or limit the use of this data, we cannot match you with a law firm or process your inquiry.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A3C6E] mb-6">2. EXERCISE YOUR RIGHTS</h2>
            <p className="mb-6">
              Please use the form below to submit your request. We will process your request within the timeframe required by your state's law (typically 15–45 days).
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 space-y-6">

              {submitError && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                  Something went wrong submitting your request. Please try again or email us directly.
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-[#1A3C6E] mb-4">Step 1: Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text" id="fullName" name="fullName" required
                      value={formData.fullName} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-400 text-xs">(Essential for suppression)</span></label>
                    <input
                      type="tel" id="phone" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State of Residence</label>
                    <select
                      id="state" name="state" required
                      value={formData.state} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select State</option>
                      <option value="CA">California (CA)</option>
                      <option value="TX">Texas (TX)</option>
                      <option value="CO">Colorado (CO)</option>
                      <option value="WA">Washington (WA)</option>
                      <option value="VA">Virginia (VA)</option>
                      <option value="CT">Connecticut (CT)</option>
                      <option value="UT">Utah (UT)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-[#1A3C6E] mb-4">Step 2: Select Your Request</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="doNotSell"
                      checked={formData.doNotSell} onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#1A3C6E] rounded focus:ring-[#1A3C6E]"
                    />
                    <span className="text-sm text-gray-700">
                      <strong>Do Not Sell or Share My Personal Information:</strong> Stop the transfer of my data to third parties for marketing or administrative fees.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="limitSensitive"
                      checked={formData.limitSensitive} onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#1A3C6E] rounded focus:ring-[#1A3C6E]"
                    />
                    <span className="text-sm text-gray-700">
                      <strong>Limit the Use and Disclosure of My Sensitive Personal Information:</strong> I request that you restrict the use of my health/injury data to only what is strictly necessary to provide the service. (Note: This will prevent us from sharing your injury details with law firms.)
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="optOutAds"
                      checked={formData.optOutAds} onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#1A3C6E] rounded focus:ring-[#1A3C6E]"
                    />
                    <span className="text-sm text-gray-700">
                      <strong>Opt-Out of Targeted Advertising:</strong> Do not use my data for cross-context behavioral advertising.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox" name="deleteRequest"
                      checked={formData.deleteRequest} onChange={handleChange}
                      className="mt-1 w-5 h-5 text-[#1A3C6E] rounded focus:ring-[#1A3C6E]"
                    />
                    <span className="text-sm text-gray-700">
                      <strong>Request to Delete:</strong> Permanently remove my record from your database.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A3C6E] text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting...
                  </>
                ) : 'SUBMIT PRIVACY REQUEST'}
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A3C6E] mb-4">3. AUTOMATED OPT-OUT (GPC)</h2>
            <p>
              We honor Global Privacy Control (GPC) signals. If your browser or device sends a GPC signal, we will automatically opt you out of the "sale" and "sharing" of your personal information for that specific session without you needing to fill out the form above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A3C6E] mb-4">4. OTHER CONTACT METHODS</h2>
            <p className="mb-2">If you have difficulty using the form, you may also submit your request via:</p>
            <p><strong>Email:</strong> <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1A3C6E] mb-4">5. AUTHORIZED AGENTS</h2>
            <p>
              If you are submitting this request on behalf of another person, you must provide written proof of your authority (such as a power of attorney) to <a href="mailto:help@onlineautoclaimsline.com" className="text-[#1A3C6E] hover:underline">help@onlineautoclaimsline.com</a> before we can process the request.
            </p>
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
