import Sidebar from "../components/Sidebar";

export default function SyncedAccounts() {
  return (
    <div className="bg-white text-[#191c1e] font-body antialiased min-h-screen flex">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen bg-white relative">
        {/* TopAppBar (Large) */}
        <header className="flex justify-between items-center w-full pl-12 pr-12 py-10 sticky top-0 bg-white/80 backdrop-blur-xl z-40">
          <div className="flex flex-col">
            <h2 className="font-headline text-5xl font-medium tracking-tight text-emerald-900">Synced Accounts</h2>
            <p className="font-body text-secondary mt-2 text-sm max-w-md">Orchestrate your liquidity and institutional bridges from a single architectural command center.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
              <input className="pl-12 pr-6 py-3 bg-surface-container-high border-none rounded-sm w-64 text-sm focus:ring-1 focus:ring-primary" placeholder="Search integrations..." type="text" />
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg shadow-primary/5">
              Connect Bank Account
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="px-12 pb-24 space-y-24 relative z-10">
          {/* Pillar Decoration */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-outline-variant/20 ml-6 -z-10"></div>
          <div className="absolute left-0 top-0 w-[2px] bg-primary-fixed h-full ml-[23px] opacity-40 -z-10"></div>

          {/* Connected Bank Institutions Section */}
          <section className="relative pl-8">
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <h3 className="font-headline text-3xl text-on-surface">Connected Bank Institutions</h3>
                <p className="text-on-surface-variant text-sm mt-1">Direct institutional API bridges for real-time reconciliation.</p>
              </div>
              <button className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">
                View All Assets
              </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Chase Card */}
              <div className="bg-surface-container-low p-8 transition-all hover:bg-surface-container duration-500 group relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-sm">
                      <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-emerald-900">Chase</h4>
                      <p className="text-sm text-secondary font-medium">Business Checking ...8920</p>
                    </div>
                  </div>
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="mt-10 flex items-end justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full w-fit">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Healthy</span>
                    </div>
                    <p className="text-[11px] text-outline font-medium tracking-wide">Last Synced: 2 hours ago</p>
                  </div>
                  <button className="text-primary font-bold text-xs px-6 py-2 border border-primary/20 hover:bg-primary/5 transition-colors rounded-sm cursor-pointer z-10">
                    Sync Now
                  </button>
                </div>
              </div>

              {/* Amex Card */}
              <div className="bg-surface-container-low p-8 transition-all hover:bg-surface-container duration-500 group relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-sm">
                      <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-emerald-900">American Express</h4>
                      <p className="text-sm text-secondary font-medium">Corporate Platinum ...4002</p>
                    </div>
                  </div>
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
                <div className="mt-10 flex items-end justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full w-fit">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Healthy</span>
                    </div>
                    <p className="text-[11px] text-outline font-medium tracking-wide">Last Synced: 2 hours ago</p>
                  </div>
                  <button className="text-primary font-bold text-xs px-6 py-2 border border-primary/20 hover:bg-primary/5 transition-colors rounded-sm cursor-pointer z-10">
                    Sync Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Software Integrations Section */}
          <section className="relative pl-8">
            <div className="mb-12">
              <h3 className="font-headline text-3xl text-on-surface">Software Integrations</h3>
              <p className="text-on-surface-variant text-sm mt-1">Sync your ledger data with industry-leading ERP and accounting ecosystems.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* QuickBooks */}
              <div className="bg-surface-container-low p-8 group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" data-alt="minimalist abstract icon representing financial cloud software with soft teal and white colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk3NyoHjSP_oPT8jEEte8bt4MbQqNGCJitY1V5L7GktpPXLMlMQpXrMFx5AOKUvQcLPeLMD2tjAF0w6_nbMBcRDmmvXEyj3rTecgXpbzFUl2o1Gkr8j48SEwfms48CCYxx3IjnSzanltEpY9gGYhSVN8R_xUJjYkuMOmYY73KpD6Xpfo3n9i7eCp6i1nD8Z3UsqAk-qb6IUiOFvaeS4ku93Ljc8EqScB1Kx_2DZ4MEyHrI3w6nloWn8fUeogNITELTlpJqtmquTiJ4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900">QuickBooks Online</h5>
                    <p className="text-xs text-secondary mt-2 leading-relaxed">Automatic ledger mapping and journal entry synchronization.</p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-outline-variant/10 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Connected</span>
                  <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Xero */}
              <div className="bg-surface-container-low p-8 group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" data-alt="modern corporate technology logo symbol with geometric shapes and soft blue hues" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRR9yMNQLpg4ePToeYvNRXUUqsmAkJ7QL5Y9k_pMaBuCU74RI-2ayxxVn_z0vCNThiUBNXcpMH0MhUGdI_k1CblHnHigkSBInVm0ViGtONfUOAjxWGSzjDLjo32lNjY9PbqshzXpPP9hhtrp-Np0HN5uR9KwSucShfPD_ehAXqif6W4pFY5Mf-rab7o0PGoFIVIiSIgRcIpj4qrCEmTv5WWZLr2TtC7kSPOPT4v0pExwHeKPhKqvGlifdJRCWAnjRuNhKbZ74nB5b6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900">Xero</h5>
                    <p className="text-xs text-secondary mt-2 leading-relaxed">Seamless payroll and accounts payable automation.</p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-outline-variant/10 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Connected</span>
                  <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Stripe */}
              <div className="bg-surface-container-low p-8 group flex flex-col justify-between opacity-60 hover:opacity-100 transition-opacity">
                <div className="space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img className="w-full h-full object-contain grayscale" data-alt="sleek professional payment processing brand logo on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByc-6D_9wgdfaidJ4BF8ZaUl25dvY-2bSW6JfHbjegwV2Ixaa9mR5wljkxaTSX0pItwqBhvvsgf3Q2i5u35fuJbdCl2VktlNMPvqY7cJL0cTACz0YvBPmeuD348ucTYg0XnZn1_vVeFdXgGQAgavRttgIabGzEf-RI-UuXduvCJC5AAeSGnDCzVpkD68wVMancHTOHEpQ3EXRjwSYYVqn8v4GmCOt4iAPZpkxVAV4NCqEfGZ4DoWfZp7f5EUxwD7aO4hMUPsX6QBBC" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900">Stripe</h5>
                    <p className="text-xs text-secondary mt-2 leading-relaxed">Merchant processing and revenue stream integration.</p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-outline-variant/10 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">Disconnected</span>
                  <div className="w-10 h-5 bg-outline-variant/30 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-outline rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Editorial Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h4 className="font-headline text-4xl text-emerald-900 leading-tight">Architecture of Certainty</h4>
              <p className="text-secondary leading-relaxed">Your financial data is transmitted through AES-256 encrypted tunnels, ensuring that institutional bridges remain resilient and private. FinFlow never stores your banking credentialsâ€”we only orchestrate the flow.</p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Real-time Auditing</span>
                </div>
              </div>
            </div>
            <div className="h-80 bg-surface-container-low rounded-lg overflow-hidden order-1 md:order-2">
              <img className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 hover:scale-105" data-alt="ultra modern architectural interior with concrete walls glass windows and soft natural light highlighting the clean lines and space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-3wGJ_4iE73-dgdndb79CLPWNCpGnr5UjLzJp_YktgxwNIgANXDhJRfr9mT9TlWhS1iFdNS_H77mWFEKBb9rVHd5bWW8UWL4tn38Hv3VMulJxQFOr0vHF5nhsHtPCRkV-KGfByfZ46NX9vNZS-AcMgZDSr2V8QwgOip9pJEbIKm-qUW9wdfRNK2rGJsbNFVMF0Sj_M6W3B4jIsib-gMvHY720fJHxHcT4KlDGVJVAx8uHSJtV1-8SzMgdGBlexTsi8u8Nszz0EbiR" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
