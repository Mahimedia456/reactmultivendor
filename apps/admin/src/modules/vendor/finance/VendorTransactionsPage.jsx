import { ArrowDownCircle, ArrowUpCircle, CreditCard, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const movements = [
  { ref: "TXN-9001", type: "Order Earning", amount: "+$216", status: "Paid", date: "2026-06-04" },
  { ref: "TXN-9002", type: "Commission Deduction", amount: "-$24", status: "Completed", date: "2026-06-04" },
  { ref: "PAY-3001", type: "Payout Request", amount: "-$500", status: "Processing", date: "2026-06-03" },
];

export default function VendorWalletPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Vendor Wallet"
        description="View your available balance, pending balance and wallet movements."
        action={
          <Link to="/vendor/payouts/create" className="ms-btn-primary">
            Request Payout
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title="Available Balance" value="$3,250" icon={WalletCards} tone="green" />
        <VendorStatCard title="Pending Clearance" value="$1,120" icon={CreditCard} tone="orange" />
        <VendorStatCard title="Total Withdrawn" value="$9,800" icon={ArrowUpCircle} tone="blue" />
        <VendorStatCard title="Total Credits" value="$18,420" icon={ArrowDownCircle} />
      </div>

      <div className="rounded-2xl border border-panel-line bg-amazon-navy p-6 text-white shadow-sm">
        <p className="text-sm font-bold text-slate-300">Current Wallet</p>
        <h2 className="mt-2 text-4xl font-black">$3,250.00</h2>
        <p className="mt-2 text-sm text-slate-400">
          This amount is available for payout request.
        </p>
      </div>

      <VendorTableCard title="Wallet Movements" description="Credits, deductions and payout movements">
        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Reference</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {movements.map((item) => (
              <tr key={item.ref}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.ref}</td>
                <td className="px-5 py-4 font-bold">{item.type}</td>
                <td className={`px-5 py-4 font-black ${item.amount.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                  {item.amount}
                </td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}