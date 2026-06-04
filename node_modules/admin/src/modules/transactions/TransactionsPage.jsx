import { Link } from "react-router-dom";
import { CreditCard, Eye, Plus, Search } from "lucide-react";

const transactions = [
  {
    id: "TXN-1001",
    order: "MS-1001",
    customer: "Ahmed Raza",
    vendor: "Aamir Fragrances",
    method: "COD",
    amount: "Rs 6,700",
    status: "Pending",
    date: "Today",
  },
  {
    id: "TXN-1002",
    order: "MS-1002",
    customer: "Sara Khan",
    vendor: "Urban Deals",
    method: "Card",
    amount: "Rs 8,200",
    status: "Paid",
    date: "Yesterday",
  },
  {
    id: "TXN-1003",
    order: "MS-1003",
    customer: "Hamza Ali",
    vendor: "Tech Point",
    method: "Bank Transfer",
    amount: "Rs 18,900",
    status: "Failed",
    date: "2 days ago",
  },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Sales / Transactions</p>
          <h1 className="mt-1 text-2xl font-black">Transactions</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Track COD, paid, failed, refunded and vendor payment transactions.
          </p>
        </div>

        <Link to="/admin/transactions/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Transaction
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Collected", "Rs 8.4M"],
          ["COD Pending", "Rs 420k"],
          ["Paid Online", "Rs 3.2M"],
          ["Failed", "86"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder="Search transaction, order, customer..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Transaction</th>
                <th className="px-5 py-3">Order</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Vendor</th>
                <th className="px-5 py-3">Method</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {transactions.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <CreditCard size={18} />
                      </div>
                      <p className="font-black">{item.id}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.order}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.customer}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.method}</td>
                  <td className="px-5 py-4 text-sm font-black">{item.amount}</td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        item.status === "Paid"
                          ? "ms-badge-success"
                          : item.status === "Pending"
                          ? "ms-badge-warning"
                          : "ms-badge-danger"
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.date}</td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/admin/transactions/${item.id}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Eye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}