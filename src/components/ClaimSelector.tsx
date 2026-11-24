import { useEffect, useRef } from 'react';
import { ChevronRight, ClipboardList, FilePlus2, Headset } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SEEN_KEY = 'claimSelectorSeen';

export default function ClaimSelector() {
  const { pathname } = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isCommercial = pathname.startsWith('/commercial-insurance');
  const isLandingPage = pathname === '/' || isCommercial;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!isLandingPage) {
      dialog.close();
      return;
    }
    // A #hash link already says where the visitor wants to go.
    if (window.location.hash || dialog.open) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Storage blocked: still show the selector.
    }
    dialog.showModal();
  }, [isLandingPage]);

  const close = () => dialogRef.current?.close();

  const options = [
    { title: 'Start a New Claim', subtitle: 'File a new Auto Claim', href: isCommercial ? '#commercial-claim-form' : '#claim-form', Icon: FilePlus2, primary: true },
    { title: 'Existing Claim', subtitle: 'Get help with an ongoing claim', href: '#contact-us', Icon: ClipboardList, primary: false },
    { title: 'Other Inquiries', subtitle: 'General questions and assistance', href: '#contact-us', Icon: Headset, primary: false },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="claim-selector-title"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-slate-900/60"
    >
      <div className="px-5 py-7 sm:px-8 text-center">
        <h2 id="claim-selector-title" className="text-xl sm:text-2xl font-semibold text-[#1A3C6E]">
          How can we help you today?
        </h2>
        <p className="mt-2 mb-6 text-sm text-slate-500">Please select the reason for your visit.</p>

        <div className="space-y-4 text-left">
          {options.map(({ title, subtitle, href, Icon, primary }) => (
            <a
              key={title}
              href={href}
              onClick={close}
              className={`flex items-center gap-3 rounded-xl border px-4 py-4 transition-colors ${primary ? 'border-[#1A3C6E] bg-[#1A3C6E] text-white hover:bg-slate-800' : 'border-slate-200 text-[#1A3C6E] hover:bg-slate-50'}`}
            >
              <Icon className="w-7 h-7 shrink-0" aria-hidden="true" />
              <span className="flex-1">
                <span className="block text-lg font-semibold">{title}</span>
                <span className={`block text-sm ${primary ? 'text-slate-200' : 'text-slate-500'}`}>{subtitle}</span>
              </span>
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-500">
          Independent accident claims assistance. We are not your insurance provider.
        </p>
        <button type="button" onClick={close} className="mt-2 py-2 text-sm text-slate-500 underline hover:text-[#1A3C6E] cursor-pointer">
          Continue to website
        </button>
      </div>
    </dialog>
  );
}
