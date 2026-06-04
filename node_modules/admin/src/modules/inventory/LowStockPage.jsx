import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const rows = [
  ["Floral Charm 50ml", "FLOR-50", "8", "10", "Aamir Fragrances"],
  ["Wireless Earbuds Pro", "TECH-WEP", "0", "5", "Tech Point"],
];

export default function LowStockPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to inventory
        </Link>
        <h1 className="text-2xl font-black">Low Stock Products</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Current Stock</th>
              <th className="px-5 py-3">Alert Level</th>
              <th className="px-5 py-3">Vendor</th>
              <th className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([product, sku, stock, alert, vendor]) => (
              <tr key={sku} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={18} className="text-amber-500" />
                    {product}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                <td className="px-5 py-4">
                  <span className={Number(stock) === 0 ? "ms-badge-danger" : "ms-badge-warning"}>
                    {stock}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{alert}</td>
                <td className="px-5 py-4 text-sm font-semibold">{vendor}</td>
                <td className="px-5 py-4 text-right">
                  <Link to="/admin/inventory/adjustments" className="ms-btn-soft">
                    Restock
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}