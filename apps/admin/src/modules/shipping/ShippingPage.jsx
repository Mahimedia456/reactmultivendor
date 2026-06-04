import { Link } from "react-router-dom";
import { Eye, Plus, Search, Truck, Warehouse } from "lucide-react";

const zones = [
  ["Karachi", "Pakistan", "Rs 250", "Active"],
  ["Lahore", "Pakistan", "Rs 300", "Active"],
  ["Islamabad", "Pakistan", "Rs 350", "Active"],
];

const methods = [
  ["Standard Delivery", "2-4 business days", "Rs 250", "Active"],
  ["Express Delivery", "1-2 business days", "Rs 500", "Active"],
  ["Courier Pickup", "Vendor managed", "Custom", "Inactive"],
];

export default function ShippingPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Sales / Shipping</p>
          <h1 className="mt-1 text-2xl font-black">Shipping</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Manage shipping zones, delivery methods, rates and courier rules.
          </p>
        </div>

        <div className="flex gap-2">
          <Link to="/admin/couriers" className="ms-btn-soft">
            Courier Partners
          </Link>

          <Link to="/admin/shipping/create" className="ms-btn-primary gap-2">
            <Plus size={17} />
            Add Shipping Rule
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Shipping Zones", "12"],
          ["Active Methods", "8"],
          ["Courier Partners", "4"],
          ["Pending Shipments", "142"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="ms-card">
          <div className="flex items-center justify-between border-b border-panel-line p-4 dark:border-panel-darkLine">
            <div>
              <h3 className="text-lg font-black">Shipping Zones</h3>
              <p className="text-sm font-semibold text-slate-500">
                City/country based delivery rates.
              </p>
            </div>
            <Link to="/admin/shipping/create" className="ms-btn-soft gap-2">
              <Plus size={16} />
              Zone
            </Link>
          </div>

          <div className="p-4">
            <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
              <Search size={17} className="text-slate-400" />
              <input
                className="w-full bg-transparent text-sm font-medium outline-none"
                placeholder="Search zones..."
              />
            </div>

            <div className="space-y-3">
              {zones.map(([city, country, rate, status], index) => (
                <div
                  key={city}
                  className="flex items-center justify-between rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Warehouse size={18} />
                    </div>
                    <div>
                      <p className="font-black">{city}</p>
                      <p className="text-sm font-semibold text-slate-500">
                        {country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-black">{rate}</p>
                      <span
                        className={
                          status === "Active"
                            ? "ms-badge-success"
                            : "ms-badge-warning"
                        }
                      >
                        {status}
                      </span>
                    </div>

                    <Link
                      to={`/admin/shipping/${index + 1}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Eye size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ms-card">
          <div className="flex items-center justify-between border-b border-panel-line p-4 dark:border-panel-darkLine">
            <div>
              <h3 className="text-lg font-black">Delivery Methods</h3>
              <p className="text-sm font-semibold text-slate-500">
                Standard, express and vendor delivery.
              </p>
            </div>
            <Link to="/admin/shipping/create" className="ms-btn-soft gap-2">
              <Plus size={16} />
              Method
            </Link>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              {methods.map(([name, eta, rate, status], index) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Truck size={18} />
                    </div>
                    <div>
                      <p className="font-black">{name}</p>
                      <p className="text-sm font-semibold text-slate-500">{eta}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-black">{rate}</p>
                      <span
                        className={
                          status === "Active"
                            ? "ms-badge-success"
                            : "ms-badge-warning"
                        }
                      >
                        {status}
                      </span>
                    </div>

                    <Link
                      to={`/admin/shipping/${index + 10}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Eye size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}