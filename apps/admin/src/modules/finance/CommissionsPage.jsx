import { Edit, ReceiptText, RotateCcw, Save } from "lucide-react";

const vendors = [
  ["Aamir Fragrances", "Aamir", "10%", "420", "Rs 640,000", "Rs 64,000"],
  ["Urban Deals", "Usman", "12%", "980", "Rs 1,420,000", "Rs 170,400"],
  ["Tech Point", "Ali Khan", "8%", "112", "Rs 310,000", "Rs 24,800"],
];

export default function CommissionsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Finance / Commissions</p>
        <h1 className="mt-1 text-2xl font-black">Commissions</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          Manage global, vendor-specific and category-based marketplace commission.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Global Commission", "10%"],
          ["Collected", "Rs 1.2M"],
          ["Pending", "Rs 186k"],
          ["Vendor Overrides", "12"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <ReceiptText size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Global Commission Settings</h3>

        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          <div>
            <label className="mb-2 block text-sm font-bold">Default Rate</label>
            <input className="ms-input" defaultValue="10%" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Commission Type</label>
            <select className="ms-input">
              <option>Percentage</option>
              <option>Fixed</option>
              <option>Percentage + Fixed</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Fixed Fee</label>
            <input className="ms-input" defaultValue="0" />
          </div>

          <div className="flex items-end">
            <button className="ms-btn-primary w-full gap-2">
              <Save size={17} />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="ms-card overflow-hidden">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <h3 className="text-lg font-black">Vendor Commission Overrides</h3>
        </div>

        <table className="w-full min-w-[950px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Store</th>
              <th className="px-5 py-3">Owner</th>
              <th className="px-5 py-3">Rate</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Revenue</th>
              <th className="px-5 py-3">Commission</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {vendors.map(([store, owner, rate, orders, revenue, commission]) => (
              <tr key={store} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{store}</td>
                <td className="px-5 py-4 text-sm font-semibold">{owner}</td>
                <td className="px-5 py-4">
                  <span className="ms-badge">{rate}</span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{orders}</td>
                <td className="px-5 py-4 text-sm font-black">{revenue}</td>
                <td className="px-5 py-4 text-sm font-black">{commission}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={15} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <RotateCcw size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}