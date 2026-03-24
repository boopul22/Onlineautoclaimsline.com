import { Routes, Route } from 'react-router-dom';
import EmergencyBar from './components/EmergencyBar';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyCta from './components/MobileStickyCta';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PrivacyChoices from './pages/PrivacyChoices';
import WaHealth from './pages/WaHealth';
import Partners from './pages/Partners';
import Resources from './pages/Resources';

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white antialiased selection:bg-[#FF6B35] selection:text-white">
      <EmergencyBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/your-privacy-choices" element={<PrivacyChoices />} />
        <Route path="/wa-health-policy" element={<WaHealth />} />
        <Route path="/partners-and-sponsors" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
