import { Link } from "react-router-dom";
import { Plus, Zap } from "lucide-react";

const sales = [
  ["Mega Perfume Sale", "36 products", "20%", "Active"],
  ["Electronics Weekend", "18 products", "15%", "Scheduled"],
  ["Clearance Sale", "120 products", "30%", "Ended"],
];

export default function FlashSalesPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">Marketing / Flash Sales</p>
          <h1 className="mt-1 text-2xl font-black">Flash Sales</h1>
        </div>

        <Link to="/admin/flash-sales/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Flash Sale
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Active Sales", "4"],
          ["Products", "286"],
          ["Revenue", "Rs 920k"],
          ["Orders", "1,240"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <Zap size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Campaign</th>
              <th className="px-5 py-3">Products</th>
              <th className="px-5 py-3">Discount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {sales.map(([campaign, products, discount, status]) => (
              <tr key={campaign}>
                <td className="px-5 py-4 font-black">{campaign}</td>
                <td className="px-5 py-4 text-sm font-semibold">{products}</td>
                <td className="px-5 py-4 text-sm font-black">{discount}</td>
                <td className="px-5 py-4">
                  <span className={status === "Active" ? "ms-badge-success" : status === "Scheduled" ? "ms-badge-warning" : "ms-badge-danger"}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}