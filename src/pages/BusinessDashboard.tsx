import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { businessGroupsData, type BusinessGroup } from "../data/businessGroups";

export default function BusinessDashboard() {
  const [pinnedGroups, setPinnedGroups] = useState<BusinessGroup[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("pinned_business_groups");
    const pinnedIds = saved ? JSON.parse(saved) : ["cafe", "realestate"];
    const filtered = businessGroupsData.filter(g => pinnedIds.includes(g.id));
    setPinnedGroups(filtered);
  }, []);
  return (
    <div className="flex min-h-screen font-body bg-white text-on-surface">
      {/* SideNavBar */}
      <Sidebar />

      {/* Main Content Canvas */}
      <main className="ml-64 flex-1 bg-white min-h-screen">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-12 py-6 sticky top-0 z-40 bg-white/80 backdrop-blur-xl">
          <div>
            <h2 className="font-headline text-3xl text-emerald-900">Business Overview</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" data-icon="search">search</span>
              <input className="bg-surface-container-high border-none rounded-none pl-10 pr-4 py-2 text-sm w-64 focus:ring-0 focus:border-b-2 focus:border-primary transition-all" placeholder="Search insights..." type="text" />
            </div>
            <button className="bg-primary text-white px-6 py-2.5 text-sm font-bold tracking-tight hover:bg-primary-container transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
              Add Business Group
            </button>
            <div className="flex items-center gap-4 text-slate-600">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-transform active:scale-95" data-icon="notifications">notifications</span>
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="px-12 pb-24">
          {/* Signature Content Pillar Decoration */}
          <div className="w-[2px] h-12 bg-primary-fixed mb-8 ml-1"></div>

          {/* Aggregate Metric Section */}
          <section className="mb-16">
            <div className="bg-surface-container-low p-12 relative overflow-hidden group">
              {/* Background abstract element */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-xl">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary mb-4 block">Executive Summary</span>
                  <h3 className="font-headline text-xl text-slate-600 mb-2">Aggregate Profit &amp; Loss</h3>
                  <div className="flex items-baseline gap-4">
                    <span className="font-headline text-6xl font-medium text-emerald-950">Net Profit ₹18,450.00</span>
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                      +14.2%
                    </span>
                  </div>
                  <p className="text-slate-500 mt-6 text-sm leading-relaxed max-w-md">
                    Your consolidated portfolios are performing 4.2% above the quarterly baseline. Real estate yields remain steady while operational costs in hospitality have decreased by 8% this period.
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="w-48 h-16 flex items-end justify-between gap-1">
                    <div className="w-3 bg-primary-container/20 h-[40%]"></div>
                    <div className="w-3 bg-primary-container/20 h-[60%]"></div>
                    <div className="w-3 bg-primary-container/20 h-[55%]"></div>
                    <div className="w-3 bg-primary-container/20 h-[75%]"></div>
                    <div className="w-3 bg-primary-container h-[90%]"></div>
                    <div className="w-3 bg-primary h-[100%]"></div>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Monthly Yield Trend</span>
                </div>
              </div>
            </div>
          </section>

          {/* Business Groups Grid */}
          <section>
            <div className="flex justify-between items-baseline mb-8">
              <h4 className="font-headline text-2xl text-emerald-950">Business Portfolios</h4>
              <Link to="/settings" className="text-sm font-bold text-primary hover:underline underline-offset-4 decoration-primary/30">View detailed reports</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pinnedGroups.length === 0 ? (
                <div className="md:col-span-2 bg-surface-container-low p-10 text-center rounded-lg border border-dashed border-outline-variant/50">
                  <p className="text-slate-500 font-medium">No business groups pinned.</p>
                  <Link to="/business-groups" className="text-primary font-bold hover:underline mt-2 inline-block">Go to Business Groups to pin some</Link>
                </div>
              ) : (
                pinnedGroups.map((group) => (
                  <Link key={group.id} to="/business-group-detail" className="bg-surface-container-low p-10 group hover:bg-surface-container transition-colors duration-500 relative block cursor-pointer">
                    <div className="flex justify-between items-start mb-12">
                      <div>
                        <h5 className="font-headline text-2xl text-emerald-900 group-hover:translate-x-1 transition-transform duration-300">{group.name}</h5>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">link</span>
                          {group.accounts} linked accounts
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent text-slate-400">
                          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            push_pin
                          </span>
                        </div>
                        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                          <span className="material-symbols-outlined text-slate-400">{group.icon}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 relative z-10">
                      <div>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Income</span>
                        <span className="text-xl font-bold text-emerald-950">{group.income}</span>
                      </div>
                      <div>
                        <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Expenses</span>
                        <span className="text-xl font-bold text-slate-700">{group.expenses}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-slate-200/50 flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {group.avatars.map((bgColor, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full ${bgColor} border border-white`}></div>
                        ))}
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>

          {/* Activity Feed - New Editorial Component */}
          <section className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h4 className="font-headline text-xl text-emerald-950 mb-6">Recent Cash Flow</h4>
                <div className="space-y-1">
                  <div className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-900" data-icon="payments">payments</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Monthly Rental Income</p>
                        <p className="text-xs text-slate-400 uppercase tracking-tighter">Real Estate LLC â€¢ 2 hours ago</p>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-700">+₹2,450.00</span>
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400" data-icon="inventory_2">inventory_2</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Supplier Payment: Arabica Roasters</p>
                        <p className="text-xs text-slate-400 uppercase tracking-tighter">Cafe Operations â€¢ 5 hours ago</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-700">-₹1,120.00</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-8 relative">
                <h4 className="font-headline text-lg text-emerald-900 mb-4">Financial Insight</h4>
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "Based on current trajectories, diversifying into sustainable materials logistics could reduce your tax liability by 4% next fiscal year."
                </p>
                <img className="w-full h-32 object-cover grayscale opacity-50" alt="Financial Insight Context" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMyUDwr4G2MQfusDQfzKVRSCCg3QTaEcSCSJSWjzbGm_Y7qMHPxJ0UHimT1JKM-k1slbK8K58ZsFkV2lq1djumkNlh8hP2XQSRzM8uFLPE9me_QXBCj10244t7GN1iCWS7pflkcBOxSRkurikAFPSuCUhQazQvV4zvIc4DjNrMwpA5oBOFF3QuztwLY_yeOpghZAHGt-pdc8rK7hzYQgT7UW7IPykU9_Y0Ms23O5DxNJJSfevKklbKnvIRYJIWzXFXkNcWzSRTfZyc" />
                <div className="mt-4">
                  <Link to="#" className="text-xs font-bold tracking-widest uppercase text-emerald-900 border-b border-emerald-900 pb-1">Read Strategy Paper</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
