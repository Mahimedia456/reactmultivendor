import { Link } from "react-router-dom";
import { Eye, Search, WalletCards } from "lucide-react";

const wallets = [
  ["1", "Aamir Fragrances", "Aamir", "Rs 92,000", "Rs 18,500", "Rs 640,000", "Rs 420,000"],
  ["2", "Urban Deals", "Usman", "Rs 154,800", "Rs 42,000", "Rs 1,420,000", "Rs 900,000"],
  ["3", "Tech Point", "Ali Khan", "Rs 31,500", "Rs 6,200", "Rs 310,000", "Rs 180,000"],
];

export default function VendorWalletsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Finance / Vendor Wallets</p>
        <h1 className="mt-1 text-2xl font-black">Vendor Wallets</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Balance", "Rs 2.4M"],
          ["Pending Clearance", "Rs 386k"],
          ["Paid Out", "Rs 8.8M"],
          ["Payout Requests", "18"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <WalletCards size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder="Search vendor wallet..." />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Store</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Available</th>
                <th className="px-5 py-3">Pending</th>
                <th className="px-5 py-3">Total Earned</th>
                <th className="px-5 py-3">Withdrawn</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {wallets.map(([id, store, owner, available, pending, earned, withdrawn]) => (
                <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4 font-black">{store}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{owner}</td>
                  <td className="px-5 py-4 text-sm font-black">{available}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{pending}</td>
                  <td className="px-5 py-4 text-sm font-black">{earned}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{withdrawn}</td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/vendors/${id}/wallet`} className="ms-btn-soft h-9 w-9 px-0">
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