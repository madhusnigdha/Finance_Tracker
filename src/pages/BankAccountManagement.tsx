import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BankAccountManagement() {
  return (
    <div className="flex h-screen bg-surface font-body text-on-surface overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto px-12 pb-24 max-w-7xl pt-12">
        {/* Header & Breadcrumbs */}
        <section className="mb-14">
          <nav className="flex items-center gap-2 mb-4">
            <Link to="/business-dashboard" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase hover:text-primary transition-colors">
              Business Groups
            </Link>
            <span className="material-symbols-outlined text-xs text-outline-variant">chevron_right</span>
            <Link to="/business-group-detail" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase hover:text-primary transition-colors">
              Cafe Operations
            </Link>
            <span className="material-symbols-outlined text-xs text-outline-variant">chevron_right</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
              Bank Accounts
            </span>
          </nav>
          <h1 className="text-5xl font-headline font-medium text-on-surface tracking-tight">
            Linked Bank Accounts
          </h1>
        </section>

        {/* Action Bar */}
        <section className="mb-12">
          <div className="bg-surface-container-low p-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[300px] flex items-center bg-surface px-4 py-2 border-b-2 border-transparent focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-outline mr-3">search</span>
              <input
                type="text"
                placeholder="Search by institution or account name..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-outline-variant text-on-surface"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="px-6 py-2.5 bg-primary text-on-primary text-sm font-bold flex items-center gap-2 hover:bg-primary-container transition-all rounded-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-lg">add</span>
                Link New Account
              </button>
              <button className="p-2.5 text-on-surface-variant hover:bg-surface transition-colors">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </section>

        {/* Accounts Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-surface-container-highest p-8 relative flex flex-col justify-between group hover:bg-surface transition-all duration-500 rounded-sm">
            <button className="absolute top-6 right-6 text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
            
            <div className="flex items-start justify-between mb-12">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-fixed/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-on-primary-fixed-variant uppercase tracking-wider">Active Syncing</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-body mb-1">Chase Business Checking</h3>
              <p className="text-on-surface-variant text-sm tracking-widest font-medium mb-8">**** 4492</p>
              
              <div className="flex items-baseline justify-between border-t border-outline-variant/20 pt-6">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Current Balance</span>
                <span className="text-4xl font-headline text-primary">₹18,402.10</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-highest p-8 relative flex flex-col justify-between group hover:bg-surface transition-all duration-500 rounded-sm">
            <button className="absolute top-6 right-6 text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
            
            <div className="flex items-start justify-between mb-12">
              <div className="w-14 h-14 bg-secondary-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-secondary text-3xl">credit_card</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-fixed/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-on-primary-fixed-variant uppercase tracking-wider">Active Syncing</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-body mb-1">Amex Corporate Platinum</h3>
              <p className="text-on-surface-variant text-sm tracking-widest font-medium mb-8">**** 1009</p>
              
              <div className="flex items-baseline justify-between border-t border-outline-variant/20 pt-6">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Current Balance</span>
                <span className="text-4xl font-headline text-primary">₹42,910.00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pending Integrations Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-headline font-medium">Pending Integrations</h2>
            <div className="h-[1px] flex-1 bg-surface-container-high"></div>
          </div>
          
          <div className="bg-surface-container-low overflow-hidden rounded-sm">
            <div className="grid grid-cols-12 px-8 py-4 bg-surface-container-high/50 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              <div className="col-span-4">Institution</div>
              <div className="col-span-3">Request Date</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            {/* Pending Row 1 */}
            <div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-high transition-colors cursor-pointer border-t border-surface-container w-full">
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined text-sm">account_balance</span>
                </div>
                <span className="text-sm font-bold">Silicon Valley Bank</span>
              </div>
              <div className="col-span-3 text-sm text-on-surface-variant">Oct 24, 2023</div>
              <div className="col-span-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full">
                  <span className="material-symbols-outlined text-[12px]">lock</span>
                  MFA Required
                </span>
              </div>
              <div className="col-span-2 text-right">
                <button className="text-primary font-bold text-xs hover:underline uppercase tracking-wider">Verify Identity</button>
              </div>
            </div>

            {/* Pending Row 2 */}
            <div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-high transition-colors cursor-pointer border-t border-surface-container w-full">
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-surface flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined text-sm">credit_card</span>
                </div>
                <span className="text-sm font-bold">Capital One Spark</span>
              </div>
              <div className="col-span-3 text-sm text-on-surface-variant">Oct 26, 2023</div>
              <div className="col-span-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full">
                  <span className="material-symbols-outlined text-[12px]">hourglass_empty</span>
                  Awaiting Plaid
                </span>
              </div>
              <div className="col-span-2 text-right">
                <button className="text-primary font-bold text-xs hover:underline uppercase tracking-wider">Check Status</button>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Anchor Decor */}
        <div className="fixed right-0 top-1/4 h-64 w-[2px] bg-primary-fixed hidden xl:block opacity-50"></div>
      </main>
    </div>
  );
}
