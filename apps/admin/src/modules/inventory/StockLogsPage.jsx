import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const logs = [
  ["Elyndor Perfume 50ml", "ELYN-50", "+20", "inventoryPage.stockReceived", "Admin", "inventoryPage.today"],
  ["Floral Charm 50ml", "FLOR-50", "-4", "inventoryPage.orderFulfilled", "inventoryPage.system", "inventoryPage.yesterday"],
  ["Wireless Earbuds Pro", "TECH-WEP", "-2", "inventoryPage.damagedStock", "Admin", "inventoryPage.twoDaysAgo"],
];

export default function StockLogsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("inventoryPage.backToInventory")}
        </Link>
        <h1 className="text-2xl font-black">{t("inventoryPage.stockLogs")}</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[900px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("inventoryPage.product")}</th>
              <th className="px-5 py-3">{t("inventoryPage.sku")}</th>
              <th className="px-5 py-3">{t("inventoryPage.change")}</th>
              <th className="px-5 py-3">{t("inventoryPage.reason")}</th>
              <th className="px-5 py-3">{t("inventoryPage.by")}</th>
              <th className="px-5 py-3">{t("inventoryPage.date")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {logs.map(([product, sku, change, reasonKey, by, dateKey]) => (
              <tr key={`${sku}-${dateKey}`} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{product}</td>
                <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                <td className="px-5 py-4">
                  <span className={change.startsWith("+") ? "ms-badge-success" : "ms-badge-danger"}>
                    {change}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{t(reasonKey)}</td>
                <td className="px-5 py-4 text-sm font-semibold">
                  {by.includes(".") ? t(by) : by}
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{t(dateKey)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}