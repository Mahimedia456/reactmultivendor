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
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const orders = [
  { id: "10021", order: "#ORD-10021", date: "2026-06-04", items: 3, total: "$240", status: "processing" },
  { id: "10012", order: "#ORD-10012", date: "2026-05-28", items: 1, total: "$80", status: "completed" },
  { id: "10004", order: "#ORD-10004", date: "2026-05-14", items: 2, total: "$120", status: "completed" },
];

const returns = [
  { id: "2001", request: "#RET-2001", product: "Wireless Gaming Mouse", date: "2026-06-04", status: "pending" },
];

export default function VendorCustomerDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.customers.customerDetailTitle", { id })}
        description={t("vendorPanel.customers.customerDetailDescription")}
        action={
          <Link to="/vendor/customers" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.common.back")}
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
              {t("vendorPanel.customers.customerId", { id })}
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
              <VendorStatusBadge status="active" />
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.customers.customerNotes")}
            </h3>
            <textarea
              className="ms-input mt-4 min-h-32"
              placeholder={t("vendorPanel.customers.notePlaceholder")}
              defaultValue={t("vendorPanel.customers.noteDefault")}
            />
            <button className="ms-btn-primary mt-4 w-full">
              {t("vendorPanel.common.saveNote")}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-3">
            <VendorStatCard title={t("vendorPanel.customers.totalOrders")} value="12" icon={ShoppingBag} />
            <VendorStatCard title={t("vendorPanel.customers.totalSpent")} value="$1,240" icon={WalletCards} tone="green" />
            <VendorStatCard title={t("vendorPanel.customers.returns")} value="1" icon={RotateCcw} tone="orange" />
          </div>

          <VendorTableCard
            title={t("vendorPanel.customers.orderHistory")}
            description={t("vendorPanel.customers.orderHistoryDescription")}
          >
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
                <tr>
                  <th className="px-5 py-4">{t("vendorPanel.customers.order")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.customers.items")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.customers.total")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
                  <th className="px-5 py-4 text-right">{t("vendorPanel.common.action")}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{order.order}</td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-500">{order.date}</td>
                    <td className="px-5 py-4">{order.items}</td>
                    <td className="px-5 py-4 font-black">{order.total}</td>
                    <td className="px-5 py-4"><VendorStatusBadge status={order.status} /></td>
                    <td className="px-5 py-4 text-right">
                      <Link to={`/vendor/orders/${order.id}`} className="ms-btn-soft">
                        {t("vendorPanel.common.view")}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </VendorTableCard>

          <VendorTableCard
            title={t("vendorPanel.customers.returnHistory")}
            description={t("vendorPanel.customers.returnHistoryDescription")}
          >
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
                <tr>
                  <th className="px-5 py-4">{t("vendorPanel.customers.return")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.customers.product")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
                  <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
                  <th className="px-5 py-4 text-right">{t("vendorPanel.common.action")}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                {returns.map((item) => (
                  <tr key={item.id}>
                    <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.request}</td>
                    <td className="px-5 py-4 font-bold">{item.product}</td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.date}</td>
                    <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                    <td className="px-5 py-4 text-right">
                      <Link to={`/vendor/returns/${item.id}`} className="ms-btn-soft">
                        {t("vendorPanel.common.view")}
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