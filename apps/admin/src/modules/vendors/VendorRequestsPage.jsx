import { Check, Eye, Store, X } from "lucide-react";
import VendorStatusBadge from "./components/VendorStatusBadge";

const requests = [
  {
    id: 11,
    store: "Fashion Hub",
    owner: "Sara",
    email: "sara@fashionhub.com",
    category: "Fashion",
    documents: "Submitted",
    status: "pending",
  },
  {
    id: 12,
    store: "Pet World",
    owner: "Hamza",
    email: "hamza@petworld.com",
    category: "Pet Supplies",
    documents: "Missing Tax Document",
    status: "pending",
  },
];

export default function VendorRequestsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Marketplace / Vendor Requests</p>
        <h1 className="mt-1 text-2xl font-black">Vendor Approval Requests</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Store</th>
              <th className="px-5 py-3">Owner</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Documents</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {requests.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Store size={18} />
                    </div>
                    <div>
                      <p className="font-black">{item.store}</p>
                      <p className="text-xs font-semibold text-slate-500">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{item.owner}</td>
                <td className="px-5 py-4 text-sm font-semibold">{item.category}</td>
                <td className="px-5 py-4 text-sm font-semibold">{item.documents}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                      <Check size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                      <X size={16} />
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