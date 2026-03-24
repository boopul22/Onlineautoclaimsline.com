import { BookOpen, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: "What to Do After an Accident",
    description: "A step-by-step checklist of immediate actions to take at the scene of a crash to ensure your safety and protect your claim.",
  },
  {
    title: "Understanding Evidence",
    description: "Learn what photos, documents, and witness statements are critical for building a strong auto accident case.",
  },
  {
    title: "Dealing with Insurance Companies",
    description: "Expert tips on how to handle calls from adjusters and why you shouldn't sign anything before a professional review.",
  },
  {
    title: "State-by-State Negligence Laws",
    description: "Find out how your specific state handles fault and compensation limitations for road traffic accidents.",
  },
  {
    title: "No-Fault vs. At-Fault States",
    description: "Understand the difference between no-fault and at-fault insurance systems and how each affects your claim.",
  },
  {
    title: "How Settlements Are Calculated",
    description: "Learn how factors like medical bills, lost wages, and pain & suffering are used to determine your compensation.",
  },
];

export default function Resources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 bg-slate-50">
      <div className="bg-[#1A3C6E] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-[#FF6B35]" />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Helpful Resources</h1>
          <p className="text-lg text-slate-300">Guides and information to support your claim journey</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10 mt-[-40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{guide.title}</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">{guide.description}</p>
              <Link to="/#claim" className="inline-flex items-center gap-1 text-sm font-medium text-[#1A3C6E] hover:text-[#FF6B35] transition-colors">
                Get Help Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#1A3C6E] rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Claim?</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">Our experts are standing by 24/7 to evaluate your case for free.</p>
          <Link
            to="/#claim"
            className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#e65a2d] transition-colors shadow-xl shadow-[#FF6B35]/30"
          >
            Start Your Free Claim Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
