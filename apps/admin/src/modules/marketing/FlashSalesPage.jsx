import { Link } from "react-router-dom";
import { Plus, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const sales = [
  ["marketingPage.megaPerfumeSale", "marketingPage.productsCount36", "20%", "active"],
  ["marketingPage.electronicsWeekend", "marketingPage.productsCount18", "15%", "scheduled"],
  ["marketingPage.clearanceSale", "marketingPage.productsCount120", "30%", "ended"],
];

export default function FlashSalesPage() {
  const { t } = useTranslation();

  const stats = [
    ["marketingPage.activeSales", "4"],
    ["common.products", "286"],
    ["marketingPage.revenue", "Rs 920k"],
    ["marketingPage.orders", "1,240"],
  ];

  function statusText(status) {
    if (status === "scheduled") return t("marketingPage.scheduled");
    if (status === "ended") return t("marketingPage.ended");
    return t("status.active");
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("marketingPage.flashSalesBreadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("marketingPage.flashSales")}</h1>
        </div>

        <Link to="/admin/flash-sales/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("marketingPage.createFlashSale")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <Zap size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("marketingPage.campaign")}</th>
              <th className="px-5 py-3">{t("common.products")}</th>
              <th className="px-5 py-3">{t("marketingPage.discount")}</th>
              <th className="px-5 py-3">{t("common.status")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {sales.map(([campaignKey, productsKey, discount, status]) => (
              <tr key={campaignKey}>
                <td className="px-5 py-4 font-black">{t(campaignKey)}</td>
                <td className="px-5 py-4 text-sm font-semibold">{t(productsKey)}</td>
                <td className="px-5 py-4 text-sm font-black">{discount}</td>
                <td className="px-5 py-4">
                  <span className={status === "active" ? "ms-badge-success" : status === "scheduled" ? "ms-badge-warning" : "ms-badge-danger"}>
                    {statusText(status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}