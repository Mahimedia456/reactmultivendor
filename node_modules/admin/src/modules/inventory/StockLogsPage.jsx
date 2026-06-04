import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const logs = [
  ["Elyndor Perfume 50ml", "ELYN-50", "+20", "Stock received", "Admin", "Today"],
  ["Floral Charm 50ml", "FLOR-50", "-4", "Order fulfilled", "System", "Yesterday"],
  ["Wireless Earbuds Pro", "TECH-WEP", "-2", "Damaged stock", "Admin", "2 days ago"],
];

export default function StockLogsPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to inventory
        </Link>
        <h1 className="text-2xl font-black">Stock Logs</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[900px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Change</th>
              <th className="px-5 py-3">Reason</th>
              <th className="px-5 py-3">By</th>
              <th className="px-5 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {logs.map(([product, sku, change, reason, by, date]) => (
              <tr key={`${sku}-${date}`} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{product}</td>
                <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                <td className="px-5 py-4">
                  <span className={change.startsWith("+") ? "ms-badge-success" : "ms-badge-danger"}>
                    {change}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{reason}</td>
                <td className="px-5 py-4 text-sm font-semibold">{by}</td>
                <td className="px-5 py-4 text-sm font-semibold">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}