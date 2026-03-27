import Sidebar from "../components/Sidebar";

export default function BusinessReports() {
  return (
    <div className="bg-background overflow-x-hidden min-h-screen text-on-surface font-body">
      {/* SideNavBar Integration */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar Integration */}
        <header className="flex justify-between items-center w-full px-12 pt-6 pb-4 bg-slate-50/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h2 className="font-headline text-2xl font-semibold tracking-tight text-emerald-900">
              Business Reports
            </h2>
          </div>
          <div className="flex items-center gap-8">
            {/* Search Mock */}
            <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full w-64">
              <span className="material-symbols-outlined text-outline text-sm">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline outline-none"
                placeholder="Search data..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-slate-400 hover:text-emerald-700 transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Canvas */}
        <div className="px-12 py-12 space-y-16">
          {/* Content Pillar Decoration */}
          <div className="fixed left-[17rem] top-0 bottom-0 w-[2px] bg-primary-fixed opacity-30 pointer-events-none"></div>

          {/* Header Section */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-headline font-bold text-on-background tracking-tighter mb-2">
                Financial Reports
              </h1>
              <p className="text-on-surface-variant font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  calendar_today
                </span>
                Overview for fiscal year 2024
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-high px-4 py-2 flex items-center gap-3 text-sm font-medium rounded-lg">
                <span>This Quarter</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <button className="bg-primary text-on-primary px-6 py-2.5 font-bold text-sm rounded-lg hover:opacity-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Export CSV
              </button>
            </div>
          </section>

          {/* Top Row: Key Metrics (3 Columns) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YTD Revenue */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)] group hover:bg-surface-container transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">
                  YTD Revenue
                </p>
                <span className="material-symbols-outlined text-primary opacity-50">
                  trending_up
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-headline font-bold text-on-surface">$142,000</h3>
                <span className="text-emerald-700 text-sm font-bold">+12%</span>
              </div>
              <div className="mt-6 w-full h-1 bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-primary w-[72%] transition-all duration-1000"></div>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)] group hover:bg-surface-container transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">
                  Total Expenses
                </p>
                <span className="material-symbols-outlined text-error opacity-50">
                  payments
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-headline font-bold text-on-surface">$94,000</h3>
                <span className="text-error text-sm font-bold">+8%</span>
              </div>
              <div className="mt-6 w-full h-1 bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-tertiary w-[61%]"></div>
              </div>
            </div>

            {/* Net Margin */}
            <div className="bg-surface-container-low p-8 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)] group hover:bg-surface-container transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-bold text-on-surface-variant tracking-wider uppercase">
                  Net Margin
                </p>
                <span className="material-symbols-outlined text-primary opacity-50">
                  pie_chart
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-headline font-bold text-on-surface">34.2%</h3>
                <span className="text-emerald-700 text-sm font-bold italic">Optimal</span>
              </div>
              <div className="mt-6 w-full h-1 bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-primary w-[34%]"></div>
              </div>
            </div>
          </section>

          {/* Middle Row: Cash Flow Chart (Full Width) */}
          <section className="bg-surface-container-low p-10 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)]">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl font-headline font-bold text-on-surface">Cash Flow Analysis</h2>
                <p className="text-sm text-on-surface-variant">Monthly liquidity vs project expenditure</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase">Inflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase">Outflow</span>
                </div>
              </div>
            </div>

            {/* SVG Chart Placeholder */}
            <div className="w-full h-64 relative">
              <svg className="w-full h-full preserve-3d" viewBox="0 0 1000 200">
                {/* Inflow Line */}
                <path
                  d="M0,150 Q100,120 200,140 T400,80 T600,100 T800,40 T1000,60"
                  fill="none"
                  stroke="#005d42"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
                {/* Outflow Bars */}
                <rect fill="#edeef0" height="40" rx="2" width="12" x="50" y="160"></rect>
                <rect fill="#edeef0" height="50" rx="2" width="12" x="150" y="150"></rect>
                <rect fill="#edeef0" height="30" rx="2" width="12" x="250" y="170"></rect>
                <rect fill="#edeef0" height="70" rx="2" width="12" x="350" y="130"></rect>
                <rect fill="#edeef0" height="55" rx="2" width="12" x="450" y="145"></rect>
                <rect fill="#edeef0" height="35" rx="2" width="12" x="550" y="165"></rect>
                <rect fill="#56504c" height="80" rx="2" width="12" x="650" y="120"></rect>
                <rect fill="#edeef0" height="60" rx="2" width="12" x="750" y="140"></rect>
                <rect fill="#edeef0" height="90" rx="2" width="12" x="850" y="110"></rect>
                <rect fill="#edeef0" height="65" rx="2" width="12" x="950" y="135"></rect>
              </svg>

              {/* X-Axis Labels */}
              <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
              </div>
            </div>
          </section>

          {/* Bottom Row: Split Distribution & Reports */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Expense Distribution */}
            <div className="bg-surface-container-low p-10 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)]">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
                Expense Distribution
              </h2>
              <div className="space-y-8">
                {/* Payroll */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface">Payroll</span>
                    <span className="text-on-surface-variant">$42,000</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%]"></div>
                  </div>
                </div>

                {/* Inventory */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface">Inventory</span>
                    <span className="text-on-surface-variant">$28,500</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[30%]"></div>
                  </div>
                </div>

                {/* Operations */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface">Operations</span>
                    <span className="text-on-surface-variant">$14,200</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[15%]"></div>
                  </div>
                </div>

                {/* Rent */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-on-surface">Rent & Utilities</span>
                    <span className="text-on-surface-variant">$9,300</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[10%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Reports */}
            <div className="bg-surface-container-low p-10 rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-headline font-bold text-on-surface">Generated Reports</h2>
                  <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline decoration-1">
                    View Archives
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Report Item */}
                  <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Q3 Profit & Loss Statement</p>
                        <p className="text-xs text-on-surface-variant">Generated Oct 12, 2024 • 2.4MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      download
                    </span>
                  </div>

                  {/* Report Item */}
                  <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">account_balance</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Sept Tax Summary</p>
                        <p className="text-xs text-on-surface-variant">Generated Oct 05, 2024 • 1.1MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      download
                    </span>
                  </div>

                  {/* Report Item */}
                  <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">rebase_edit</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">August Reconciliation</p>
                        <p className="text-xs text-on-surface-variant">Generated Sep 10, 2024 • 4.8MB</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      download
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Image Inlay */}
              <div className="mt-8 relative overflow-hidden h-32 rounded">
                <img
                  alt="Financial Review"
                  className="w-full h-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=400&fit=crop"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center pointer-events-none">
                  <span className="text-on-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                    Archive View
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
