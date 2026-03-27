import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useToast } from "../context/ToastContext";
import { businessGroupsData } from "../data/businessGroups";

export default function BusinessGroupList() {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const groups = businessGroupsData;

  // State for pinned groups (max 2), initializing from localStorage
  const [pinned, setPinned] = useState<string[]>(() => {
    const saved = localStorage.getItem("pinned_business_groups");
    return saved ? JSON.parse(saved) : ["cafe", "realestate"];
  });

  // Sync to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pinned_business_groups", JSON.stringify(pinned));
  }, [pinned]);

  const togglePin = (groupId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to detail page
    e.stopPropagation();
    
    if (pinned.includes(groupId)) {
      setPinned(pinned.filter((id) => id !== groupId));
      showToast("Group unpinned from dashboard.", "info");
    } else {
      if (pinned.length >= 2) {
        showToast("Maximum 2 groups can be pinned to the dashboard.", "error");
      } else {
        setPinned([...pinned, groupId]);
        showToast("Group successfully pinned to dashboard.", "success");
      }
    }
  };

  return (
    <div className="flex min-h-screen font-body bg-white text-on-surface">
      <Sidebar />

      <main className="ml-64 flex-1 bg-white min-h-screen">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-12 py-6 sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-surface-container-low">
          <div>
            <h2 className="font-headline text-3xl text-emerald-900">Business Groups</h2>
            <p className="text-sm text-slate-500 mt-1">Manage all your distinct portfolios and entities.</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => showToast('Feature coming soon', 'info')}
              className="bg-primary text-white px-6 py-2.5 text-sm font-bold tracking-tight hover:bg-primary-container transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Create New Group
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="px-12 py-12">
          {/* Pinned Section Info */}
          <div className="mb-10 bg-primary/5 border border-primary/10 p-6 rounded-lg flex items-start gap-4">
            <span className="material-symbols-outlined text-primary mt-0.5">push_pin</span>
            <div>
              <h4 className="font-bold text-emerald-900 text-sm">Dashboard Pinning</h4>
              <p className="text-sm text-slate-600 mt-1">
                You can pin up to 2 business groups to appear instantly on your main Business Dashboard overview.
                Currently pinned: {pinned.length}/2
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {groups.map((group) => {
              const isPinned = pinned.includes(group.id);
              return (
                <div
                  key={group.id}
                  onClick={() => navigate('/business-group-detail')}
                  className="bg-surface-container-low p-10 group hover:bg-surface-container transition-colors duration-500 relative cursor-pointer border border-transparent hover:border-surface-container-highest rounded-xl shadow-[0_20px_40px_rgba(0,93,66,0.02)]"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h5 className="font-headline text-2xl text-emerald-900 group-hover:translate-x-1 transition-transform duration-300">
                        {group.name}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">link</span>
                        {group.accounts} linked accounts
                      </p>
                    </div>
                    
                    {/* Action Buttons Container */}
                    <div className="flex items-center gap-4">
                      {/* Pin Toggle Button */}
                      <button
                        onClick={(e) => togglePin(group.id, e)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isPinned
                            ? "bg-primary text-white shadow-md hover:bg-primary-container"
                            : "bg-white text-slate-400 hover:text-primary hover:bg-slate-50"
                        }`}
                        title={isPinned ? "Unpin from dashboard" : "Pin to dashboard"}
                      >
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isPinned ? "'FILL' 1" : "'FILL' 0" }}>
                          push_pin
                        </span>
                      </button>

                      {/* Icon Avatar */}
                      <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-slate-400">{group.icon}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">
                        Income
                      </span>
                      <span className="text-xl font-bold text-emerald-950">{group.income}</span>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">
                        Expenses
                      </span>
                      <span className="text-xl font-bold text-slate-700">{group.expenses}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200/50 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {group.avatars.map((bgColor, i) => (
                        <div key={i} className={`w-6 h-6 rounded-full ${bgColor} border border-white`}></div>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
