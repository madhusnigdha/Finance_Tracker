import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function ExpenseEntry() {
  return (
    <div className="bg-[#ffffff] font-body text-on-surface antialiased min-h-screen flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-64 flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full pl-12 pr-12 py-12 flex justify-between items-end">
          <div>
            <nav className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant/60 font-medium">
              <span>Transactions</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-on-surface-variant">New Entry</span>
            </nav>
            <h2 className="text-5xl font-headline font-bold text-on-surface tracking-tight">Add New Expense</h2>
          </div>
          <Link to="/dashboard" className="text-on-surface-variant font-medium hover:text-primary transition-colors underline underline-offset-4 decoration-outline-variant/30 mb-2">Cancel</Link>
        </header>

        {/* Form Section */}
        <section className="flex-1 px-12 pb-24 max-w-[1200px]">
          <div className="grid grid-cols-12 gap-16">
            {/* Form Inputs (Left) */}
            <div className="col-span-7 space-y-12">
              {/* Amount Field (Large Hero Input) */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Amount (USD)</label>
                <div className="relative group focus-within:border-b-2 focus-within:border-primary border-b-2 border-surface-container-high transition-all">
                  <span className="absolute left-0 bottom-4 text-4xl font-headline text-on-surface-variant/40">₹</span>
                  <input className="w-full bg-transparent border-0 py-4 pl-8 text-6xl font-headline font-medium focus:ring-0 placeholder:text-surface-container-highest" placeholder="0.00" type="number" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Date Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Date</label>
                  <div className="bg-surface-container-high focus-within:border-b-2 focus-within:border-primary border-b-2 border-transparent transition-all">
                    <input className="w-full bg-transparent border-0 p-4 font-body focus:ring-0" type="date" />
                  </div>
                </div>

                {/* Category Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Category</label>
                  <div className="bg-surface-container-high focus-within:border-b-2 focus-within:border-primary border-b-2 border-transparent transition-all">
                    <select className="w-full bg-transparent border-0 p-4 font-body focus:ring-0 appearance-none">
                      <option>Select Category</option>
                      <option>Business Travel</option>
                      <option>Office Supplies</option>
                      <option>Client Hospitality</option>
                      <option>Software Subscription</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Merchant Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Merchant</label>
                <div className="bg-surface-container-high focus-within:border-b-2 focus-within:border-primary border-b-2 border-transparent transition-all flex items-center px-4">
                  <span className="material-symbols-outlined text-on-surface-variant/40 mr-2">storefront</span>
                  <input className="w-full bg-transparent border-0 py-4 font-body focus:ring-0" placeholder="e.g. Starbucks, Amazon, WeWork" type="text" />
                </div>
              </div>

              {/* Payment Mode */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">Payment Mode</label>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 px-6 bg-primary text-white font-bold flex items-center justify-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-lg">credit_card</span>
                    <span className="text-sm">Card</span>
                  </button>
                  <button className="flex-1 py-4 px-6 bg-surface-container-high text-on-surface-variant font-medium flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                    <span className="material-symbols-outlined text-lg">payments</span>
                    <span className="text-sm">Cash</span>
                  </button>
                  <button className="flex-1 py-4 px-6 bg-surface-container-high text-on-surface-variant font-medium flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                    <span className="material-symbols-outlined text-lg">qr_code_2</span>
                    <span className="text-sm">UPI</span>
                  </button>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-8 flex items-center gap-6">
                <button className="bg-primary text-white px-10 py-5 font-bold text-lg tracking-tight hover:bg-primary-container transition-all flex items-center gap-3">
                  Save Expense
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2 hover:gap-3 transition-all">
                  Scan Receipt Layout
                  <span className="material-symbols-outlined text-sm">filter_center_focus</span>
                </button>
              </div>
            </div>

            {/* Receipt Area (Right) */}
            <div className="col-span-5 flex flex-col h-full min-h-[500px]">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">Evidence &amp; Receipt</label>
              <div className="flex-1 border-2 border-dashed border-outline-variant/30 bg-surface-container-low/30 flex flex-col items-center justify-center p-12 text-center group hover:bg-surface-container-low transition-all cursor-pointer">
                <div className="w-20 h-20 bg-surface-container-highest flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant/40" data-icon="document_scanner">document_scanner</span>
                </div>
                <h4 className="font-headline text-2xl font-bold text-on-surface mb-2">Upload Receipt</h4>
                <p className="text-on-surface-variant leading-relaxed max-w-[240px] mb-8">Drag and drop your receipt here, or click to upload for automatic OCR processing.</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-surface-container-highest text-on-surface font-bold text-sm">Choose File</button>
                  <button className="px-6 py-3 bg-transparent border-2 border-outline-variant/20 text-on-surface-variant font-bold text-sm">Snap Photo</button>
                </div>
              </div>
              <div className="mt-8 p-6 bg-surface-container-low flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" data-icon="info" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Smart Categorization Enabled</p>
                  <p className="text-xs text-on-surface-variant mt-1 leading-normal">FinFlow will automatically detect tax, merchant names, and itemized totals from your uploaded receipt image.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Pillar Decoration */}
        <div className="fixed right-0 top-0 h-full w-px bg-primary-fixed/30 -z-10"></div>
      </main>

      {/* Visual Polish: Architectural Layering */}
      <div className="fixed top-24 left-80 w-32 h-32 bg-primary/5 blur-[100px] -z-10"></div>
      <div className="fixed bottom-24 right-24 w-64 h-64 bg-secondary/5 blur-[120px] -z-10"></div>
    </div>
  );
}
