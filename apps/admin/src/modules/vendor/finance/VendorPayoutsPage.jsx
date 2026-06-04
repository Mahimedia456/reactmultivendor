import { Eye, Plus, Search, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const payouts = [
  { id: "3001", ref: "PAY-3001", amount: "$500", method: "Bank Transfer", status: "Processing", date: "2026-06-03" },
  { id: "3002", ref: "PAY-3002", amount: "$1,200", method: "JazzCash", status: "Completed", date: "2026-05-28" },
  { id: "3003", ref: "PAY-3003", amount: "$750", method: "Bank Transfer", status: "Rejected", date: "2026-05-20" },
];

export default function VendorPayoutsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Payouts"
        description="Create payout requests and view payout history."
        action={
          <Link to="/vendor/payouts/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Request Payout
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title="Requested" value="$2,450" icon={WalletCards} />
        <VendorStatCard title="Paid" value="$9,800" icon={WalletCards} tone="green" />
        <VendorStatCard title="Pending" value="$500" icon={WalletCards} tone="orange" />
      </div>

      <VendorTableCard
        title="Payout History"
        description="Vendor withdrawal requests"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search payouts..." />
          </div>
        }
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Payout</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Method</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {payouts.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.ref}</td>
                <td className="px-5 py-4 font-black">{item.amount}</td>
                <td className="px-5 py-4">{item.method}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.date}</td>
                <td className="px-5 py-4 text-right">
                  <Link to={`/vendor/payouts/${item.id}`} className="ms-btn-soft h-9 w-9 px-0"><Eye size={16} /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}