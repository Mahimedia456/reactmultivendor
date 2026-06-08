import { ArrowLeft, CreditCard, Package, ShoppingCart, Truck, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderStatusBadge from "./components/OrderStatusBadge";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const items = [
    ["Elyndor Perfume 50ml", "ELYN-50", "1", "Rs 4,500"],
    ["Floral Charm 50ml", "FLOR-50", "1", "Rs 2,200"],
  ];

  const stats = [
    ["ordersPage.orderValue", "Rs 6,700", CreditCard],
    ["ordersPage.items", "2", Package],
    ["ordersPage.customer", "Ahmed Raza", User],
    ["ordersPage.delivery", t("ordersPage.standard"), Truck],
  ];

  const timeline = [
    ["ordersPage.orderCreated", "ordersPage.customerPlacedOrder", "ordersPage.today1025"],
    ["ordersPage.paymentMethodSelected", "ordersPage.codSelected", "ordersPage.today1026"],
    ["ordersPage.vendorNotified", "ordersPage.vendorReceivedOrder", "ordersPage.today1027"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link to="/admin/orders" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} />
            {t("ordersPage.backToOrders")}
          </Link>
          <h1 className="text-2xl font-black">{t("ordersPage.order")} MS-{id}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">{t("ordersPage.createdTodayVendor")}</p>
        </div>

        <OrderStatusBadge status="processing" />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value, Icon]) => (
          <div key={labelKey} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Icon size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.orderItems")}</h3>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="ms-table-head">
                  <tr>
                    <th className="px-5 py-3">{t("ordersPage.product")}</th>
                    <th className="px-5 py-3">{t("ordersPage.sku")}</th>
                    <th className="px-5 py-3">{t("ordersPage.qty")}</th>
                    <th className="px-5 py-3 text-right">{t("ordersPage.price")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                  {items.map(([product, sku, qty, price]) => (
                    <tr key={sku}>
                      <td className="px-5 py-4 font-black">
                        <div className="flex items-center gap-3">
                          <ShoppingCart size={18} className="text-brand-700" />
                          {product}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                      <td className="px-5 py-4 text-sm font-semibold">{qty}</td>
                      <td className="px-5 py-4 text-right text-sm font-black">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.orderTimeline")}</h3>

            <div className="mt-5 space-y-4">
              {timeline.map(([titleKey, textKey, timeKey]) => (
                <div key={titleKey} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
                  <p className="font-black">{t(titleKey)}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{t(textKey)}</p>
                  <p className="mt-2 text-xs font-bold text-slate-400">{t(timeKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.updateStatus")}</h3>

            <div className="mt-5 space-y-4">
              <select className="ms-input">
                <option>{t("status.pending")}</option>
                <option>{t("status.processing")}</option>
                <option>{t("status.packed")}</option>
                <option>{t("status.shipped")}</option>
                <option>{t("status.delivered")}</option>
                <option>{t("status.cancelled")}</option>
              </select>

              <button className="ms-btn-primary w-full">{t("ordersPage.updateOrder")}</button>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.customer")}</h3>
            <p className="mt-4 font-black">Ahmed Raza</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">ahmed@example.com</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">+92 300 0000000</p>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.shippingAddress")}</h3>
            <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
              House 24, Street 8, DHA Phase 6, Karachi, Pakistan
            </p>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.payment")}</h3>
            <p className="mt-4 text-sm font-semibold">{t("ordersPage.methodCod")}</p>
            <p className="mt-2 text-sm font-semibold">{t("ordersPage.statusPendingCollection")}</p>
            <p className="mt-2 text-xl font-black">Rs 6,700</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
