import { Link } from "react-router-dom";
import { Edit, Plus, Search, Tags, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const brands = [
  { id: 1, name: "Scents By Aamir", products: 36, status: "active" },
  { id: 2, name: "Mahi Store Basics", products: 82, status: "active" },
  { id: 3, name: "Tech World", products: 124, status: "inactive" },
];

export default function BrandsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("brands.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("brands.title")}</h1>
        </div>

        <Link to="/admin/brands/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("brands.addBrand")}
        </Link>
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("brands.searchPlaceholder")}
            />
          </div>
        </div>

        <table className="w-full min-w-[760px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("brands.brand")}</th>
              <th className="px-5 py-3">{t("common.products")}</th>
              <th className="px-5 py-3">{t("common.status")}</th>
              <th className="px-5 py-3 text-right">{t("common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {brands.map((brand) => (
              <tr
                key={brand.id}
                className="hover:bg-slate-50 dark:hover:bg-white/5"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Tags size={18} />
                    </div>
                    <p className="font-black">{brand.name}</p>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm font-semibold">
                  {brand.products}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={
                      brand.status === "active"
                        ? "ms-badge-success"
                        : "ms-badge-warning"
                    }
                  >
                    {t(`status.${brand.status}`)}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/admin/brands/${brand.id}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Edit size={15} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}