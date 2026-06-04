import { Link } from "react-router-dom";
import { Eye, Filter, Plus, Search, Store } from "lucide-react";
import VendorStatusBadge from "./components/VendorStatusBadge";

const vendors = [
  {
    id: 1,
    store: "Aamir Fragrances",
    owner: "Aamir",
    email: "aamir@mahistore.com",
    products: 86,
    orders: 420,
    commission: "10%",
    wallet: "Rs 92,000",
    status: "active",
  },
  {
    id: 2,
    store: "Urban Deals",
    owner: "Usman",
    email: "vendor@urban.com",
    products: 134,
    orders: 980,
    commission: "12%",
    wallet: "Rs 154,800",
    status: "active",
  },
  {
    id: 3,
    store: "Tech Point",
    owner: "Ali Khan",
    email: "ali@techpoint.com",
    products: 48,
    orders: 112,
    commission: "8%",
    wallet: "Rs 31,500",
    status: "suspended",
  },
];

export default function VendorsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Marketplace / Vendors</p>
          <h1 className="mt-1 text-2xl font-black">Vendors</h1>
        </div>

        <Link to="/admin/vendors/create" className="ms-btn-primary gap-2">
  <Plus size={17} />
  Add Vendor
</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Vendors", "126"],
          ["Active Vendors", "118"],
          ["Pending Requests", "8"],
          ["Suspended", "3"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder="Search vendors..."
            />
          </div>

          <button className="ms-btn-soft gap-2">
            <Filter size={17} />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Store</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Products</th>
                <th className="px-5 py-3">Orders</th>
                <th className="px-5 py-3">Commission</th>
                <th className="px-5 py-3">Wallet</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                        <Store size={18} />
                      </div>
                      <div>
                        <p className="font-black">{vendor.store}</p>
                        <p className="text-xs font-semibold text-slate-500">{vendor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.owner}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.products}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.orders}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.commission}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.wallet}</td>
                  <td className="px-5 py-4">
                    <VendorStatusBadge status={vendor.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/vendors/${vendor.id}`} className="ms-btn-soft gap-2">
                      <Eye size={16} />
                      View
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