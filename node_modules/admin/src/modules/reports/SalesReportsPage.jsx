import { BarChart3, Download, ShoppingCart } from "lucide-react";

const rows = [
  ["Today", "142", "Rs 286,000", "Rs 28,600"],
  ["This Week", "920", "Rs 1,840,000", "Rs 184,000"],
  ["This Month", "4,820", "Rs 8,400,000", "Rs 840,000"],
];

export default function SalesReportsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">Reports / Sales</p>
          <h1 className="mt-1 text-2xl font-black">Sales Reports</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Download size={17} />
          Export
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Sales", "Rs 8.4M"],
          ["Orders", "4,820"],
          ["Average Order", "Rs 1,742"],
          ["Commission", "Rs 840k"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <ShoppingCart size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Sales Trend</h3>
        <div className="mt-5 flex h-72 items-end gap-3 rounded-card bg-slate-50 p-5 dark:bg-white/5">
          {[44, 68, 55, 80, 66, 92, 74, 88, 61, 95, 72, 98].map((height, index) => (
            <div key={index} className="flex flex-1 flex-col justify-end">
              <div className="rounded-t-lg bg-brand-500" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Period</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Revenue</th>
              <th className="px-5 py-3">Commission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([period, orders, revenue, commission]) => (
              <tr key={period}>
                <td className="px-5 py-4 font-black">{period}</td>
                <td className="px-5 py-4 text-sm font-semibold">{orders}</td>
                <td className="px-5 py-4 text-sm font-black">{revenue}</td>
                <td className="px-5 py-4 text-sm font-black">{commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}