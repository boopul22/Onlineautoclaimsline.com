import React, { useState } from 'react';
import { ArrowRight, MessageSquare, User, Phone, Mail, ShieldCheck, Clock, CheckCircle, AlertCircle, Loader2, MapPin, Lock, Users } from 'lucide-react';

export default function ClaimForm() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    message: ''
  });

  const [consentState, setConsentState] = useState({
    mainConsent: false,
    sensitiveDataConsent: false,
    waHealthConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Determine Consent Group based on State
  const getConsentGroup = (stateCode: string) => {
    const groupB = ['CA', 'TX', 'CO'];
    const groupC = ['WA'];
    if (groupC.includes(stateCode)) return 'C';
    if (groupB.includes(stateCode)) return 'B';
    return 'A';
  };

  const currentGroup = getConsentGroup(formState.state);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentState.mainConsent) {
      alert('You must agree to the Terms & Privacy Policy to proceed.');
      return;
    }
    if (currentGroup === 'C' && !consentState.waHealthConsent) {
      alert('Washington residents must authorize the collection of health data to proceed.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      let clientIp = '';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        clientIp = ipData.ip || '';
      } catch {
        clientIp = 'Unavailable';
      }

      const dataObj = {
        ...formState,
        timestamp: new Date().toISOString(),
        consent_group: currentGroup,
        tcpa_consent: consentState.mainConsent ? 'Yes' : 'No',
        sensitive_data_consent: consentState.sensitiveDataConsent ? 'Yes' : 'No',
        wa_health_consent: consentState.waHealthConsent ? 'Yes' : 'No',
        user_agent: navigator.userAgent,
        ip_address: clientIp
      };

      const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      const formSubmitUrl = import.meta.env.VITE_FORMSUBMIT_URL;
      const formSubmitCc = import.meta.env.VITE_FORMSUBMIT_CC;

      const submissions: Promise<Response>[] = [];

      if (sheetUrl) {
        submissions.push(
          fetch(sheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(dataObj)
          })
        );
      }

      if (formSubmitUrl) {
        submissions.push(
          fetch(formSubmitUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: formState.name,
              phone: formState.phone,
              email: formState.email,
              state: formState.state,
              message: formState.message,
              consent_group: currentGroup,
              tcpa_consent: consentState.mainConsent ? 'Yes' : 'No',
              sensitive_data_consent: consentState.sensitiveDataConsent ? 'Yes' : 'No',
              wa_health_consent: consentState.waHealthConsent ? 'Yes' : 'No',
              ip_address: clientIp,
              _subject: `New Claim Request - ${formState.name} (${formState.state})`,
              _template: 'table',
              _captcha: 'false',
              _honey: '',
              _replyto: formState.email,
              _autoresponse: 'Thank you for contacting Online Auto Claimsline! We have received your claim request and a specialist will reach out to you shortly.',
              ...(formSubmitCc ? { _cc: formSubmitCc } : {}),
            })
          })
        );
      }

      if (submissions.length === 0) throw new Error('No submission endpoints configured');

      const results = await Promise.allSettled(submissions);
      const anySuccess = results.some(r => {
        if (r.status === 'rejected') return false;
        return r.value.type === 'opaque' || r.value.ok;
      });

      if (anySuccess) {
        setSubmitStatus('success');
        setFormState({ name: '', phone: '', email: '', state: '', message: '' });
        setConsentState({ mainConsent: false, sensitiveDataConsent: false, waHealthConsent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentState(prev => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const usStates = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' }
  ];

  return (
    <section id="claim" className="relative bg-[#1A3C6E] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="flex flex-col lg:flex-row min-h-[600px] relative z-10">

        {/* Left Info Panel */}
        <div className="w-full lg:w-5/12 p-8 pt-16 lg:p-20 xl:p-24 flex flex-col justify-center">
          <div className="max-w-lg mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Clock size={14} />
              <span>Limited Time Free Review</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Claim <span className="text-[#FF6B35]">Today</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every hour counts after an accident. Secure your evidence and rights now.
            </p>

            <div className="space-y-6 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#FF6B35] transition-colors duration-300">
                  <span className="text-[#FF6B35] font-bold group-hover:text-white transition-colors">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Instant Review</h4>
                  <p className="text-gray-400 text-sm">We analyze your case details instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#FF6B35] transition-colors duration-300">
                  <span className="text-[#FF6B35] font-bold group-hover:text-white transition-colors">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Zero Risk Guarantee</h4>
                  <p className="text-gray-400 text-sm">No fees unless we win your case.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-4 text-gray-500 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-green-500" />
                <span>256-bit Secure</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-green-500" />
                <span>10k+ Claims Filed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-7/12 bg-gray-50 flex flex-col justify-center p-4 py-12 lg:p-20 xl:p-24">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 max-w-xl mx-auto w-full relative">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A3C6E] to-[#FF6B35] rounded-t-2xl"></div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1A3C6E] mb-2">Get Your Free Evaluation</h3>
              <p className="text-gray-500 text-sm">Fill out the form below to speak with a specialist.</p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-green-700 text-sm font-medium">Thank you! We've received your request and will contact you shortly.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-red-700 text-sm font-medium">Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                {/* Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#1A3C6E] transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#1A3C6E] transition-colors" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                      placeholder="Phone Number"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Email */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#1A3C6E] transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                      placeholder="E-mail"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* State */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-[#1A3C6E] transition-colors" />
                  </div>
                  <select
                    name="state"
                    id="state"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 appearance-none"
                    value={formState.state}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Your State</option>
                    {usStates.map((s) => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative group">
                  <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-[#1A3C6E] transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Briefly describe what happened..."
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-4 pt-2">

                {/* 1. Main Consent — ALL states */}
                <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex h-6 items-center">
                    <input
                      id="mainConsent"
                      name="mainConsent"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-[#1A3C6E] focus:ring-[#1A3C6E] cursor-pointer"
                      checked={consentState.mainConsent}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">
                    By clicking Submit, I agree to the <a href="/terms-and-conditions" className="underline hover:text-[#1A3C6E]">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-[#1A3C6E]">Privacy Policy</a>.
                    I provide my express written consent for Online Auto Claimsline and its <a href="/partners-and-sponsors" className="underline hover:text-[#1A3C6E]">Marketing Partners</a> to contact me via live calls, automated dialing systems, and text messages at the number provided.
                    I understand that my consent is not a condition of purchase and that calling or submitting this form does not create an attorney-client relationship.
                  </div>
                </div>

                {/* 2. Sensitive Data Consent — CA, TX, CO only */}
                {currentGroup === 'B' && (
                  <div className="flex items-start gap-3 bg-yellow-50/50 p-3 rounded-xl border border-yellow-100">
                    <div className="flex h-6 items-center">
                      <input
                        id="sensitiveDataConsent"
                        name="sensitiveDataConsent"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#1A3C6E] focus:ring-[#1A3C6E] cursor-pointer"
                        checked={consentState.sensitiveDataConsent}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      <strong>Sensitive Data Consent:</strong> I expressly consent to the collection and sharing of my sensitive personal information, including details of my injuries and medical status, with Online Auto Claimsline's marketing partners as described in the <a href="/privacy-policy" className="underline hover:text-[#1A3C6E]">Privacy Policy</a>. I understand I can withdraw this consent at any time.
                    </div>
                  </div>
                )}

                {/* 3. WA Health Consent — Washington only */}
                {currentGroup === 'C' && (
                  <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                    <div className="flex h-6 items-center">
                      <input
                        id="waHealthConsent"
                        name="waHealthConsent"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-[#1A3C6E] focus:ring-[#1A3C6E] cursor-pointer"
                        checked={consentState.waHealthConsent}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      <strong>Washington Health Data Consent:</strong> I provide my authorization for the collection and sharing of my consumer health data as defined by the <a href="/wa-health-policy" className="underline hover:text-[#1A3C6E]">WA Health Policy</a>. I acknowledge that my health data will be shared with marketing partners to facilitate my request for legal assistance.
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-[#FF6B35] text-white py-4 rounded-xl text-lg font-medium hover:bg-[#e65a2d] transition-all shadow-xl shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 transform hover:-translate-y-0.5 duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit For Free Review
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Your information is fully secure.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
