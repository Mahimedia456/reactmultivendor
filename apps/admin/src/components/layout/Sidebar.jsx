import { NavLink } from "react-router-dom";
import { ChevronLeft, Sparkles, Store } from "lucide-react";
import { adminNavigation, vendorNavigation } from "../../config/navigation";

export default function Sidebar({ role = "admin" }) {
  const navigation = role === "vendor" ? vendorNavigation : adminNavigation;

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[292px] overflow-hidden bg-amazon-navy text-white shadow-sidebar lg:block">
      <div className="flex h-full flex-col">
        <div className="flex h-[78px] items-center justify-between border-b border-white/10 px-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-slate-950">
              <Store size={22} />
              <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-amazon-navy bg-cyan-400" />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight">Mahi Store</h1>
              <p className="text-xs font-semibold text-slate-400">
                {role === "vendor" ? "Vendor Panel" : "Admin Panel"}
              </p>
            </div>
          </div>

          <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:bg-white/10">
            <ChevronLeft size={16} />
          </button>
        </div>

        <div className="mx-4 mt-4 rounded-xl border border-white/10 bg-amazon-ink p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black">Marketplace OS</p>
              <p className="text-xs text-slate-400">Amazon-style operations</p>
            </div>
          </div>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-4 pb-5">
          <div className="space-y-5">
            {navigation.map((section) => (
              <div key={section.label}>
                <p className="mb-2 px-3 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
                  {section.label}
                </p>

                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `ms-sidebar-link ${
                            isActive ? "ms-sidebar-link-active" : ""
                          }`
                        }
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-xl border border-white/10 bg-amazon-ink p-3">
            <p className="text-sm font-black">System Status</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-slate-400">API</span>
              <span className="font-bold text-emerald-400">Online</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">Storage</span>
              <span className="font-bold text-brand-300">72%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}