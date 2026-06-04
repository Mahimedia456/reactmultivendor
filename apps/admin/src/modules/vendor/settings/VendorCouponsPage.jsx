import { Edit, Plus, Search, Tags, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const coupons = [
  {
    id: 1,
    code: "VENDOR10",
    type: "Percentage",
    value: "10%",
    usage: "42 / 100",
    expiry: "2026-07-30",
    status: "Active",
  },
  {
    id: 2,
    code: "FREESHIP",
    type: "Shipping",
    value: "Free",
    usage: "21 / 50",
    expiry: "2026-08-15",
    status: "Active",
  },
  {
    id: 3,
    code: "SUMMER25",
    type: "Fixed",
    value: "$25",
    usage: "0 / 200",
    expiry: "2026-06-30",
    status: "Draft",
  },
];

export default function VendorCouponsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Vendor Coupons"
        description="Create vendor-specific discount coupons for your products and store campaigns."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Add Coupon
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title="Total Coupons" value="18" icon={Tags} />
        <VendorStatCard title="Active Coupons" value="11" icon={Tags} tone="green" />
        <VendorStatCard title="Used This Month" value="320" icon={Tags} tone="blue" />
      </div>

      <VendorTableCard
        title="Coupon List"
        description="Vendor coupon codes and usage limits"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder="Search coupons..."
            />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Code</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Value</th>
              <th className="px-5 py-4">Usage</th>
              <th className="px-5 py-4">Expiry</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {coupon.code}
                </td>
                <td className="px-5 py-4 font-bold">{coupon.type}</td>
                <td className="px-5 py-4 font-black">{coupon.value}</td>
                <td className="px-5 py-4 text-sm text-slate-500">
                  {coupon.usage}
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {coupon.expiry}
                </td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={coupon.status} />
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
          Add / Edit Coupon
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <input className="ms-input" placeholder="Coupon Code" />
          <select className="ms-input">
            <option>Percentage</option>
            <option>Fixed Amount</option>
            <option>Free Shipping</option>
          </select>
          <input className="ms-input" placeholder="Discount Value" />
          <input className="ms-input" placeholder="Usage Limit" />
          <input className="ms-input" type="date" />
          <select className="ms-input">
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="ms-btn-primary">Save Coupon</button>
        </div>
      </div>
    </div>
  );
}