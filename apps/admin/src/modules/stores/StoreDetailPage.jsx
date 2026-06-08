import {
  ArrowLeft,
  CreditCard,
  Edit,
  Package,
  ShoppingCart,
  Star,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StoreDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const store = {
    id,
    name: "Aamir Fragrances",
    slug: "aamir-fragrances",
    vendor: "Aamir",
    email: "aamir@mahistore.com",
    phone: "+92 308 2544148",
    status: "open",
    commission: "10%",
    rating: "4.8",
    wallet: "Rs 92,000",
    sales: "Rs 640,000",
    products: 86,
    orders: 420,
    customers: 318,
  };

  const tabs = [
    "storesPage.overview",
    "storesPage.products",
    "storesPage.ordersTab",
    "storesPage.reviews",
    "storesPage.payouts",
    "storesPage.settings",
  ];

  const stats = [
    ["storesPage.totalSales", store.sales, CreditCard],
    ["storesPage.orders", store.orders, ShoppingCart],
    ["storesPage.products", store.products, Package],
    ["customers.title", store.customers, Users],
  ];

  const info = [
    ["storesPage.storeName", store.name],
    ["storesPage.vendorOwner", store.vendor],
    ["common.email", store.email],
    ["common.phone", store.phone],
    ["storesPage.storeSlug", store.slug],
    ["storesPage.commission", store.commission],
  ];

  const activities = [
    "storesPage.activityNewOrder",
    "storesPage.activityStockUpdated",
    "storesPage.activityPayoutSubmitted",
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link
            to="/admin/stores"
            className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} />
            {t("storesPage.backToStores")}
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Store size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">{store.name}</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                /store/{store.slug}
              </p>
            </div>
          </div>
        </div>

        <Link to={`/admin/stores/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} />
          {t("storesPage.editStore")}
        </Link>
      </div>

      <div className="rounded-card border border-panel-line bg-white p-5 dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black text-slate-500">
              {t("storesPage.storeStatusLabel")}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="ms-badge-success">
                {t(`storesPage.${store.status}`)}
              </span>
              <span className="ms-badge">
                {t("storesPage.commission")} {store.commission}
              </span>
              <span className="ms-badge">
                {t("storesPage.rating")} {store.rating}
              </span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            <button className="ms-btn-soft">{t("storesPage.suspend")}</button>
            <button className="ms-btn-soft">
              {t("storesPage.viewPublicStore")}
            </button>
            <button className="ms-btn-soft">{t("storesPage.documents")}</button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value, Icon]) => (
          <div key={labelKey} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Icon size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">
              {t(labelKey)}
            </p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tabKey, index) => (
            <button
              key={tabKey}
              className={index === 0 ? "ms-btn-primary h-10" : "ms-btn-soft"}
            >
              {t(tabKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">
            {t("storesPage.storeInformation")}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {info.map(([labelKey, value]) => (
              <div
                key={labelKey}
                className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
              >
                <p className="text-xs font-black uppercase text-slate-400">
                  {t(labelKey)}
                </p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("storesPage.walletSummary")}
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                <WalletCards size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">
                  {t("storesPage.availableBalance")}
                </p>
                <h4 className="text-2xl font-black">{store.wallet}</h4>
              </div>
            </div>

            <button className="ms-btn-soft mt-5 w-full justify-between">
              <span>{t("storesPage.viewPayoutHistory")}</span>
              <span>{t("storesPage.records12")}</span>
            </button>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("storesPage.storeRating")}
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="text-2xl font-black">{store.rating}/5</h4>
                <p className="text-sm font-bold text-slate-500">
                  {t("storesPage.ratingText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">
          {t("storesPage.recentStoreActivity")}
        </h3>

        <div className="mt-5 space-y-3">
          {activities.map((activityKey) => (
            <div
              key={activityKey}
              className="rounded-lg border border-panel-line p-4 text-sm font-semibold dark:border-panel-darkLine"
            >
              {t(activityKey)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}