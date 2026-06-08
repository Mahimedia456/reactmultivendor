import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, ShoppingCart, Tags, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CouponDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const stats = [
    ["marketingPage.code", id, Tags],
    ["marketingPage.orders", "286", ShoppingCart],
    ["marketingPage.revenue", "Rs 1.4M", WalletCards],
    ["marketingPage.discountGiven", "Rs 184k", Tags],
  ];

  const info = [
    ["marketingPage.type", t("marketingPage.percentage")],
    ["marketingPage.discount", "10%"],
    ["marketingPage.minimumOrder", "Rs 3,000"],
    ["marketingPage.maximumDiscount", "Rs 1,000"],
    ["marketingPage.usageLimit", "1000"],
    ["common.status", t("status.active")]
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <Link to="/admin/coupons" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} />
            {t("marketingPage.backToCoupons")}
          </Link>
          <h1 className="text-2xl font-black">{t("marketingPage.coupon")} {id}</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Edit size={17} />
          {t("marketingPage.editCoupon")}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value, Icon]) => (
          <div key={labelKey} className="ms-card p-5">
            <Icon size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">{t("marketingPage.couponInformation")}</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {info.map(([labelKey, value]) => (
            <div key={labelKey} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
              <p className="text-xs font-black uppercase text-slate-400">{t(labelKey)}</p>
              <p className="mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}