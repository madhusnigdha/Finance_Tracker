import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useToast } from "../context/ToastContext";

export default function BusinessIncome() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="flex h-screen bg-surface font-body text-on-surface overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto bg-surface-container-lowest">
        {/* Header */}
        <header className="px-16 pt-12 pb-8 max-w-[1440px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-4 font-body tracking-wider uppercase">
            <Link to="/business-dashboard" className="hover:text-primary transition-colors">Business Groups</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link to="/business-group-detail" className="hover:text-primary transition-colors">Cafe Operations</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface font-bold">Declare Income</span>
          </nav>
          <h1 className="font-headline text-5xl font-light tracking-tighter text-on-background leading-none">
            Declare Monthly Income
          </h1>
        </header>

        {/* Two-column Form Area */}
        <section className="px-16 pb-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-12">

            {/* LEFT: Form */}
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-surface-container-low p-12 space-y-8">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="w-1 h-6 bg-primary-fixed block shrink-0"></span>
                  <h2 className="font-headline text-2xl font-bold">Income Entry</h2>
                </div>

                {/* Income Source */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Income Source</label>
                  <input
                    type="text"
                    placeholder="e.g. Catering, POS Settlement"
                    className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-base font-body transition-colors outline-none"
                  />
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-2xl font-headline tracking-tight transition-colors outline-none"
                  />
                </div>

                {/* Two inputs: Date + Reference */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Income Date</label>
                    <input
                      type="date"
                      className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-base font-body transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Reference / Invoice #</label>
                    <input
                      type="text"
                      placeholder="INV-2024-042"
                      className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-base font-body transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Optional description..."
                    className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-base font-body transition-colors outline-none resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button 
                    onClick={() => {
                      showToast('Income entry saved successfully.', 'success');
                      setTimeout(() => navigate(-1), 1000);
                    }}
                    className="bg-primary text-on-primary px-10 py-3.5 font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all duration-200"
                  >
                    Save Income Entry
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="px-10 py-3.5 font-bold text-sm tracking-widest uppercase text-on-surface-variant border border-outline-variant/30 hover:bg-surface-container transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Income Summary Card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative pl-6">
                {/* Content Pillar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-fixed"></div>

                <div className="space-y-8">
                  <h2 className="font-headline text-2xl font-bold text-on-surface leading-tight">
                    Income Summary<br /><span className="text-primary">â€” Cafe Operations</span>
                  </h2>

                  {/* Stat Chips */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-surface-container-low px-6 py-4 hover:bg-surface-container transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">MTD Income</span>
                      <span className="font-headline text-xl font-bold text-emerald-800">₹12,890</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low px-6 py-4 hover:bg-surface-container transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">YTD Income</span>
                      <span className="font-headline text-xl font-bold text-emerald-800">₹48,200</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface-container-low px-6 py-4 hover:bg-surface-container transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Entry</span>
                      <span className="font-headline text-xl font-bold text-on-surface">Oct 22</span>
                    </div>
                  </div>

                  {/* Recent Entries */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Recent Entries</p>
                    <div className="space-y-0">
                      {[
                        { date: "Oct 24", source: "Catering Event #402", amount: "₹4,250.00" },
                        { date: "Oct 22", source: "Weekly POS Settlement", amount: "₹12,890.50" },
                        { date: "Oct 20", source: "Wholesale Pastry Supply", amount: "₹1,120.00" },
                      ].map((entry) => (
                        <div key={entry.date} className="flex items-center justify-between py-4 hover:bg-surface-container-low transition-colors px-2 -mx-2">
                          <div>
                            <p className="text-sm font-semibold text-on-surface">{entry.source}</p>
                            <p className="text-xs text-on-surface-variant">{entry.date}</p>
                          </div>
                          <span className="text-sm font-bold text-emerald-800">{entry.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
