import { Link } from "react-router-dom";
import { Package, Clock, CheckCircle2, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import AccountLayout from "../components/account/AccountLayout";
import { accountOrders } from "../data/accountData";
import { formatMoney } from "../utils/currency";

export default function MyAccount() {
  const { t } = useTranslation();

  const stats = [
    [t("account.totalOrders"), accountOrders.length, Package],
    [t("account.processing"), accountOrders.filter((o) => o.status === "Processing").length, Clock],
    [t("account.completed"), accountOrders.filter((o) => o.status === "Completed").length, CheckCircle2],
    [t("account.savedAddresses"), 2, MapPin],
  ];

  return (
    <AccountLayout title={t("account.dashboard")} description={t("account.dashboardDesc")}>
      <div className="grid gap-5 md:grid-cols-4">
        {stats.map(([label, value, Icon]) => (
          <div key={label} className="border border-black/10 bg-white p-6">
            <Icon size={22} strokeWidth={1.5} />
            <p className="mt-4 text-[28px] font-heading leading-none">{value}</p>
            <p className="mt-2 product-card-desc text-black/55">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-black/10 bg-white">
        <div className="border-b border-black/10 p-6">
          <h2 className="product-card-title">{t("account.recentOrders")}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-[13px]">
            <thead className="border-b border-black/10 bg-black/[0.03] product-card-title text-black/60">
              <tr>
                <th className="p-4">{t("account.order")}</th>
                <th className="p-4">{t("account.date")}</th>
                <th className="p-4">{t("account.status")}</th>
                <th className="p-4">{t("account.total")}</th>
                <th className="p-4">{t("account.items")}</th>
                <th className="p-4">{t("account.view")}</th>
              </tr>
            </thead>
            <tbody>
              {accountOrders.map((order) => (
                <tr key={order.id} className="border-b border-black/10 last:border-b-0">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.status}</td>
                  <td className="p-4">{formatMoney(order.total)}</td>
                  <td className="p-4">{order.items}</td>
                  <td className="p-4">
                    <Link to={`/account/orders/${order.id}`} className="underline underline-offset-4">
                      {t("account.view")}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AccountLayout>
  );
}