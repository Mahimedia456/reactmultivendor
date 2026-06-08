import { Edit, Eye, Plus, Search, Trash2, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const categories = [
  {
    id: 1,
    nameKey: "vendorPanel.categories.electronics",
    slug: "electronics",
    products: 42,
    parentKey: "vendorPanel.categories.main",
    status: "active",
  },
  {
    id: 2,
    nameKey: "vendorPanel.categories.fashion",
    slug: "fashion",
    products: 28,
    parentKey: "vendorPanel.categories.main",
    status: "active",
  },
  {
    id: 3,
    nameKey: "vendorPanel.categories.accessories",
    slug: "accessories",
    products: 15,
    parentKey: "vendorPanel.categories.electronics",
    status: "draft",
  },
];

export default function VendorCategoriesPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.categories.title")}
        description={t("vendorPanel.categories.description")}
        action={
          <Link to="/vendor/categories/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.categories.addCategory")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title={t("vendorPanel.categories.totalCategories")} value="18" icon={Boxes} />
        <VendorStatCard title={t("vendorPanel.categories.active")} value="14" icon={Boxes} tone="green" />
        <VendorStatCard title={t("vendorPanel.categories.draft")} value="4" icon={Boxes} tone="orange" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.categories.categoryList")}
        description={t("vendorPanel.categories.listDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder={t("vendorPanel.categories.searchPlaceholder")} />
          </div>
        }
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.categories.category")}</th>
              <th className="px-5 py-4">{t("vendorPanel.categories.slug")}</th>
              <th className="px-5 py-4">{t("vendorPanel.categories.parent")}</th>
              <th className="px-5 py-4">{t("vendorPanel.categories.products")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {categories.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {t(item.nameKey)}
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.slug}</td>
                <td className="px-5 py-4 font-bold">{t(item.parentKey)}</td>
                <td className="px-5 py-4 font-black">{item.products}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <Link to={`/vendor/categories/${item.id}/edit`} className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                      <Trash2 size={16} />
                    </button>
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