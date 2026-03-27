import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function ExpenseHistory() {
  return (
    <div className="font-body text-on-surface antialiased overflow-x-hidden bg-[#ffffff] min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen">
        {/* Header */}
        <header className="w-full sticky top-0 z-40 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-xl flex justify-between items-end pl-12 pr-12 py-10">
          <div className="flex flex-col">
            <h2 className="font-['Newsreader'] text-4xl tracking-tight text-emerald-900 dark:text-emerald-400">Transactions History</h2>
            <div className="h-[2px] w-24 bg-primary-fixed mt-4"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg" data-icon="search">search</span>
              <input className="pl-12 pr-6 py-3 bg-surface-container-high border-none rounded-sm w-64 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-outline-variant" placeholder="Search entries..." type="text" />
            </div>
            <Link to="/add-expense" className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all active:scale-95 duration-200 flex items-center">
              Add Expense
            </Link>
          </div>
        </header>

        {/* Content Area */}
        <section className="px-12 pb-24">
          {/* Sticky Filter Action Bar */}
          <div className="sticky top-[148px] z-30 bg-white py-6 flex items-center gap-4 mb-12">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-outline-variant/20 text-sm font-medium hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
              Date Range
              <span className="material-symbols-outlined text-lg" data-icon="expand_more">expand_more</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-outline-variant/20 text-sm font-medium hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="category">category</span>
              Category
              <span className="material-symbols-outlined text-lg" data-icon="expand_more">expand_more</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-outline-variant/20 text-sm font-medium hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="payments">payments</span>
              Payment Mode
              <span className="material-symbols-outlined text-lg" data-icon="expand_more">expand_more</span>
            </button>
            <div className="ml-auto flex items-center gap-2 text-on-surface-variant text-sm font-medium">
              <span className="material-symbols-outlined text-lg" data-icon="sort">sort</span>
              Sorted by: Newest First
            </div>
          </div>

          {/* Ledger Table */}
          <div className="space-y-4">
            {/* Table Header */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-4 bg-surface-container-low text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/70">
              <div>Date</div>
              <div>Merchant &amp; Details</div>
              <div>Category</div>
              <div>Payment</div>
              <div className="text-right">Amount</div>
            </div>

            {/* Transaction Row 1 */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-10 items-center hover:bg-surface-container-low/40 transition-colors group border-b text-sm border-outline-variant/20 last:border-0">
              <div className="text-sm font-medium text-on-surface-variant">Oct 24, 2023</div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant" data-icon="spa">spa</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface mb-1">Aesop Skincare</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary font-bold tracking-wider rounded-[2px]">SMS</span>
                    <span className="text-xs text-on-surface-variant italic">#49201-B</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">LIFESTYLE</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg" data-icon="credit_card">credit_card</span>
                <span className="text-xs font-medium tracking-tight">Amex â€¢â€¢â€¢â€¢ 1002</span>
              </div>
              <div className="text-right font-headline text-2xl font-medium text-emerald-900">₹184.00</div>
            </div>

            {/* Transaction Row 2 */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-10 items-center hover:bg-surface-container-low/40 transition-colors group border-b text-sm border-outline-variant/20 last:border-0">
              <div className="text-sm font-medium text-on-surface-variant">Oct 23, 2023</div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant" data-icon="local_cafe">local_cafe</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface mb-1">Blue Bottle Coffee</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary font-bold tracking-wider rounded-[2px]">MANUAL</span>
                    <span className="text-xs text-on-surface-variant italic">Morning Brew</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">DINING</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg" data-icon="account_balance_wallet">account_balance_wallet</span>
                <span className="text-xs font-medium tracking-tight">Cash</span>
              </div>
              <div className="text-right font-headline text-2xl font-medium text-emerald-900">₹12.50</div>
            </div>

            {/* Transaction Row 3 */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-10 items-center hover:bg-surface-container-low/40 transition-colors group border-b text-sm border-outline-variant/20 last:border-0">
              <div className="text-sm font-medium text-on-surface-variant">Oct 22, 2023</div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden">
                   <span className="material-symbols-outlined text-3xl text-on-surface-variant" data-icon="shopping_basket">shopping_basket</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface mb-1">Whole Foods Market</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary font-bold tracking-wider rounded-[2px]">SMS</span>
                    <span className="text-xs text-on-surface-variant italic">#88210-G</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">GROCERIES</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg" data-icon="contactless">contactless</span>
                <span className="text-xs font-medium tracking-tight">Apple Pay</span>
              </div>
              <div className="text-right font-headline text-2xl font-medium text-emerald-900">₹245.12</div>
            </div>

            {/* Transaction Row 4 */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-10 items-center hover:bg-surface-container-low/40 transition-colors group border-b text-sm border-outline-variant/20 last:border-0">
              <div className="text-sm font-medium text-on-surface-variant">Oct 20, 2023</div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant" data-icon="brush">brush</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface mb-1">MoMA Design Store</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary font-bold tracking-wider rounded-[2px]">MANUAL</span>
                    <span className="text-xs text-on-surface-variant italic">Gift for Elena</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">ENTERTAINMENT</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg" data-icon="credit_card">credit_card</span>
                <span className="text-xs font-medium tracking-tight">Visa â€¢â€¢â€¢â€¢ 9901</span>
              </div>
              <div className="text-right font-headline text-2xl font-medium text-emerald-900">₹65.00</div>
            </div>

            {/* Transaction Row 5 */}
            <div className="grid grid-cols-[120px_1fr_180px_150px_150px] gap-8 px-8 py-10 items-center hover:bg-surface-container-low/40 transition-colors group border-b text-sm border-outline-variant/20 last:border-0">
              <div className="text-sm font-medium text-on-surface-variant">Oct 19, 2023</div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-sm flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant" data-icon="music_note">music_note</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-on-surface mb-1">Subscription: Spotify</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary font-bold tracking-wider rounded-[2px]">SMS</span>
                    <span className="text-xs text-on-surface-variant italic">Recurring</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full">SERVICES</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg" data-icon="sync_alt">sync_alt</span>
                <span className="text-xs font-medium tracking-tight">Direct Debit</span>
              </div>
              <div className="text-right font-headline text-2xl font-medium text-emerald-900">₹14.99</div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-between items-center px-8 text-on-surface-variant">
            <span className="text-sm font-medium">Showing 1-5 of 1,248 transactions</span>
            <div className="flex gap-2">
              <button className="px-6 py-3 rounded-sm border border-outline-variant/20 hover:bg-surface-container-low transition-colors text-xs font-bold uppercase tracking-widest">Previous</button>
              <button className="px-6 py-3 rounded-sm bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors">Next Page</button>
            </div>
          </div>
        </section>

        {/* Content Pillar Vertical Guide */}
        <div className="fixed left-64 top-0 w-[1px] h-full bg-primary-fixed/30 z-0 pointer-events-none"></div>
      </main>
    </div>
  );
}
