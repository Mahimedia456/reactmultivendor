import { Link } from "react-router-dom";
import { Edit, FolderTree, Plus, Search, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const categories = [
  { id: 1, nameKey: "categories.perfumes", parentKey: "categories.main", products: 156, status: "active" },
  { id: 2, nameKey: "categories.menFragrance", parentKey: "categories.perfumes", products: 72, status: "active" },
  { id: 3, nameKey: "categories.womenFragrance", parentKey: "categories.perfumes", products: 61, status: "active" },
  { id: 4, nameKey: "categories.electronics", parentKey: "categories.main", products: 230, status: "inactive" },
];

export default function CategoriesPage() {
  const { t } = useTranslation();

  const stats = [
    ["categories.totalCategories", "48"],
    ["categories.active", "42"],
    ["categories.inactive", "6"],
    ["categories.productsLinked", "1,248"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("categories.breadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("categories.title")}</h1>
        </div>

        <Link to="/admin/categories/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("categories.addCategory")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div className="ms-card p-5" key={labelKey}>
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder={t("categories.searchPlaceholder")} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("categories.category")}</th>
                <th className="px-5 py-3">{t("categories.parent")}</th>
                <th className="px-5 py-3">{t("common.products")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.actions")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <FolderTree size={18} />
                      </div>
                      <p className="font-black">{t(category.nameKey)}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(category.parentKey)}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{category.products}</td>
                  <td className="px-5 py-4">
                    <span className={category.status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                      {t(`status.${category.status}`)}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link to={`/admin/categories/${category.id}`} className="ms-btn-soft h-9 w-9 px-0">
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
    </div>
  );
}