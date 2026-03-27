import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import ProfileSetup from "./pages/ProfileSetup";
import PersonalDashboard from "./pages/PersonalDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import ExpenseEntry from "./pages/ExpenseEntry";
import ExpenseHistory from "./pages/ExpenseHistory";
import BusinessGroupDetail from "./pages/BusinessGroupDetail";
import AutomationRules from "./pages/AutomationRules";
import SyncedAccounts from "./pages/SyncedAccounts";
import SettingsAnalytics from "./pages/SettingsAnalytics";
import BusinessIncome from "./pages/BusinessIncome";
import BankAccountManagement from "./pages/BankAccountManagement";
import MergeGroups from "./pages/MergeGroups";
import BusinessReports from "./pages/BusinessReports";
import BusinessGroupList from "./pages/BusinessGroupList";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/dashboard" element={<PersonalDashboard />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/business-group-detail" element={<BusinessGroupDetail />} />
          <Route path="/add-expense" element={<ExpenseEntry />} />
          <Route path="/transactions" element={<ExpenseHistory />} />
          <Route path="/automation-rules" element={<AutomationRules />} />
          <Route path="/synced-accounts" element={<SyncedAccounts />} />
          <Route path="/settings" element={<SettingsAnalytics />} />
          <Route path="/business-income" element={<BusinessIncome />} />
          <Route path="/business-reports" element={<BusinessReports />} />
          <Route path="/business-groups" element={<BusinessGroupList />} />
          <Route path="/bank-accounts" element={<BankAccountManagement />} />
          <Route path="/merge-groups" element={<MergeGroups />} />
          {/* Redirect root to register by default for now */}
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
