import { CheckCircle2, Eye, RotateCcw, Search, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const returns = [
  { id: "2001", no: "#RET-2001", order: "#ORD-10021", customer: "Ali Khan", product: "Wireless Gaming Mouse", reason: "Damaged item", status: "Pending" },
  { id: "2002", no: "#RET-2002", order: "#ORD-10018", customer: "Sara Malik", product: "Leather Laptop Bag", reason: "Wrong item", status: "Processing" },
  { id: "2003", no: "#RET-2003", order: "#ORD-10011", customer: "Ahmed Raza", product: "Smart Watch Pro", reason: "Not satisfied", status: "Completed" },
];

export default function VendorReturnsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader title="Returns" description="Manage return requests for your vendor orders." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title="Total Returns" value="32" icon={RotateCcw} />
        <VendorStatCard title="Pending" value="8" icon={RotateCcw} tone="orange" />
        <VendorStatCard title="Approved" value="18" icon={CheckCircle2} tone="green" />
        <VendorStatCard title="Rejected" value="6" icon={XCircle} tone="red" />
      </div>

      <VendorTableCard
        title="Return Requests"
        description="Approve, reject and track return requests"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search returns..." />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Return</th>
              <th className="px-5 py-4">Order</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Reason</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {returns.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black">{item.no}</td>
                <td className="px-5 py-4 font-bold">{item.order}</td>
                <td className="px-5 py-4">{item.customer}</td>
                <td className="px-5 py-4">{item.product}</td>
                <td className="px-5 py-4 text-sm text-slate-500">{item.reason}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4">
                  <div className="flex justify-end">
                    <Link to={`/vendor/returns/${item.id}`} className="ms-btn-soft h-9 w-9 px-0"><Eye size={16} /></Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}