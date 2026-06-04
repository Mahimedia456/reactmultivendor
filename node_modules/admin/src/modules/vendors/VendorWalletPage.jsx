import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CreditCard, WalletCards } from "lucide-react";

const rows = [
  ["MS-1001", "Order earning", "+ Rs 6,030", "Completed"],
  ["PAY-204", "Payout approved", "- Rs 30,000", "Paid"],
  ["MS-1008", "Commission deducted", "- Rs 670", "Completed"],
];

export default function VendorWalletPage() {
  const { id } = useParams();

  return (
    <div className="space-y-5">
      <div>
        <Link to={`/admin/vendors/${id}`} className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to vendor
        </Link>
        <h1 className="text-2xl font-black">Vendor Wallet</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Available Balance", "Rs 92,000"],
          ["Pending Clearance", "Rs 18,500"],
          ["Total Earned", "Rs 640,000"],
          ["Total Paid", "Rs 420,000"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <WalletCards size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Reference</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([ref, type, amount, status]) => (
              <tr key={ref}>
                <td className="px-5 py-4 font-black">
                  <div className="flex items-center gap-3">
                    <CreditCard size={18} className="text-brand-700" />
                    {ref}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{type}</td>
                <td className="px-5 py-4 text-sm font-black">{amount}</td>
                <td className="px-5 py-4"><span className="ms-badge-success">{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}