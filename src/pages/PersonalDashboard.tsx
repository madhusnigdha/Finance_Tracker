import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function PersonalDashboard() {

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-white font-body text-on-surface">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 w-full min-h-screen bg-white">
        {/* TOP APP BAR */}
        <header className="flex justify-between items-center w-full px-16 py-8 max-w-full bg-stone-50/80 backdrop-blur-md sticky top-0 z-40">
          <div>
            <h2 className="font-headline text-3xl text-emerald-900 leading-none">Personal Dashboard</h2>
            <p className="font-body text-sm text-on-surface-variant mt-1">Welcome back, your financial overview is ready.</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl" data-icon="search">search</span>
              </span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-sm text-sm focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Search data..." type="text" />
            </div>
            <Link to="/add-expense" className="bg-primary text-white font-body font-bold tracking-wide px-6 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center space-x-2">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>Add Expense</span>
            </Link>
          </div>
        </header>

        {/* CONTENT PILLAR DECORATOR */}
        <div className="fixed left-[17rem] top-32 bottom-32 w-0.5 bg-primary-fixed opacity-30 pointer-events-none hidden xl:block"></div>

        <div className="px-16 pb-24 space-y-16">
          {/* HERO METRIC SECTION */}
          <section className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Large Primary Metric */}
              <div className="md:col-span-2 bg-surface-container-low p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="z-10">
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Total Expenses (Current Month)</span>
                  <div className="flex items-baseline space-x-4 mt-2">
                    <h3 className="font-headline text-6xl text-on-background">₹4,250.00</h3>
                    <span className="text-primary font-bold flex items-center">
                      <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                      <span className="ml-1 text-sm">12% vs last month</span>
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4 z-10">
                  <div className="flex flex-col">
                    <span className="text-xs text-on-surface-variant mb-1">Budget Goal</span>
                    <div className="w-48 h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold self-end text-on-surface-variant">68% of ₹6,200</span>
                </div>
                {/* Abstract Decorative Element */}
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
              </div>

              {/* Secondary Metric */}
              <div className="bg-white p-10 flex flex-col justify-center border-l-4 border-primary-fixed-dim">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">Daily Average</span>
                <h4 className="font-headline text-4xl text-on-background mt-2">₹137.10</h4>
                <p className="font-body text-sm text-on-surface-variant mt-4">Calculated over the last 30 business days.</p>
                <Link to="/transactions" className="mt-6 text-sm font-bold text-primary flex items-center space-x-1 hover:underline">
                  <span>View details</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ANALYTICS & TRANSACTIONS GRID */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* TOP CATEGORIES (Analytics Section) */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="font-headline text-2xl text-on-background">Top Categories</h3>
                  <p className="text-sm text-on-surface-variant font-body mt-1">Allocation by volume</p>
                </div>
                <button className="text-xs font-bold font-body uppercase tracking-widest text-primary-container hover:underline">Full Report</button>
              </div>

              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col h-full">
                {/* Chart Area Placeholder */}
                <div className="flex-1 flex items-center justify-center space-x-12 py-8">
                  {/* Simple SVG Donut Placeholder */}
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#e1e2e4" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#005d42" strokeDasharray="45 100" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#047857" strokeDasharray="25 100" strokeDashoffset="-45" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" fill="none" r="15.915" stroke="#97f5cc" strokeDasharray="15 100" strokeDashoffset="-70" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-headline text-on-background">3</span>
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant">Core Areas</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 bg-primary rounded-full"></span>
                      <div>
                        <p className="text-sm font-bold font-body">Dining</p>
                        <p className="text-xs text-on-surface-variant">₹1,912.50 (45%)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 bg-primary-container rounded-full"></span>
                      <div>
                        <p className="text-sm font-bold font-body">Transport</p>
                        <p className="text-xs text-on-surface-variant">₹1,062.50 (25%)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 bg-primary-fixed rounded-full"></span>
                      <div>
                        <p className="text-sm font-bold font-body">Utilities</p>
                        <p className="text-xs text-on-surface-variant">₹637.50 (15%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT TRANSACTIONS */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="font-headline text-2xl text-on-background">Recent Transactions</h3>
                  <p className="text-sm text-on-surface-variant font-body mt-1">Latest activity across accounts</p>
                </div>
                <button className="text-xs font-bold font-body uppercase tracking-widest text-primary-container hover:underline">View All</button>
              </div>

              <div className="space-y-2">
                {/* Transaction Row 1 */}
                <div className="group flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-on-surface-variant" data-icon="restaurant">restaurant</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-body text-on-background">Blue Hill Restaurant</p>
                      <p className="text-xs text-on-surface-variant">Oct 24, 2023 â€¢ Dining</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-body text-on-background">-₹284.50</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Verified</p>
                  </div>
                </div>

                {/* Transaction Row 2 */}
                <div className="group flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-on-surface-variant" data-icon="commute">commute</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-body text-on-background">Uber Technologies</p>
                      <p className="text-xs text-on-surface-variant">Oct 23, 2023 â€¢ Transport</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-body text-on-background">-₹42.10</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Verified</p>
                  </div>
                </div>

                {/* Transaction Row 3 */}
                <div className="group flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-on-surface-variant" data-icon="shopping_bag">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-body text-on-background">Apple Store Soho</p>
                      <p className="text-xs text-on-surface-variant">Oct 22, 2023 â€¢ Shopping</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-body text-on-background">-₹1,299.00</p>
                    <p className="text-[10px] text-tertiary font-bold uppercase tracking-widest">Pending</p>
                  </div>
                </div>

                {/* Transaction Row 4 */}
                <div className="group flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-on-surface-variant" data-icon="bolt">bolt</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-body text-on-background">ConEd Utilities</p>
                      <p className="text-xs text-on-surface-variant">Oct 20, 2023 â€¢ Utilities</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-body text-on-background">-₹182.00</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Verified</p>
                  </div>
                </div>

                {/* Transaction Row 5 */}
                <div className="group flex items-center justify-between p-5 hover:bg-surface-container-low transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-on-surface-variant" data-icon="local_cafe">local_cafe</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-body text-on-background">Blue Bottle Coffee</p>
                      <p className="text-xs text-on-surface-variant">Oct 19, 2023 â€¢ Dining</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-body text-on-background">-₹6.50</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECONDARY FEATURE / ASYMMETRIC SECTION */}
          <section className="mt-16 bg-surface-container-low rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/3 min-h-[300px] relative">
              <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1k1GZxVDWC6-5RiFV1krvpKObCqyhU87-9FdFJSUIBPH53SeGYbr0QOIR2wxBRTN-2HCiuAnbLTVW822zzBliJzMynHsrPWbU3vLdFkHphmmNc4xw00BjBVzW6jQ2ZMAaz1fiDZmXxByjIUL3pOo7ZRtoS4LZ1SNIcZyN4am_co_fKE67OzC4lpbGesGy95vJgZbit2NE4OF1v8quHpkBirygNqOmRqrrklbeMc0dznhduNhWNoQYGlGrxBYru7it7vjASkq5G9sU" alt="Minimalist architectural space" />
            </div>
            <div className="flex-1 p-16 flex flex-col justify-center">
              <span className="text-primary font-bold font-body text-xs uppercase tracking-[0.2em] mb-4">Financial Insight</span>
              <h3 className="font-headline text-4xl text-emerald-900 leading-tight">Your saving potential has increased by 14% this quarter.</h3>
              <p className="font-body text-on-surface-variant mt-6 max-w-xl leading-relaxed">
                Based on your spending patterns in 'Dining' and 'Transport', you could redirect approximately ₹450/month into your high-yield savings account without altering your lifestyle significantly.
              </p>
              <div className="mt-8 flex space-x-6">
                <button className="bg-primary text-white font-body font-bold text-sm px-8 py-3 rounded-lg hover:opacity-90 transition-all">Enable Auto-Save</button>
                <button className="text-on-surface font-body font-bold text-sm hover:text-primary transition-colors">Dismiss Advice</button>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER / METADATA */}
        <footer className="px-16 py-12 bg-stone-50 border-t-0 flex justify-between items-center text-on-surface-variant/50">
          <p className="text-xs font-body">Â© 2023 FinFlow Wealth Management. All rights reserved.</p>
          <div className="flex space-x-8 text-xs font-bold font-body uppercase tracking-widest">
            <Link to="#" className="hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary">Terms of Service</Link>
            <Link to="#" className="hover:text-primary">Help Center</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
