import { Plus, Truck } from "lucide-react";

const couriers = [
  ["Leopard Courier", "API Connected", "Active"],
  ["TCS", "Manual Tracking", "Active"],
  ["M&P", "Not Connected", "Inactive"],
];

export default function CouriersPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Shipping / Couriers</p>
          <h1 className="mt-1 text-2xl font-black">Courier Partners</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Plus size={17} /> Add Courier
        </button>
      </div>

      <div className="grid gap-4">
        {couriers.map(([name, integration, status]) => (
          <div key={name} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="font-black">{name}</h3>
                  <p className="text-sm font-semibold text-slate-500">{integration}</p>
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