import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CreditCard, ReceiptText } from "lucide-react";

export default function TransactionDetailPage() {
  const { id } = useParams();

  const details = [
    ["Transaction ID", id],
    ["Order", "MS-1001"],
    ["Customer", "Ahmed Raza"],
    ["Vendor", "Aamir Fragrances"],
    ["Method", "COD"],
    ["Amount", "Rs 6,700"],
    ["Status", "Pending"],
    ["Date", "Today 10:30 AM"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/transactions" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to transactions
        </Link>
        <h1 className="text-2xl font-black">Transaction {id}</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Amount", "Rs 6,700"],
          ["Status", "Pending"],
          ["Method", "COD"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <CreditCard className="text-brand-700" size={22} />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
          <ReceiptText size={19} /> Transaction Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {details.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
              <p className="text-xs font-black uppercase text-slate-400">{label}</p>
              <p className="mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}