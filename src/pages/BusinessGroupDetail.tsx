import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function BusinessGroupDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen">
      {/* SideNavBar */}
      <Sidebar />

      {/* Main Content Shell */}
      <main className="ml-64 min-h-screen bg-surface-container-lowest">
        {/* TopAppBar */}
        <header className="w-full pt-12 pb-8 flex flex-col px-16 max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/business-dashboard" className="text-emerald-800 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-4xl">arrow_back</span>
              </Link>
              <h1 className="font-headline text-5xl font-light tracking-tighter text-emerald-800">Cafe Operations</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 border border-outline-variant/20 text-emerald-800 font-label font-bold tracking-wide hover:bg-surface-container transition-colors uppercase text-xs">
                Edit Details
              </button>
              <button className="px-6 py-2 border border-outline-variant/20 text-emerald-800 font-label font-bold tracking-wide hover:bg-surface-container transition-colors uppercase text-xs" onClick={() => window.location.href = '/bank-accounts'}>
                Accounts
              </button>
              <button className="px-8 py-2.5 bg-primary text-on-primary font-label font-bold tracking-wide rounded hover:opacity-90 transition-opacity uppercase text-xs" onClick={() => window.location.href = '/business-income'}>
                Add Income
              </button>
              <button className="px-6 py-2 border border-outline-variant/20 text-error font-label font-bold tracking-wide hover:bg-error-container/50 transition-colors uppercase text-xs" onClick={() => window.location.href = '/merge-groups'}>
                Merge
              </button>
            </div>
          </div>
        </header>

        <section className="px-16 pb-24 max-w-screen-2xl">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="bg-surface-container-low p-10 rounded-lg group hover:bg-surface-container transition-colors">
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-4">Income YTD</p>
              <h3 className="text-4xl font-headline font-medium text-emerald-900">₹48,200</h3>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+12.4% from LY</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-lg group hover:bg-surface-container transition-colors">
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-4">Expenses YTD</p>
              <h3 className="text-4xl font-headline font-medium text-on-surface">₹24,150</h3>
              <div className="mt-4 flex items-center gap-2 text-secondary text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">payments</span>
                <span>42 Transactions</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-lg group hover:bg-surface-container transition-colors">
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-4">Net Margin</p>
              <h3 className="text-4xl font-headline font-medium text-emerald-800">50.1%</h3>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span>Optimal Range</span>
              </div>
            </div>
          </div>

          {/* Content Pillar & Tabs */}
          <div className="relative">
            {/* Signature Content Pillar */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-fixed -ml-8"></div>
            
            <div className="flex gap-12 mb-10 border-b border-outline-variant/10">
              <button className="pb-4 text-on-surface-variant font-label font-semibold tracking-tight hover:text-on-surface transition-colors">Expenses</button>
              <button className="pb-4 border-b-2 border-primary text-primary font-label font-bold tracking-tight">Income</button>
              <button className="pb-4 text-on-surface-variant font-label font-semibold tracking-tight hover:text-on-surface transition-colors">Linked Bank Accounts</button>
            </div>

            <div className="grid grid-cols-12 gap-16">
              {/* Income Table */}
              <div className="col-span-8">
                <table className="w-full text-left font-body">
                  <thead>
                    <tr className="text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold">
                      <th className="pb-6 pr-4">Date</th>
                      <th className="pb-6 px-4">Source</th>
                      <th className="pb-6 px-4">Amount</th>
                      <th className="pb-6 pl-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pr-4 font-medium text-on-surface">Oct 24, 2023</td>
                      <td className="py-6 px-4">
                        <div className="flex flex-col">
                          <span className="text-on-surface font-semibold">Catering Event #402</span>
                          <span className="text-xs text-on-surface-variant">Private Corporate Booking</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 font-bold text-emerald-800">₹4,250.00</td>
                      <td className="py-6 pl-4">
                        <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-wider rounded uppercase">Completed</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pr-4 font-medium text-on-surface">Oct 22, 2023</td>
                      <td className="py-6 px-4">
                        <div className="flex flex-col">
                          <span className="text-on-surface font-semibold">Weekly POS Settlement</span>
                          <span className="text-xs text-on-surface-variant">Merchant Account Trans.</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 font-bold text-emerald-800">₹12,890.50</td>
                      <td className="py-6 pl-4">
                        <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-wider rounded uppercase">Completed</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pr-4 font-medium text-on-surface">Oct 20, 2023</td>
                      <td className="py-6 px-4">
                        <div className="flex flex-col">
                          <span className="text-on-surface font-semibold">Wholesale Pastry Supply</span>
                          <span className="text-xs text-on-surface-variant">Lakeside Fine Dining</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 font-bold text-emerald-800">₹1,120.00</td>
                      <td className="py-6 pl-4">
                        <span className="px-3 py-1 bg-surface-container text-secondary text-[10px] font-bold tracking-wider rounded uppercase">Pending</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-6 pr-4 font-medium text-on-surface">Oct 18, 2023</td>
                      <td className="py-6 px-4">
                        <div className="flex flex-col">
                          <span className="text-on-surface font-semibold">Equipment Lease Reimbursement</span>
                          <span className="text-xs text-on-surface-variant">Insurance Claim #882</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 font-bold text-emerald-800">₹850.00</td>
                      <td className="py-6 pl-4">
                        <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-wider rounded uppercase">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Panel: Linked Accounts */}
              <div className="col-span-4 space-y-8">
                <div>
                  <h4 className="font-headline text-2xl text-on-surface mb-6">Linked Bank Accounts</h4>
                  <div className="space-y-4">
                    {/* Account Card 1 */}
                    <div className="bg-surface-container-highest p-6 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center text-white">
                          <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest">Primary</span>
                      </div>
                      <p className="text-on-surface font-headline text-lg mb-1">Business Checking Gold</p>
                      <p className="text-on-surface-variant font-body text-sm tracking-[0.2em]">**** 4492</p>
                      <div className="mt-6 flex justify-between items-end">
                        <p className="text-emerald-800 font-bold text-xl">₹18,402.10</p>
                        <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                      </div>
                    </div>

                    {/* Account Card 2 */}
                    <div className="bg-surface-container-highest p-6 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white">
                          <span className="material-symbols-outlined">savings</span>
                        </div>
                        <span className="text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest">Reserve</span>
                      </div>
                      <p className="text-on-surface font-headline text-lg mb-1">Corporate High-Yield</p>
                      <p className="text-on-surface-variant font-body text-sm tracking-[0.2em]">**** 9102</p>
                      <div className="mt-6 flex justify-between items-end">
                        <p className="text-on-surface font-bold text-xl">₹42,000.00</p>
                        <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Insights / Editorial Element */}
                <div className="bg-primary p-8 rounded-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <h5 className="text-primary-fixed font-headline text-xl mb-2">Operational Insight</h5>
                    <p className="text-on-primary-container font-body text-sm leading-relaxed opacity-90">
                      Cafe operations are currently running 15% above the forecasted net margin for Q4. Consider reallocating ₹5k to equipment upgrades.
                    </p>
                    <button className="mt-6 text-on-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
                      View Detailed Forecast
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  {/* Background pattern */}
                  <div className="absolute -right-12 -bottom-12 opacity-10">
                    <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'wght' 100" }}>coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Visual Anchor: Content Pillar Decoration */}
      <div className="fixed top-0 bottom-0 left-64 w-px bg-outline-variant/10 z-30 pointer-events-none"></div>
    </div>
  );
}
