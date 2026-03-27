import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SettingsAnalytics() {
  return (
    <div className="flex bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-hidden h-screen">
      <Sidebar />
      {/* Main Content Area */}
      <main className="flex-1 ml-64 bg-white flex flex-col overflow-y-auto custom-scrollbar">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-xl px-16 py-10 flex justify-between items-center max-w-[1440px] mx-auto">
          <h2 className="font-headline font-bold text-4xl tracking-tight leading-none text-on-background">Settings &amp; Configurations</h2>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Executive Tier</span>
            <span className="text-on-surface-variant text-xs">Arthur Sterling</span>
          </div>
        </header>

        <div className="px-16 pb-24 max-w-[1440px] mx-auto w-full">
          {/* Tab System */}
          <div className="flex space-x-12 mb-16 border-b border-surface-container">
            <button className="pb-4 text-sm font-bold tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">General Profile</button>
            <button className="pb-4 text-sm font-bold tracking-wider text-primary border-b-2 border-primary">Alerts &amp; Notifications</button>
            <button className="pb-4 text-sm font-bold tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">Category Management</button>
            <button className="pb-4 text-sm font-bold tracking-wider text-on-surface-variant hover:text-on-surface transition-colors">Export Data</button>
          </div>

          <div className="grid grid-cols-12 gap-16">
            {/* Left Column: Notifications Forms */}
            <div className="col-span-12 lg:col-span-7 space-y-16">
              {/* Budget Alerts Block */}
              <section className="bg-surface-container-low p-12 space-y-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-1 h-6 bg-primary-fixed block"></span>
                  <h3 className="font-headline text-2xl font-bold">Budget Alerts</h3>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-on-surface">Enable Budget Alerts</p>
                    <p className="text-sm text-on-surface-variant">Receive instant feedback when nearing limit</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Alert Threshold (₹)</label>
                  <input 
                    className="w-full bg-surface-container-high px-4 py-4 border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-xl font-headline tracking-tight transition-colors outline-none" 
                    placeholder="5,000.00" 
                    type="text" 
                  />
                </div>

                <button className="bg-primary text-on-primary px-8 py-3 font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                  Save Preferences
                </button>
              </section>

              {/* Automated Notifications Block */}
              <section className="bg-surface-container-low p-12 space-y-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-1 h-6 bg-primary-fixed block"></span>
                  <h3 className="font-headline text-2xl font-bold">Automated Notifications</h3>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="pr-8">
                      <p className="font-bold text-on-surface">Email on Large Transactions</p>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Notifications for any single outgoing transfer exceeding ₹1,000.00 USD.</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer mt-1">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-between">
                    <div className="pr-8">
                      <p className="font-bold text-on-surface">Weekly SMS Digest</p>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">A concise summary of your weekly portfolio performance sent every Sunday at 9 AM.</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer mt-1">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="pr-8">
                      <p className="font-bold text-on-surface">Unusual Activity Warnings</p>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Security alerts for login attempts from unrecognized IP addresses or devices.</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer mt-1">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Data & Defaults */}
            <div className="col-span-12 lg:col-span-5 space-y-16">
              <section className="space-y-8">
                <div className="flex items-center justify-between border-b border-surface-container pb-6">
                  <h3 className="font-headline text-2xl font-bold">Category &amp; Merchant Defaults</h3>
                  <button className="text-xs font-bold text-primary tracking-widest uppercase border border-outline-variant/20 px-4 py-2 hover:bg-surface-container-low transition-colors">Edit All</button>
                </div>

                <div className="overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant border-b border-surface-container/50">
                        <th className="py-4 font-bold">Merchant Match</th>
                        <th className="py-4 font-bold">Default Category</th>
                        <th className="py-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container/50">
                      <tr className="group hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-6 font-medium text-sm">Uber</td>
                        <td className="py-6 text-sm">
                          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Transport</span>
                        </td>
                        <td className="py-6 text-right">
                          <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-lg">edit_note</button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-6 font-medium text-sm">AWS</td>
                        <td className="py-6 text-sm">
                          <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Web Services</span>
                        </td>
                        <td className="py-6 text-right">
                          <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-lg">edit_note</button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-6 font-medium text-sm">Starbucks</td>
                        <td className="py-6 text-sm">
                          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Dining Out</span>
                        </td>
                        <td className="py-6 text-right">
                          <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-lg">edit_note</button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-6 font-medium text-sm">Equinox</td>
                        <td className="py-6 text-sm">
                          <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Health</span>
                        </td>
                        <td className="py-6 text-right">
                          <button className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-lg">edit_note</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-8 bg-surface-container rounded-sm border-l-4 border-primary/20">
                  <div className="flex items-start space-x-4">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      FinFlow uses advanced semantic matching to identify merchants. 
                      You can override these defaults by creating specific rule-based overrides.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-12 right-12 flex flex-col items-end space-y-4">
          <button className="bg-primary text-on-primary flex items-center space-x-4 px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
            <span className="text-sm font-bold tracking-[0.15em] uppercase">Export All Data (CSV/PDF)</span>
          </button>
        </div>
      </main>
    </div>
  );
}
