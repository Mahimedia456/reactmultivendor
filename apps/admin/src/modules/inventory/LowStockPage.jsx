import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

const rows = [
  ["Floral Charm 50ml", "FLOR-50", "8", "10", "Aamir Fragrances"],
  ["Wireless Earbuds Pro", "TECH-WEP", "0", "5", "Tech Point"],
];

export default function LowStockPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("inventoryPage.backToInventory")}
        </Link>
        <h1 className="text-2xl font-black">{t("inventoryPage.lowStockProducts")}</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("inventoryPage.product")}</th>
              <th className="px-5 py-3">{t("inventoryPage.sku")}</th>
              <th className="px-5 py-3">{t("inventoryPage.currentStock")}</th>
              <th className="px-5 py-3">{t("inventoryPage.alertLevel")}</th>
              <th className="px-5 py-3">{t("inventoryPage.vendor")}</th>
              <th className="px-5 py-3 text-right">{t("common.action")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([product, sku, stock, alert, vendor]) => (
              <tr key={sku} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={18} className="text-amber-500" />
                    {product}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                <td className="px-5 py-4">
                  <span className={Number(stock) === 0 ? "ms-badge-danger" : "ms-badge-warning"}>
                    {stock}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{alert}</td>
                <td className="px-5 py-4 text-sm font-semibold">{vendor}</td>
                <td className="px-5 py-4 text-right">
                  <Link to="/admin/inventory/adjustments" className="ms-btn-soft">
                    {t("inventoryPage.restock")}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}