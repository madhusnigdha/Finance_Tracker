export interface BusinessGroup {
  id: string;
  name: string;
  accounts: number;
  icon: string;
  income: string;
  expenses: string;
  avatars: string[];
}

export const businessGroupsData: BusinessGroup[] = [
  {
    id: "cafe",
    name: "Cafe Operations",
    accounts: 2,
    icon: "restaurant",
    income: "₹12,400",
    expenses: "₹8,200",
    avatars: ["bg-emerald-800", "bg-slate-300"],
  },
  {
    id: "realestate",
    name: "Real Estate LLC",
    accounts: 3,
    icon: "domain",
    income: "₹34,000",
    expenses: "₹15,500",
    avatars: ["bg-emerald-600", "bg-emerald-900", "bg-slate-300"],
  },
  {
    id: "tech",
    name: "Tech Consultancy",
    accounts: 1,
    icon: "laptop_mac",
    income: "₹45,000",
    expenses: "₹12,000",
    avatars: ["bg-emerald-700"],
  },
  {
    id: "retail",
    name: "Retail Chain",
    accounts: 4,
    icon: "storefront",
    income: "₹88,200",
    expenses: "₹62,400",
    avatars: ["bg-emerald-500", "bg-emerald-800", "bg-slate-400", "bg-slate-200"],
  },
];
