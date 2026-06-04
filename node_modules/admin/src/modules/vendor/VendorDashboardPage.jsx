import {
  DollarSign,
  Package,
  ShoppingCart,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";

import VendorPageHeader from "./components/VendorPageHeader";
import VendorStatCard from "./components/VendorStatCard";
import VendorTableCard from "./components/VendorTableCard";
import VendorStatusBadge from "./components/VendorStatusBadge";

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "Ali Khan",
    amount: "$120",
    status: "Processing",
  },
  {
    id: "#ORD-1002",
    customer: "Ahmed",
    amount: "$55",
    status: "Completed",
  },
  {
    id: "#ORD-1003",
    customer: "Sara",
    amount: "$240",
    status: "Pending",
  },
];

export default function VendorDashboardPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Vendor Dashboard"
        description="Overview of your products, orders, earnings and store performance."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard
          title="Total Products"
          value="128"
          note="12 added this month"
          icon={Package}
        />

        <VendorStatCard
          title="Orders"
          value="542"
          note="+18% this month"
          icon={ShoppingCart}
          tone="blue"
        />

        <VendorStatCard
          title="Revenue"
          value="$12,450"
          note="This month"
          icon={DollarSign}
          tone="green"
        />

        <VendorStatCard
          title="Wallet Balance"
          value="$3,250"
          note="Available for payout"
          icon={Wallet}
          tone="orange"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <VendorTableCard
            title="Recent Orders"
            description="Latest orders received"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-panel-line dark:border-panel-darkLine">
                  <th className="px-5 py-4 text-left">Order</th>
                  <th className="px-5 py-4 text-left">Customer</th>
                  <th className="px-5 py-4 text-left">Amount</th>
                  <th className="px-5 py-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-panel-line dark:border-panel-darkLine"
                  >
                    <td className="px-5 py-4 font-black">{order.id}</td>
                    <td className="px-5 py-4">{order.customer}</td>
                    <td className="px-5 py-4">{order.amount}</td>
                    <td className="px-5 py-4">
                      <VendorStatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </VendorTableCard>
        </div>

        <div className="space-y-5">
          <VendorStatCard
            title="Store Rating"
            value="4.8"
            note="Based on 2,145 reviews"
            icon={Star}
            tone="green"
          />

          <VendorStatCard
            title="Growth"
            value="+18%"
            note="Compared to last month"
            icon={TrendingUp}
            tone="blue"
          />
        </div>
      </div>
    </div>
  );
}