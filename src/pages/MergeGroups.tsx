import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useToast } from "../context/ToastContext";

export default function MergeGroups() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="flex h-screen bg-surface font-body text-on-surface overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen relative overflow-y-auto">
        {/* Background Signature Element */}
        <div className="fixed bottom-0 right-0 p-12 opacity-[0.03] pointer-events-none z-0">
          <h1 className="font-headline italic text-[12rem] text-primary leading-none">FinFlow</h1>
        </div>

        {/* Top Header */}
        <header className="w-full h-16 flex justify-between items-center px-8 bg-surface/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center">
            <nav className="flex text-sm font-medium text-on-surface-variant">
              <Link to="/business-dashboard" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold">Business Groups</Link>
              <span className="mx-3 text-outline-variant">/</span>
              <span className="text-on-surface uppercase tracking-widest text-[10px] font-bold">Merge Groups</span>
            </nav>
          </div>
        </header>

        {/* Centered Container Section */}
        <section className="flex-1 flex items-start justify-center pt-8 pb-24 px-8 z-10 relative">
          <div className="w-full max-w-3xl bg-surface-container-lowest p-16 shadow-2xl rounded-sm">
            
            {/* Icon and Title */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">call_merge</span>
              </div>
              <h2 className="font-headline text-5xl font-light tracking-tight text-on-surface mb-4">
                Merge Business Groups
              </h2>
              <p className="text-on-surface-variant max-w-xl text-lg opacity-80">
                Consolidate multiple entities into a single operational unit while maintaining historical data integrity.
              </p>
            </div>

            {/* Warning Box */}
            <div className="bg-error-container p-6 mb-12 flex items-start space-x-4 rounded-sm border-l-4 border-error">
              <span className="material-symbols-outlined text-error pt-0.5">warning</span>
              <div className="flex-1">
                <p className="text-on-error-container font-bold mb-1 tracking-wide uppercase text-sm">Irreversible Action</p>
                <p className="text-on-error-container text-sm leading-relaxed opacity-90">
                  Merging business groups is permanent. All financial histories, linked bank accounts, and automation rules from the Source Group will be moved to the Target Group. The source profile will be archived and deactivated.
                </p>
              </div>
            </div>

            {/* Form Grid */}
            <form className="space-y-12" onSubmit={(e) => { 
                e.preventDefault(); 
                showToast('Groups merged and source archived.', 'success');
                setTimeout(() => navigate('/business-dashboard'), 1500); 
            }}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-end gap-6">
                
                {/* Source Group */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Source Group</label>
                  <p className="text-[10px] text-error font-bold tracking-widest uppercase mb-2">Will be merged & archived</p>
                  <div className="relative">
                    <select className="w-full bg-surface-container-high border-0 p-4 rounded-none appearance-none focus:ring-0 focus:border-b-2 border-b-2 border-transparent focus:border-primary transition-all font-medium text-on-surface cursor-pointer outline-none">
                      <option value="">Select source...</option>
                      <option>Napa Valley Logistics</option>
                      <option>Hearthstone Imports</option>
                      <option>Emerald Coast Realty</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center pb-4 hidden md:block">
                  <span className="material-symbols-outlined text-outline-variant text-3xl">arrow_right_alt</span>
                </div>

                {/* Target Group */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Target Group</label>
                  <p className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2">Will receive all data</p>
                  <div className="relative">
                    <select className="w-full bg-surface-container-high border-0 p-4 rounded-none appearance-none focus:ring-0 focus:border-b-2 border-b-2 border-transparent focus:border-primary transition-all font-medium text-on-surface cursor-pointer outline-none">
                      <option value="">Select target...</option>
                      <option>Cafe Operations</option>
                      <option>FinFlow Holding Corp</option>
                      <option>Global Equities Ltd</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-start space-x-4 bg-surface-container-low p-6 rounded-sm">
                <div className="pt-0.5 relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" id="confirm" required />
                  <div className="w-6 h-6 border-2 border-outline-variant rounded-sm peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-white text-[16px] opacity-0 peer-checked:opacity-100 font-bold transition-opacity">check</span>
                  </div>
                </div>
                <label className="text-sm text-on-surface-variant leading-relaxed select-none cursor-pointer font-medium" htmlFor="confirm">
                  I understand that merging these groups cannot be undone and that I have verified all account linkages between the source and target entities.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-surface-container mt-12 gap-4">
                <button 
                  type="button" 
                  onClick={() => navigate(-1)}
                  className="font-bold tracking-widest uppercase text-sm text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-error text-on-error px-10 py-4 font-bold tracking-widest uppercase text-sm hover:opacity-90 active:scale-95 transition-all flex items-center space-x-3 rounded-sm shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">merge</span>
                  <span>Merge &amp; Archive Source</span>
                </button>
              </div>
            </form>

            {/* Decorative Content Pillar */}
            <div className="mt-20 flex flex-col items-center opacity-50">
              <div className="w-[1px] h-24 bg-primary"></div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] font-bold text-outline-variant">Architectural Integrity</p>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
