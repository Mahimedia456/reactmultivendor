import { Link } from "react-router-dom";
import { Check, Eye, Plus, WalletCards, X } from "lucide-react";

const payouts = [
  ["PO-1001", "Aamir Fragrances", "Rs 30,000", "Bank Alfalah", "Today", "Pending"],
  ["PO-1002", "Urban Deals", "Rs 85,000", "Meezan Bank", "Yesterday", "Approved"],
  ["PO-1003", "Tech Point", "Rs 22,000", "HBL", "2 days ago", "Paid"],
];

export default function PayoutsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Finance / Payouts</p>
          <h1 className="mt-1 text-2xl font-black">Payout Requests</h1>
        </div>

        <Link to="/admin/payouts/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Payout
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Pending", "18"],
          ["Approved", "42"],
          ["Paid", "286"],
          ["Rejected", "6"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <WalletCards size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[950px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Payout</th>
              <th className="px-5 py-3">Vendor</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Bank</th>
              <th className="px-5 py-3">Requested</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {payouts.map(([id, vendor, amount, bank, date, status]) => (
              <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{id}</td>
                <td className="px-5 py-4 text-sm font-semibold">{vendor}</td>
                <td className="px-5 py-4 text-sm font-black">{amount}</td>
                <td className="px-5 py-4 text-sm font-semibold">{bank}</td>
                <td className="px-5 py-4 text-sm font-semibold">{date}</td>
                <td className="px-5 py-4">
                  <span
                    className={
                      status === "Paid"
                        ? "ms-badge-success"
                        : status === "Approved"
                        ? "ms-badge"
                        : status === "Pending"
                        ? "ms-badge-warning"
                        : "ms-badge-danger"
                    }
                  >
                    {status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/payouts/${id}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                      <Check size={15} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                      <X size={15} />
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