import {
  DollarSign,
  Package,
  ShoppingCart,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "./components/VendorPageHeader";
import VendorStatCard from "./components/VendorStatCard";
import VendorTableCard from "./components/VendorTableCard";
import VendorStatusBadge from "./components/VendorStatusBadge";

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "Ali Khan",
    amount: "$120",
    status: "processing",
  },
  {
    id: "#ORD-1002",
    customer: "Ahmed",
    amount: "$55",
    status: "completed",
  },
  {
    id: "#ORD-1003",
    customer: "Sara",
    amount: "$240",
    status: "pending",
  },
];

export default function VendorDashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.dashboard.title")}
        description={t("vendorPanel.dashboard.description")}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard
          title={t("vendorPanel.dashboard.totalProducts")}
          value="128"
          note={t("vendorPanel.dashboard.productsAddedThisMonth")}
          icon={Package}
        />

        <VendorStatCard
          title={t("vendorPanel.dashboard.orders")}
          value="542"
          note={t("vendorPanel.dashboard.ordersGrowth")}
          icon={ShoppingCart}
          tone="blue"
        />

        <VendorStatCard
          title={t("vendorPanel.dashboard.revenue")}
          value="$12,450"
          note={t("vendorPanel.dashboard.thisMonth")}
          icon={DollarSign}
          tone="green"
        />

        <VendorStatCard
          title={t("vendorPanel.dashboard.walletBalance")}
          value="$3,250"
          note={t("vendorPanel.dashboard.availableForPayout")}
          icon={Wallet}
          tone="orange"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <VendorTableCard
            title={t("vendorPanel.dashboard.recentOrders")}
            description={t("vendorPanel.dashboard.recentOrdersDescription")}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-panel-line dark:border-panel-darkLine">
                  <th className="px-5 py-4 text-left">
                    {t("vendorPanel.dashboard.order")}
                  </th>
                  <th className="px-5 py-4 text-left">
                    {t("vendorPanel.dashboard.customer")}
                  </th>
                  <th className="px-5 py-4 text-left">
                    {t("vendorPanel.dashboard.amount")}
                  </th>
                  <th className="px-5 py-4 text-left">
                    {t("vendorPanel.common.status")}
                  </th>
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
            title={t("vendorPanel.dashboard.storeRating")}
            value="4.8"
            note={t("vendorPanel.dashboard.reviewsNote")}
            icon={Star}
            tone="green"
          />

          <VendorStatCard
            title={t("vendorPanel.dashboard.growth")}
            value="+18%"
            note={t("vendorPanel.dashboard.growthNote")}
            icon={TrendingUp}
            tone="blue"
          />
        </div>
      </div>
    </div>
  );
}