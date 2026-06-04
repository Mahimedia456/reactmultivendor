import { Outlet } from "react-router-dom";
import { Moon, ShieldCheck, Store, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function AuthLayout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="ms-page grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
      <section className="hidden min-h-screen bg-amazon-navy text-white lg:flex lg:flex-col">
        <div className="flex h-[72px] items-center gap-3 border-b border-white/10 px-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-slate-950">
            <Store size={23} />
          </div>
          <div>
            <h1 className="text-lg font-black">Mahi Store</h1>
            <p className="text-xs font-semibold text-slate-400">
              Marketplace Admin System
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="max-w-xl pt-16">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-400">
              Admin & Vendor Panel
            </p>
            <h2 className="mt-5 text-5xl font-black leading-tight tracking-tight">
              Manage your complete multivendor marketplace.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Products, vendors, inventory, orders, payouts, shipping and
              customers in one professional ecommerce operations dashboard.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              ["Orders", "24k"],
              ["Vendors", "120+"],
              ["Revenue", "8.4M"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-amazon-ink p-4"
              >
                <p className="text-2xl font-black text-brand-400">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center p-6">
        <button
          onClick={toggleTheme}
          className="absolute right-6 top-6 ms-btn-soft h-10 w-10 px-0"
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <div className="w-full max-w-[440px]">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-slate-950">
              <Store size={22} />
            </div>
            <div>
              <h1 className="text-lg font-black">Mahi Store</h1>
              <p className="text-xs font-semibold text-slate-500">
                Admin & Vendor Panel
              </p>
            </div>
          </div>

          <div className="ms-card p-7">
            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight">
                Secure sign in
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Use the same login for admin and vendor accounts.
              </p>
            </div>

            <Outlet />
          </div>

          <p className="mt-5 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Mahi Store Marketplace System
          </p>
        </div>
      </section>
    </div>
  );
}