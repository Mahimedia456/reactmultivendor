import { Link } from "react-router-dom";
import { Eye, Filter, Plus, Search, Store } from "lucide-react";
import { useTranslation } from "react-i18next";
import VendorStatusBadge from "./components/VendorStatusBadge";

const vendors = [
  {
    id: 1,
    store: "Aamir Fragrances",
    owner: "Aamir",
    email: "aamir@mahistore.com",
    products: 86,
    orders: 420,
    commission: "10%",
    wallet: "Rs 92,000",
    status: "active",
  },
  {
    id: 2,
    store: "Urban Deals",
    owner: "Usman",
    email: "vendor@urban.com",
    products: 134,
    orders: 980,
    commission: "12%",
    wallet: "Rs 154,800",
    status: "active",
  },
  {
    id: 3,
    store: "Tech Point",
    owner: "Ali Khan",
    email: "ali@techpoint.com",
    products: 48,
    orders: 112,
    commission: "8%",
    wallet: "Rs 31,500",
    status: "suspended",
  },
];

export default function VendorsPage() {
  const { t } = useTranslation();

  const stats = [
    ["vendorsPage.totalVendors", "126"],
    ["vendorsPage.activeVendors", "118"],
    ["vendorsPage.pendingRequests", "8"],
    ["vendorsPage.suspended", "3"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("vendorsPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("vendorsPage.title")}</h1>
        </div>

        <Link to="/admin/vendors/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("vendorsPage.addVendor")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
              {t(labelKey)}
            </p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("vendorsPage.searchPlaceholder")}
            />
          </div>

          <button className="ms-btn-soft gap-2">
            <Filter size={17} />
            {t("vendorsPage.filters")}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("vendorsPage.store")}</th>
                <th className="px-5 py-3">{t("vendorsPage.owner")}</th>
                <th className="px-5 py-3">{t("vendorsPage.products")}</th>
                <th className="px-5 py-3">{t("vendorsPage.orders")}</th>
                <th className="px-5 py-3">{t("vendorsPage.commission")}</th>
                <th className="px-5 py-3">{t("vendorsPage.wallet")}</th>
                <th className="px-5 py-3">{t("vendorsPage.status")}</th>
                <th className="px-5 py-3 text-right">{t("vendorsPage.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                        <Store size={18} />
                      </div>
                      <div>
                        <p className="font-black">{vendor.store}</p>
                        <p className="text-xs font-semibold text-slate-500">{vendor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.owner}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.products}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.orders}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.commission}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{vendor.wallet}</td>
                  <td className="px-5 py-4">
                    <VendorStatusBadge status={vendor.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/vendors/${vendor.id}`} className="ms-btn-soft gap-2">
                      <Eye size={16} />
                      {t("vendorsPage.view")}
                    </Link>
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