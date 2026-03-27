import Sidebar from "../components/Sidebar";
export default function AutomationRules() {
  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen">
      {/* Editorial Sidebar Navigation */}
      <Sidebar />

      {/* Top App Bar */}
      <header className="fixed top-0 right-0 left-64 z-40 flex justify-between items-end px-16 pt-20 pb-12 bg-gray-50/80 dark:bg-stone-950/80 backdrop-blur-xl">
        <div>
          <h2 className="font-headline text-4xl leading-tight text-stone-900 dark:text-stone-50">Automation &amp; Rules</h2>
        </div>
        <button className="bg-emerald-800 text-white dark:bg-emerald-700 px-8 py-3 font-label font-bold rounded-lg hover:bg-emerald-900/90 transition-all active:scale-95 duration-200">
          Create New Rule
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-56 px-16 pb-24 grid grid-cols-12 gap-16">
        {/* Rules List Section */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="flex flex-col gap-6">
            {/* Rule Card 1 */}
            <div className="bg-surface-container-low p-8 rounded flex items-center justify-between group hover:bg-surface-container transition-colors duration-300">
              <div className="flex-grow">
                <p className="font-headline text-2xl text-on-surface leading-relaxed">
                  If <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Merchant</span> is exactly <span className="font-bold underline decoration-primary/30">'Uber'</span>, then set <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Category</span> to <span className="font-bold text-primary">'Transport'</span>
                </p>
              </div>
              <div className="flex items-center gap-6 ml-8">
                {/* Toggle Switch */}
                <div className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
              </div>
            </div>

            {/* Rule Card 2 */}
            <div className="bg-surface-container-low p-8 rounded flex items-center justify-between group hover:bg-surface-container transition-colors duration-300">
              <div className="flex-grow">
                <p className="font-headline text-2xl text-on-surface leading-relaxed">
                  If <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Amount</span> is greater than <span className="font-bold underline decoration-primary/30">₹500</span>, then mark as <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Flagged</span>
                </p>
              </div>
              <div className="flex items-center gap-6 ml-8">
                <div className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
              </div>
            </div>

            {/* Rule Card 3 */}
            <div className="bg-surface-container-low p-8 rounded flex items-center justify-between group hover:bg-surface-container transition-colors duration-300">
              <div className="flex-grow">
                <p className="font-headline text-2xl text-on-surface leading-relaxed">
                  If <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Merchant</span> contains <span className="font-bold underline decoration-primary/30">'Starbucks'</span>, then set <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm mx-1 font-body text-base font-semibold">Category</span> to <span className="font-bold text-primary">'Dining'</span>
                </p>
              </div>
              <div className="flex items-center gap-6 ml-8">
                <div className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Pillar Visualization */}
          <div className="flex items-center gap-4 py-8">
            <div className="h-px bg-primary-fixed flex-grow"></div>
            <span className="text-xs font-label uppercase tracking-widest text-outline">End of Active Automations</span>
            <div className="h-px bg-primary-fixed flex-grow"></div>
          </div>
        </div>

        {/* Create New Rule Sidebar (Builder) */}
        <aside className="col-span-12 lg:col-span-5 relative z-10">
          <div className="sticky top-56 bg-surface-container-low p-10 rounded-lg space-y-12 shadow-sm border border-outline-variant/10">
            <div className="space-y-2">
              <h3 className="font-headline text-3xl text-emerald-900">New Rule Builder</h3>
              <p className="text-sm text-on-surface-variant font-label">Define the logic for your wealth flow.</p>
            </div>

            {/* If Condition Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-label uppercase tracking-widest text-primary px-3 py-1 border border-primary/20 rounded">Step 01</span>
                <span className="font-headline text-xl">The Trigger</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-xs font-label text-outline mb-2">If</label>
                    <select className="w-full bg-surface-container-high border-none rounded-none py-3 px-4 font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Merchant</option>
                      <option>Amount</option>
                      <option>Date</option>
                      <option>Location</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-xs font-label text-outline mb-2">Logic</label>
                    <select className="w-full bg-surface-container-high border-none rounded-none py-3 px-4 font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Equals</option>
                      <option>Contains</option>
                      <option>Greater Than</option>
                      <option>Less Than</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-label text-outline mb-2">Value</label>
                  <input className="w-full bg-surface-container-high border-none rounded-none py-3 px-4 font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all" placeholder="e.g. Amazon" type="text" />
                </div>
              </div>
            </div>

            {/* Then Action Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-label uppercase tracking-widest text-primary px-3 py-1 border border-primary/20 rounded">Step 02</span>
                <span className="font-headline text-xl">The Action</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-xs font-label text-outline mb-2">Then Set</label>
                    <select className="w-full bg-surface-container-high border-none rounded-none py-3 px-4 font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Category</option>
                      <option>Tag</option>
                      <option>Status</option>
                      <option>Priority</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-xs font-label text-outline mb-2">To</label>
                    <select className="w-full bg-surface-container-high border-none rounded-none py-3 px-4 font-body focus:ring-0 focus:border-b-2 focus:border-primary transition-all appearance-none cursor-pointer">
                      <option>Shopping</option>
                      <option>Income</option>
                      <option>Investment</option>
                      <option>Personal Care</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Builder Actions */}
            <div className="pt-6 space-y-4">
              <button className="w-full bg-primary text-on-primary py-4 font-label font-bold tracking-tight rounded-lg hover:bg-primary-container transition-all active:scale-[0.98]">
                Save Rule
              </button>
              <button className="w-full text-outline font-label text-sm font-bold py-2 hover:text-on-surface transition-colors">
                Discard Changes
              </button>
            </div>
          </div>

          {/* Floating Decorative Element */}
          <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </aside>
      </main>

      {/* Contextual Decorative Visual */}
      <div className="fixed bottom-0 right-0 p-16 w-1/3 pointer-events-none opacity-20 z-0">
        <span className="material-symbols-outlined text-[300px] text-primary" style={{ fontVariationSettings: "'wght' 100" }}>account_tree</span>
      </div>
    </div>
  );
}
