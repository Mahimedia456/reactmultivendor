import { Eye, FileText, Search, ShoppingCart, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const orders = [
  { id: "10021", no: "#ORD-10021", customer: "Ali Khan", items: 3, total: "$240", payment: "Paid", status: "Processing", date: "2026-06-04" },
  { id: "10022", no: "#ORD-10022", customer: "Ahmed Raza", items: 1, total: "$80", payment: "Paid", status: "Completed", date: "2026-06-04" },
  { id: "10023", no: "#ORD-10023", customer: "Sara Malik", items: 2, total: "$120", payment: "Pending", status: "Pending", date: "2026-06-03" },
];

export default function VendorOrdersPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader title="Vendor Orders" description="Manage all orders assigned to your vendor store." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title="Total Orders" value="542" icon={ShoppingCart} />
        <VendorStatCard title="Processing" value="42" icon={Truck} tone="blue" />
        <VendorStatCard title="Completed" value="438" icon={ShoppingCart} tone="green" />
        <VendorStatCard title="Pending" value="62" icon={ShoppingCart} tone="orange" />
      </div>

      <VendorTableCard
        title="Order List"
        description="Search, view and update vendor orders"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search orders..." />
          </div>
        }
      >
        <table className="w-full min-w-[950px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Order</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Items</th>
              <th className="px-5 py-4">Total</th>
              <th className="px-5 py-4">Payment</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{order.no}</td>
                <td className="px-5 py-4 font-bold">{order.customer}</td>
                <td className="px-5 py-4">{order.items}</td>
                <td className="px-5 py-4 font-black">{order.total}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={order.payment} /></td>
                <td className="px-5 py-4"><VendorStatusBadge status={order.status} /></td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{order.date}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link to={`/vendor/orders/${order.id}`} className="ms-btn-soft h-9 w-9 px-0"><Eye size={16} /></Link>
                    <Link to={`/vendor/orders/${order.id}`} className="ms-btn-soft h-9 w-9 px-0"><Truck size={16} /></Link>
                    <Link to={`/vendor/orders/${order.id}/invoice`} className="ms-btn-soft h-9 w-9 px-0"><FileText size={16} /></Link>
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