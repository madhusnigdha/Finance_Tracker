import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Dynamically determine the profile context based on the current URL
  const isBusinessRoute = currentPath.startsWith('/business') || currentPath.startsWith('/bank-accounts') || currentPath.startsWith('/merge-groups');
  
  // Keep track of the last profile context for shared routes like /settings
  if (isBusinessRoute) {
    localStorage.setItem('finflow_mode', 'business');
  } else if (currentPath.startsWith('/dashboard') || currentPath.startsWith('/transactions') || currentPath.startsWith('/automation-rules')) {
    localStorage.setItem('finflow_mode', 'personal');
  }

  const isBusiness = isBusinessRoute || localStorage.getItem('finflow_mode') === 'business';

  const personalLinks = [
    { name: "Dashboard", path: "/dashboard", icon: "dashboard" },
    { name: "Transactions", path: "/transactions", icon: "receipt_long" },
    { name: "Automation", path: "/automation-rules", icon: "smart_toy" },
    { name: "Settings", path: "/settings", icon: "settings" },
  ];

  const businessLinks = [
    { name: "DASHBOARD", path: "/business-dashboard", icon: "dashboard" },
    { name: "BUSINESS GROUPS", path: "/business-groups", icon: "workspaces" },
    { name: "REPORTS", path: "/business-reports", icon: "analytics" },
    { name: "SETTINGS", path: "/settings", icon: "settings" },
  ];

  const activeLinks = isBusiness ? businessLinks : personalLinks;

  return (
    <aside className={`h-screen w-64 fixed left-0 top-0 flex flex-col z-50 overflow-y-auto ${
      isBusiness ? "bg-slate-100 dark:bg-slate-900 py-8 px-0" : "bg-gray-100 dark:bg-stone-900 py-12 px-6"
    }`}>
      {/* Brand Header */}
      <div className={`mb-12 ${isBusiness ? "px-6" : ""}`}>
        <h1 className={`font-bold font-['Newsreader'] leading-none ${isBusiness ? "text-2xl italic text-emerald-900 dark:text-emerald-50" : "text-2xl text-emerald-900 dark:text-emerald-50"}`}>
          FinFlow
        </h1>
        <p className={`font-['Manrope'] mt-1 ${isBusiness ? "text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-500" : "text-xs uppercase tracking-widest text-emerald-800/60 dark:text-emerald-400/60"}`}>
          {isBusiness ? "Wealth Management" : "Wealth Management"}
        </p>
      </div>

      {/* Navigation */}
      <nav className={`flex ${isBusiness ? "flex-1 flex-col" : "flex-col space-y-4"}`}>
        {activeLinks.map((link) => {
          // Determine active state
          const isActive = 
            currentPath === link.path || 
            (!isBusiness && link.name === "Transactions" && currentPath === "/add-expense") ||
            (isBusiness && link.name === "BUSINESS GROUPS" && currentPath === "/business-group-detail");

          if (isBusiness) {
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-6 py-4 transition-all duration-200 ${
                  isActive
                    ? "text-emerald-900 dark:text-emerald-50 font-bold border-l-2 border-emerald-900 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20"
                    : "text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <span className="material-symbols-outlined mr-4">{link.icon}</span>
                <span className="text-sm tracking-wider uppercase font-semibold">{link.name}</span>
              </Link>
            );
          } else {
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-4 py-2 pl-4 transition-colors ${
                  isActive
                    ? "text-emerald-800 dark:text-emerald-400 font-bold border-l-2 border-emerald-800 dark:border-emerald-400"
                    : "text-gray-500 dark:text-stone-500 hover:bg-gray-200 dark:hover:bg-stone-800"
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="font-body text-sm">{link.name}</span>
              </Link>
            );
          }
        })}
      </nav>

      {/* Footer Area */}
      <div className={`mt-auto ${isBusiness ? "pt-8 px-6" : "pt-8"}`}>
        {!isBusiness ? (
          <div className="p-4 bg-white/50 dark:bg-stone-800/50 rounded-lg">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">Upgrade to Pro</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Unlock advanced portfolio analytics and tax reporting.
            </p>
            <button className="mt-3 text-xs font-bold text-primary underline underline-offset-4">Learn More</button>
          </div>
        ) : (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <Link to="/settings" className="flex items-center text-slate-500 dark:text-slate-400 font-medium hover:text-emerald-900 transition-colors py-2">
              <span className="material-symbols-outlined mr-4">help_outline</span>
              <span className="text-xs tracking-wider uppercase font-semibold">Help Center</span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
