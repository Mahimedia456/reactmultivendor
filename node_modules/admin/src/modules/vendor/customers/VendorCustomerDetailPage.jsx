import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  ShoppingBag,
  UserRound,
  WalletCards,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const orders = [
  {
    id: "10021",
    order: "#ORD-10021",
    date: "2026-06-04",
    items: 3,
    total: "$240",
    status: "Processing",
  },
  {
    id: "10012",
    order: "#ORD-10012",
    date: "2026-05-28",
    items: 1,
    total: "$80",
    status: "Completed",
  },
  {
    id: "10004",
    order: "#ORD-10004",
    date: "2026-05-14",
    items: 2,
    total: "$120",
    status: "Completed",
  },
];

const returns = [
  {
    id: "2001",
    request: "#RET-2001",
    product: "Wireless Gaming Mouse",
    date: "2026-06-04",
    status: "Pending",
  },
];

export default function VendorCustomerDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={`Customer #${id}`}
        description="View vendor-specific customer profile, order history and return activity."
        action={
          <Link
            to="/vendor/customers"
            className="ms-btn-soft inline-flex items-center gap-2"
          >
            <ArrowLeft size={17} />
            Back
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-amazon-navy text-brand-500">
              <UserRound size={34} />
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
              Ali Khan
            </h2>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Customer ID #{id}
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                ali@example.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +92 300 0000000
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} />
                House 12, Gulshan-e-Iqbal, Karachi
              </p>
            </div>

            <div className="mt-5">
              <VendorStatusBadge status="Active" />
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Customer Notes
            </h3>
            <textarea
              className="ms-input mt-4 min-h-32"
              placeholder="Internal vendor note about this customer..."
              defaultValue="Frequent buyer, prefers fast delivery and usually orders electronics accessories."
            />
            <button className="ms-btn-primary mt-4 w-full">Save Note</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-3">
            <VendorStatCard
              title="Total Orders"
              value="12"
              icon={ShoppingBag}
            />
            <VendorStatCard
              title="Total Spent"
              value="$1,240"
              icon={WalletCards}
              tone="green"
            />
            <VendorStatCard
              title="Returns"
              value="1"
              icon={RotateCcw}
              tone="orange"
            />
          </div>

          <VendorTableCard
            title="Order History"
            description="Orders placed with this vendor store"
          >
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
                <tr>
                  <th className="px-5 py-4">Order</th>
                  <th className="px-5 py-4">Date</th>
                  <th className="px-5 py-4">Items</th>
                  <th className="px-5 py-4">Total</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                      {order.order}
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-500">
                      {order.date}
                    </td>
                    <td className="px-5 py-4">{order.items}</td>
                    <td className="px-5 py-4 font-black">{order.total}</td>
                    <td className="px-5 py-4">
                      <VendorStatusBadge status={order.status} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/vendor/orders/${order.id}`}
                        className="ms-btn-soft"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </VendorTableCard>

          <VendorTableCard
            title="Return History"
            description="Return requests from this customer"
          >
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
                <tr>
                  <th className="px-5 py-4">Return</th>
                  <th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Date</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                {returns.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                      {item.request}
                    </td>
                    <td className="px-5 py-4 font-bold">{item.product}</td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-500">
                      {item.date}
                    </td>
                    <td className="px-5 py-4">
                      <VendorStatusBadge status={item.status} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/vendor/returns/${item.id}`}
                        className="ms-btn-soft"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </VendorTableCard>
        </div>
      </div>
    </div>
  );
}