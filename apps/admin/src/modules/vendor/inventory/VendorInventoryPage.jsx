import { AlertTriangle, Boxes, Edit, Eye, FileText, PackageSearch, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const inventory = [
  { id: 1, product: "Wireless Gaming Mouse", sku: "MS-MOUSE-001", stock: 42, reserved: 6, threshold: 10, status: "active" },
  { id: 2, product: "Smart Watch Pro", sku: "MS-WATCH-014", stock: 16, reserved: 2, threshold: 10, status: "active" },
  { id: 3, product: "Leather Laptop Bag", sku: "MS-BAG-221", stock: 5, reserved: 1, threshold: 10, status: "pending" },
  { id: 4, product: "Bluetooth Speaker", sku: "MS-SPK-090", stock: 0, reserved: 0, threshold: 6, status: "rejected" },
];

export default function VendorInventoryPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.inventory.title")}
        description={t("vendorPanel.inventory.description")}
        action={
          <Link to="/vendor/inventory/adjustments" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.inventory.stockAdjustment")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.inventory.totalStock")} value="2,420" icon={Boxes} />
        <VendorStatCard title={t("vendorPanel.inventory.reserved")} value="184" icon={PackageSearch} tone="blue" />
        <VendorStatCard title={t("vendorPanel.inventory.lowStock")} value="9" icon={AlertTriangle} tone="orange" />
        <VendorStatCard title={t("vendorPanel.inventory.stockLogs")} value="312" icon={FileText} tone="green" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.inventory.stockOverview")}
        description={t("vendorPanel.inventory.stockOverviewDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder={t("vendorPanel.inventory.searchStock")} />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.inventory.product")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.sku")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.available")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.reserved")}</th>
              <th className="px-5 py-4">{t("vendorPanel.inventory.threshold")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.inventory.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.product}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.sku}</td>
                <td className="px-5 py-4 font-black">{item.stock}</td>
                <td className="px-5 py-4 font-bold">{item.reserved}</td>
                <td className="px-5 py-4 font-bold">{item.threshold}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.stock === 0 ? "rejected" : item.stock <= item.threshold ? "pending" : item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0"><Eye size={16} /></button>
                    <Link to="/vendor/inventory/adjustments" className="ms-btn-soft h-9 w-9 px-0"><Edit size={16} /></Link>
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