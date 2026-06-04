import { Edit, Plus, Search, Trash2, Truck } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const shippingRules = [
  {
    id: 1,
    name: "Karachi Same Day",
    zone: "Karachi",
    method: "Same Day Delivery",
    fee: "$3.00",
    minOrder: "$20",
    status: "Active",
  },
  {
    id: 2,
    name: "Pakistan Standard",
    zone: "Nationwide",
    method: "Standard Courier",
    fee: "$5.00",
    minOrder: "$30",
    status: "Active",
  },
  {
    id: 3,
    name: "Free Shipping",
    zone: "Nationwide",
    method: "Free Delivery",
    fee: "$0.00",
    minOrder: "$100",
    status: "Draft",
  },
];

export default function VendorShippingPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Shipping Settings"
        description="Create and manage vendor-specific shipping zones, rules and courier options."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Add Shipping Rule
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title="Shipping Rules" value="12" icon={Truck} />
        <VendorStatCard title="Active Zones" value="5" icon={Truck} tone="green" />
        <VendorStatCard title="Courier Methods" value="4" icon={Truck} tone="blue" />
      </div>

      <VendorTableCard
        title="Shipping Rules"
        description="Vendor delivery configuration"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder="Search rules..."
            />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Rule</th>
              <th className="px-5 py-4">Zone</th>
              <th className="px-5 py-4">Method</th>
              <th className="px-5 py-4">Fee</th>
              <th className="px-5 py-4">Min Order</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {shippingRules.map((rule) => (
              <tr key={rule.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {rule.name}
                </td>
                <td className="px-5 py-4 font-bold">{rule.zone}</td>
                <td className="px-5 py-4 text-sm text-slate-500">
                  {rule.method}
                </td>
                <td className="px-5 py-4 font-black">{rule.fee}</td>
                <td className="px-5 py-4 font-bold">{rule.minOrder}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={rule.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">
          Add / Edit Shipping Rule
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <input className="ms-input" placeholder="Rule Name" />
          <input className="ms-input" placeholder="Shipping Zone" />
          <select className="ms-input">
            <option>Standard Courier</option>
            <option>Same Day Delivery</option>
            <option>Express Delivery</option>
            <option>Free Delivery</option>
          </select>
          <input className="ms-input" placeholder="Shipping Fee" />
          <input className="ms-input" placeholder="Minimum Order Amount" />
          <select className="ms-input">
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="ms-btn-primary">Save Shipping Rule</button>
        </div>
      </div>
    </div>
  );
}