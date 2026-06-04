import { Plus, Warehouse } from "lucide-react";

const warehouses = [
  ["Main Warehouse", "Karachi", "1,024 SKUs", "Active"],
  ["Karachi Warehouse", "Karachi", "420 SKUs", "Active"],
  ["Lahore Dispatch", "Lahore", "215 SKUs", "Inactive"],
];

export default function WarehousesPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Inventory / Warehouses</p>
          <h1 className="mt-1 text-2xl font-black">Warehouses</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Plus size={17} />
          Add Warehouse
        </button>
      </div>

      <div className="grid gap-4">
        {warehouses.map(([name, city, skus, status]) => (
          <div key={name} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Warehouse size={20} />
                </div>
                <div>
                  <h3 className="font-black">{name}</h3>
                  <p className="text-sm font-semibold text-slate-500">{city} • {skus}</p>
                </div>
              </div>

              <span className={status === "Active" ? "ms-badge-success" : "ms-badge-warning"}>
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}