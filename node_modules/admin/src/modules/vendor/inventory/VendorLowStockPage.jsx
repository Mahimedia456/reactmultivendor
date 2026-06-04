import { AlertTriangle, Edit, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const rows = [
  ["Leather Laptop Bag", "MS-BAG-221", 5, 10],
  ["Bluetooth Speaker", "MS-SPK-090", 0, 6],
  ["USB-C Hub", "MS-HUB-112", 3, 12],
];

export default function VendorLowStockPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Low Stock"
        description="Products that need restocking based on vendor stock threshold."
        action={
          <Link to="/vendor/inventory/adjustments" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Restock Product
          </Link>
        }
      />

      <VendorTableCard title="Low Stock Products" description="Items below threshold">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">SKU</th>
              <th className="px-5 py-4">Current Stock</th>
              <th className="px-5 py-4">Threshold</th>
              <th className="px-5 py-4">Alert</th>
              <th className="px-5 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([product, sku, stock, threshold]) => (
              <tr key={sku}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{product}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{sku}</td>
                <td className="px-5 py-4 font-black text-red-600">{stock}</td>
                <td className="px-5 py-4 font-bold">{threshold}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black text-orange-600">
                    <AlertTriangle size={14} />
                    Low Stock
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end">
                    <Link to="/vendor/inventory/adjustments" className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}