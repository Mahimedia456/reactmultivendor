import { Link } from "react-router-dom";
import { Edit, Plus, ShieldCheck } from "lucide-react";

const roles = [
  ["Super Admin", "Full system access", "12 modules", "Active"],
  ["Operations", "Orders, products, inventory", "7 modules", "Active"],
  ["Support", "Customers, tickets, reviews", "4 modules", "Active"],
  ["Finance", "Wallets, payouts, transactions", "5 modules", "Active"],
];

export default function RolesPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">System / Roles</p>
          <h1 className="mt-1 text-2xl font-black">Roles & Permissions</h1>
        </div>

        <Link to="/admin/roles/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Role
        </Link>
      </div>

      <div className="grid gap-4">
        {roles.map(([name, desc, modules, status]) => (
          <div key={name} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-black">{name}</h3>
                  <p className="text-sm font-semibold text-slate-500">{desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="ms-badge">{modules}</span>
                <span className={status === "Active" ? "ms-badge-success" : "ms-badge-warning"}>{status}</span>
                <button className="ms-btn-soft h-9 w-9 px-0">
                  <Edit size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}