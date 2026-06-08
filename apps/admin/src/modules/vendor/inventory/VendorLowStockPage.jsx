import { AlertTriangle, Edit, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const rows = [
  ["Leather Laptop Bag", "MS-BAG-221", 5, 10],
  ["Bluetooth Speaker", "MS-SPK-090", 0, 6],
  ["USB-C Hub", "MS-HUB-112", 3, 12],
];

export default function VendorLowStockPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.inventory.lowStockTitle")}
        description={t("vendorPanel.inventory.lowStockDescription")}
        action={
          <Link to="/vendor/inventory/adjustments" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.inventory.restockProduct")}
          </Link>
        }
      />

      <VendorTableCard
        title={t("vendorPanel.inventory.lowStockProducts")}
        description={t("vendorPanel.inventory.lowStockProductsDescription")}
      >
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.inventory.product")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.sku")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.currentStock")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.threshold")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.alert")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.action")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([product, sku, stock, threshold]) => (
              <tr key={sku}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{product}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{sku}</td>
                <td className="px-5 py-4 font-black text-red-600">{stock}</td>
                <td className="px-5 py-4 font-bold">{threshold}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black text-orange-600">
                    <AlertTriangle size={14} />
                    {t("vendorPanel.inventory.lowStock")}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end">
                    <Link to="/vendor/inventory/adjustments" className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}