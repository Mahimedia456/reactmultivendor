import { Link } from "react-router-dom";
import { Eye, Filter, Plus, Search, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import OrderStatusBadge from "./components/OrderStatusBadge";

const orders = [
  { id: 1001, customer: "Ahmed Raza", vendor: "Aamir Fragrances", items: 2, total: "Rs 6,700", paymentKey: "ordersPage.cod", deliveryKey: "ordersPage.standard", status: "processing", dateKey: "ordersPage.today" },
  { id: 1002, customer: "Sara Khan", vendor: "Urban Deals", items: 1, total: "Rs 8,200", paymentKey: "status.paid", deliveryKey: "ordersPage.express", status: "shipped", dateKey: "ordersPage.yesterday" },
  { id: 1003, customer: "Hamza Ali", vendor: "Tech Point", items: 3, total: "Rs 18,900", paymentKey: "status.paid", deliveryKey: "ordersPage.standard", status: "delivered", dateKey: "ordersPage.twoDaysAgo" },
];

export default function OrdersPage() {
  const { t } = useTranslation();

  const stats = [
    ["ordersPage.totalOrders", "24,820"],
    ["status.processing", "286"],
    ["status.shipped", "142"],
    ["status.delivered", "22,410"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("ordersPage.breadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("ordersPage.title")}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">{t("ordersPage.description")}</p>
        </div>

        <Link to="/admin/orders/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("ordersPage.createOrder")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder={t("ordersPage.searchPlaceholder")} />
          </div>

          <button className="ms-btn-soft gap-2">
            <Filter size={17} />
            {t("ordersPage.filters")}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("ordersPage.order")}</th>
                <th className="px-5 py-3">{t("ordersPage.customer")}</th>
                <th className="px-5 py-3">{t("ordersPage.vendor")}</th>
                <th className="px-5 py-3">{t("ordersPage.items")}</th>
                <th className="px-5 py-3">{t("ordersPage.total")}</th>
                <th className="px-5 py-3">{t("ordersPage.payment")}</th>
                <th className="px-5 py-3">{t("ordersPage.delivery")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3">{t("ordersPage.date")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <ShoppingCart size={18} />
                      </div>
                      <p className="font-black">MS-{order.id}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{order.customer}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{order.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{order.items}</td>
                  <td className="px-5 py-4 text-sm font-black">{order.total}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(order.paymentKey)}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(order.deliveryKey)}</td>
                  <td className="px-5 py-4"><OrderStatusBadge status={order.status} /></td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(order.dateKey)}</td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/orders/${order.id}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
