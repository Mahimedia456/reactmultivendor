import {
  Bell,
  LogOut,
  Menu,
  Moon,
  Search,
  Sun,
  UserRound,
  WalletCards,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { logoutUser } from "../../services/auth.service";

function getPageTitle(pathname) {
  const map = {
    "/admin/dashboard": "Dashboard",
    "/admin/vendors": "Vendors",
    "/admin/vendor-requests": "Vendor Requests",
    "/admin/stores": "Stores",
    "/admin/products": "Products",
    "/admin/categories": "Categories",
    "/admin/brands": "Brands",
    "/admin/attributes": "Attributes",
    "/admin/reviews": "Reviews",
    "/admin/inventory": "Inventory",
    "/admin/orders": "Orders",
    "/admin/transactions": "Transactions",
    "/admin/shipping": "Shipping",
    "/admin/commissions": "Commissions",
    "/admin/vendor-wallets": "Vendor Wallets",
    "/admin/payouts": "Payouts",
    "/admin/customers": "Customers",
    "/admin/coupons": "Coupons",
    "/admin/banners": "Banners",
    "/admin/flash-sales": "Flash Sales",
    "/admin/announcements": "Announcements",
    "/admin/notifications": "Notifications",
    "/admin/email-campaigns": "Email Campaigns",
    "/admin/reports/sales": "Sales Reports",
    "/admin/reports/vendors": "Vendor Reports",
    "/admin/reports/products": "Product Reports",
    "/admin/reports/customers": "Customer Reports",
  };

  return map[pathname] || "Mahi Store";
}

export default function Topbar({ role = "admin", user }) {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  function handleLogout() {
    logoutUser();
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-panel-line bg-white/95 backdrop-blur dark:border-panel-darkLine dark:bg-panel-dark/95">
      <div className="flex h-[72px] items-center justify-between gap-4 px-5 lg:px-7">
        <div className="flex min-w-0 items-center gap-4">
          <button className="ms-btn-soft h-10 w-10 px-0 lg:hidden">
            <Menu size={19} />
          </button>

          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Home</span>
              <span>/</span>
              <span>{role === "vendor" ? "Vendor" : "Admin"}</span>
            </div>
            <h2 className="mt-1 truncate text-xl font-black tracking-tight text-slate-950 dark:text-white">
              {pageTitle}
            </h2>
          </div>
        </div>

        <div className="hidden min-w-[360px] max-w-xl flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard md:flex">
          <Search size={17} className="text-slate-400" />
          <input
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
            placeholder="Search orders, products, vendors..."
          />
          <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-bold text-slate-400 dark:border-panel-darkLine dark:bg-panel-dark">
            Ctrl K
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="ms-btn-soft hidden gap-2 xl:flex">
            <WalletCards size={17} />
            Payouts
          </button>

          <button onClick={toggleTheme} className="ms-btn-soft h-10 w-10 px-0">
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button className="ms-btn-soft relative h-10 w-10 px-0">
            <Bell size={17} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-brand-500 ring-2 ring-white dark:ring-panel-dark" />
          </button>

          <div className="ml-2 hidden items-center gap-3 border-l border-slate-200 pl-4 dark:border-panel-darkLine md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amazon-navy text-brand-500">
              <UserRound size={18} />
            </div>
            <div>
              <p className="text-sm font-black leading-4">{user?.name || "Aamir"}</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {role === "vendor" ? "Vendor" : "Super Admin"}
              </p>
            </div>
          </div>

          <button onClick={handleLogout} className="ms-btn-soft h-10 w-10 px-0">
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}