import {
  ArrowLeft,
  Building2,
  CreditCard,
  Edit,
  FileText,
  Package,
  ShoppingCart,
  Store,
  WalletCards,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VendorStatusBadge from "./components/VendorStatusBadge";

export default function VendorDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const vendor = {
    id,
    store: "Aamir Fragrances",
    owner: "Aamir",
    email: "aamir@mahistore.com",
    phone: "+92 308 2544148",
    status: "active",
    commission: "10%",
    wallet: "Rs 92,000",
    totalSales: "Rs 640,000",
    products: 86,
    orders: 420,
  };

  const stats = [
    ["vendorsPage.totalSales", vendor.totalSales, CreditCard],
    ["vendorsPage.orders", vendor.orders, ShoppingCart],
    ["vendorsPage.products", vendor.products, Package],
    ["vendorsPage.wallet", vendor.wallet, WalletCards],
  ];

  const info = [
    ["vendorsPage.storeName", vendor.store],
    ["vendorsPage.owner", vendor.owner],
    ["vendorsPage.email", vendor.email],
    ["vendorsPage.phone", vendor.phone],
    ["vendorsPage.commission", vendor.commission],
    ["vendorsPage.status", t(`vendorsPage.${vendor.status}`)],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link
            to="/admin/vendors"
            className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} />
            {t("vendorsPage.backToVendors")}
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Store size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">{vendor.store}</h1>
              <p className="mt-1 text-sm font-bold text-slate-500">
                {vendor.email}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <VendorStatusBadge status={vendor.status} />
          <Link to={`/admin/vendors/${id}/edit`} className="ms-btn-primary gap-2">
            <Edit size={17} />
            {t("vendorsPage.editVendor")}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value, Icon]) => (
          <div key={labelKey} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Icon size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">{t("vendorsPage.vendorInformation")}</h3>

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

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("vendorsPage.adminControls")}</h3>

            <div className="mt-5 space-y-3">
              <Link to={`/admin/vendors/${id}/edit`} className="ms-btn-soft w-full justify-between">
                <span>{t("vendorsPage.editVendor")}</span>
                <Edit size={16} />
              </Link>

              <Link to={`/admin/vendors/${id}/documents`} className="ms-btn-soft w-full justify-between">
                <span>{t("vendorsPage.vendorDocuments")}</span>
                <FileText size={16} />
              </Link>

              <Link to={`/admin/vendors/${id}/wallet`} className="ms-btn-soft w-full justify-between">
                <span>{t("vendorsPage.vendorWallet")}</span>
                <span>{vendor.wallet}</span>
              </Link>

              <button className="ms-btn-soft w-full justify-between">
                <span>{t("vendorsPage.changeCommission")}</span>
                <span>{vendor.commission}</span>
              </button>

              <button className="ms-btn-soft w-full justify-between">
                <span>{t("vendorsPage.viewStore")}</span>
                <Building2 size={16} />
              </button>

              <button className="ms-btn-soft w-full justify-between text-rose-700">
                <span>{t("vendorsPage.suspendVendor")}</span>
                <span>{t("vendorsPage.risk")}</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}