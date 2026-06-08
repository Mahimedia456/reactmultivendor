import { Link } from "react-router-dom";
import {
  Edit,
  Eye,
  Plus,
  Search,
  Store,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const stores = [
  {
    id: 1,
    name: "Aamir Fragrances",
    vendor: "Aamir",
    products: 86,
    rating: "4.8",
    orders: 420,
    status: "open",
  },
  {
    id: 2,
    name: "Urban Deals",
    vendor: "Usman",
    products: 134,
    rating: "4.5",
    orders: 980,
    status: "open",
  },
  {
    id: 3,
    name: "Tech Point",
    vendor: "Ali Khan",
    products: 48,
    rating: "4.1",
    orders: 112,
    status: "closed",
  },
];

export default function StoresPage() {
  const { t } = useTranslation();

  const stats = [
    ["storesPage.totalStores", "126"],
    ["storesPage.openStores", "118"],
    ["storesPage.closedStores", "8"],
    ["storesPage.avgRating", "4.6"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("storesPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("storesPage.title")}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {t("storesPage.description")}
          </p>
        </div>

        <Link to="/admin/stores/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("storesPage.createStore")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("storesPage.searchPlaceholder")}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("storesPage.store")}</th>
                <th className="px-5 py-3">{t("storesPage.vendor")}</th>
                <th className="px-5 py-3">{t("storesPage.products")}</th>
                <th className="px-5 py-3">{t("storesPage.orders")}</th>
                <th className="px-5 py-3">{t("storesPage.rating")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.actions")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Store size={18} />
                      </div>
                      <div>
                        <p className="font-black">{store.name}</p>
                        <p className="text-xs font-semibold text-slate-500">
                          /store/{store.name.toLowerCase().replaceAll(" ", "-")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">{store.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{store.products}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{store.orders}</td>
                  <td className="px-5 py-4 text-sm font-black">⭐ {store.rating}</td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        store.status === "open"
                          ? "ms-badge-success"
                          : "ms-badge-warning"
                      }
                    >
                      {t(`storesPage.${store.status}`)}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/stores/${store.id}`}
                        className="ms-btn-soft h-9 w-9 px-0"
                        title={t("storesPage.viewStore")}
                      >
                        <Eye size={15} />
                      </Link>

                      <Link
                        to={`/admin/stores/${store.id}/edit`}
                        className="ms-btn-soft h-9 w-9 px-0"
                        title={t("storesPage.editStore")}
                      >
                        <Edit size={15} />
                      </Link>

                      <button className="ms-btn-soft h-9 w-9 px-0">
                        {store.status === "open" ? (
                          <ToggleRight size={16} />
                        ) : (
                          <ToggleLeft size={16} />
                        )}
                      </button>

                      <Link to={`/admin/vendors/${store.id}`} className="ms-btn-soft">
                        {t("storesPage.vendor")}
                      </Link>
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