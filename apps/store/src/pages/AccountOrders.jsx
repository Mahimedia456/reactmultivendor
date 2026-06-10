import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AccountLayout from "../components/account/AccountLayout";
import { accountOrders } from "../data/accountData";
import { formatMoney } from "../utils/currency";

export default function AccountOrders() {
  const { t } = useTranslation();

  return (
    <AccountLayout
      title={t("account.orders")}
      description="View marketplace order history and order statuses."
    >
      <div className="border border-black/10 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-[13px]">
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
                  <td className="p-4 product-card-title text-black">{order.id}</td>
                  <td className="p-4 text-black/65">{order.date}</td>
                  <td className="p-4">
                    <span className="bg-black px-3 py-1 product-badge-text text-white">
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-black/65">{formatMoney(order.total)}</td>
                  <td className="p-4 text-black/65">{order.items}</td>
                  <td className="p-4">
                    <Link
                      to={`/account/orders/${order.id}`}
                      className="underline underline-offset-4"
                    >
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