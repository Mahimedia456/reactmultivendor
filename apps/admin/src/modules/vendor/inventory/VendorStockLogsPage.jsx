import { Download, Search } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const logs = [
  ["ADJ-10021", "Wireless Gaming Mouse", "Increase", "+20", "Manual restock", "2026-06-04"],
  ["ORD-10031", "Smart Watch Pro", "Decrease", "-2", "Order placed", "2026-06-04"],
  ["RET-10008", "Leather Laptop Bag", "Increase", "+1", "Customer return", "2026-06-03"],
  ["DMG-10002", "Bluetooth Speaker", "Decrease", "-1", "Damaged item", "2026-06-03"],
];

export default function VendorStockLogsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Stock Logs"
        description="Complete stock movement history for your vendor products."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Download size={17} />
            Export
          </button>
        }
      />

      <VendorTableCard
        title="Inventory Movement Logs"
        description="Stock increases, decreases, corrections, returns and order deductions"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search logs..." />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Reference</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Qty</th>
              <th className="px-5 py-4">Reason</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {logs.map(([ref, product, type, qty, reason, date]) => (
              <tr key={ref}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{ref}</td>
                <td className="px-5 py-4 font-bold">{product}</td>
                <td className="px-5 py-4">{type}</td>
                <td className={`px-5 py-4 font-black ${String(qty).startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                  {qty}
                </td>
                <td className="px-5 py-4 text-sm text-slate-500">{reason}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}