import { Edit, Eye, Plus, Search, Tags, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const brands = [
  { id: 1, name: "Mahi Tech", slug: "mahi-tech", products: 32, status: "active" },
  { id: 2, name: "Urban Style", slug: "urban-style", products: 18, status: "active" },
  { id: 3, name: "HomePro", slug: "homepro", products: 7, status: "draft" },
];

export default function VendorBrandsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.brands.title")}
        description={t("vendorPanel.brands.description")}
        action={
          <Link to="/vendor/brands/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.brands.addBrand")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title={t("vendorPanel.brands.totalBrands")} value="12" icon={Tags} />
        <VendorStatCard title={t("vendorPanel.brands.activeBrands")} value="9" icon={Tags} tone="green" />
        <VendorStatCard title={t("vendorPanel.brands.productsLinked")} value="128" icon={Tags} tone="blue" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.brands.brandList")}
        description={t("vendorPanel.brands.listDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder={t("vendorPanel.brands.searchPlaceholder")} />
          </div>
        }
      >
        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.brands.brand")}</th>
              <th className="px-5 py-4">{t("vendorPanel.brands.slug")}</th>
              <th className="px-5 py-4">{t("vendorPanel.brands.products")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {brands.map((brand) => (
              <tr key={brand.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {brand.name}
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {brand.slug}
                </td>
                <td className="px-5 py-4 font-black">{brand.products}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={brand.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <Link to={`/vendor/brands/${brand.id}/edit`} className="ms-btn-soft h-9 w-9 px-0">
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