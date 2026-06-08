import { Download, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const logs = [
  ["ADJ-10021", "Wireless Gaming Mouse", "vendorPanel.inventory.increase", "+20", "vendorPanel.inventory.manualRestock", "2026-06-04"],
  ["ORD-10031", "Smart Watch Pro", "vendorPanel.inventory.decrease", "-2", "vendorPanel.inventory.orderPlaced", "2026-06-04"],
  ["RET-10008", "Leather Laptop Bag", "vendorPanel.inventory.increase", "+1", "vendorPanel.inventory.customerReturn", "2026-06-03"],
  ["DMG-10002", "Bluetooth Speaker", "vendorPanel.inventory.decrease", "-1", "vendorPanel.inventory.damagedItem", "2026-06-03"],
];

export default function VendorStockLogsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.inventory.logsTitle")}
        description={t("vendorPanel.inventory.logsDescription")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Download size={17} />
            {t("vendorPanel.common.export")}
          </button>
        }
      />

      <VendorTableCard
        title={t("vendorPanel.inventory.movementLogs")}
        description={t("vendorPanel.inventory.movementLogsDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder={t("vendorPanel.inventory.searchLogs")} />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.inventory.reference")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.product")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.type")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.qty")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.reason")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {logs.map(([ref, product, typeKey, qty, reasonKey, date]) => (
              <tr key={ref}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{ref}</td>
                <td className="px-5 py-4 font-bold">{product}</td>
                <td className="px-5 py-4">{t(typeKey)}</td>
                <td className={`px-5 py-4 font-black ${String(qty).startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                  {qty}
                </td>
                <td className="px-5 py-4 text-sm text-slate-500">{t(reasonKey)}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}