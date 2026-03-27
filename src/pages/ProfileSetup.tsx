import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<'personal' | 'business'>('business');

  const handleContinue = () => {
    // Save selected profile to localStorage
    localStorage.setItem('activeProfile', selectedProfile);

    // Navigate based on selected profile
    if (selectedProfile === 'business') {
      navigate('/business-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen flex flex-col">
      {/* TopAppBar */}
      <header className="bg-[#f8f9fb] dark:bg-slate-900 docked full-width top-0 flex justify-between items-center w-full px-6 py-4 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-[#005d42] dark:text-[#97f5cc] hover:bg-[#e7e8ea] dark:hover:bg-slate-700 transition-colors p-2 rounded-full duration-200 active:scale-95">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-serif italic text-2xl text-[#005d42] dark:text-[#97f5cc]">FinFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-[#3e4943] dark:text-slate-400 font-sans text-xs font-semibold tracking-wider uppercase">Support</span>
          <span className="text-[#3e4943] dark:text-slate-400 font-sans text-xs font-semibold tracking-wider uppercase">Language</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-8 md:py-12">
        {/* Hero Section */}
        <div className="max-w-4xl w-full text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
            How will you use FinFlow?
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto">
            Select the experience that best aligns with your financial management goals.
          </p>
        </div>

        {/* Selection Cards Grid: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Personal Card */}
          <div 
            onClick={() => setSelectedProfile('personal')}
            className={`group relative bg-surface-container-low p-10 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer ₹{
              selectedProfile === 'personal' 
                ? 'border-none ring-offset-4 ring-offset-surface-container-lowest shadow-lg shadow-primary/5' 
                : 'hover:bg-surface-container-high'
            }`}
          >
            {selectedProfile === 'personal' && (
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            )}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className={`material-symbols-outlined text-4xl ₹{selectedProfile === 'personal' ? 'text-primary' : 'opacity-60'}`}>
                  person
                </span>
                {selectedProfile === 'personal' && (
                  <div className="bg-primary p-1.5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                )}
              </div>
              <h2 className={`font-headline text-3xl font-bold mb-6 ₹{selectedProfile === 'personal' ? 'text-on-surface' : ''}`}>
                Personal
              </h2>
              <ul className="space-y-4">
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'personal' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'personal' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>Track personal expenses</span>
                </li>
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'personal' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'personal' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>Category insights</span>
                </li>
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'personal' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'personal' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>Budget alerts</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 relative z-10 flex items-center gap-2">
              <span className={`font-sans text-xs font-bold tracking-widest uppercase ₹{selectedProfile === 'personal' ? 'text-primary' : 'text-outline'}`}>
                {selectedProfile === 'personal' ? 'Selected Identity' : 'Select Plan'}
              </span>
            </div>
          </div>

          {/* Business Card */}
          <div 
            onClick={() => setSelectedProfile('business')}
            className={`relative bg-surface-container-low p-10 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer ₹{
              selectedProfile === 'business' 
                ? 'border-none ring-offset-4 ring-offset-surface-container-lowest shadow-lg shadow-primary/5' 
                : 'hover:bg-surface-container-high group'
            }`}
          >
            {selectedProfile === 'business' && (
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            )}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className={`material-symbols-outlined text-4xl ₹{selectedProfile === 'business' ? 'text-primary' : 'opacity-60'}`}>
                  domain
                </span>
                {selectedProfile === 'business' && (
                  <div className="bg-primary p-1.5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                )}
              </div>
              <h2 className={`font-headline text-3xl font-bold mb-6 ₹{selectedProfile === 'business' ? 'text-on-surface' : ''}`}>
                Business
              </h2>
              <ul className="space-y-4">
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'business' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'business' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>Manage multiple business groups</span>
                </li>
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'business' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'business' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>P&amp;L statements</span>
                </li>
                <li className={`flex items-center gap-3 ₹{selectedProfile === 'business' ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ₹{selectedProfile === 'business' ? 'bg-primary' : 'bg-outline-variant'}`}></span>
                  <span>Bank accounts</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 relative z-10 flex items-center gap-2">
              <span className={`font-sans text-xs font-bold tracking-widest uppercase ₹{selectedProfile === 'business' ? 'text-primary' : 'text-outline'}`}>
                 {selectedProfile === 'business' ? 'Selected Identity' : 'Select Plan'}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Action Area */}
      <footer className="sticky bottom-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-8 md:px-12 flex justify-center items-center z-50">
        <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="hidden md:block">
            <p className="text-on-surface-variant text-sm font-medium">Step 1 of 4: Identity Mapping</p>
          </div>
          <button 
            onClick={handleContinue}
            className="bg-primary-container text-on-primary-container hover:bg-primary transition-colors duration-300 w-full md:w-auto px-12 py-4 rounded-lg font-sans font-bold tracking-widest uppercase flex items-center justify-center gap-3 group">
            Continue
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
