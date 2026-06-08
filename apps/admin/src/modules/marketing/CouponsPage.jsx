import { Link } from "react-router-dom";
import { Eye, Plus, Search, Tags } from "lucide-react";
import { useTranslation } from "react-i18next";

const coupons = [
  ["SAVE10", "Aamir Fragrances", "10%", "31 Dec 2026", "1000", "286", "active"],
  ["PERFUME20", "Perfumes", "20%", "15 Aug 2026", "500", "124", "active"],
  ["TECH500", "Electronics", "Rs 500", "30 Sep 2026", "300", "88", "inactive"],
];

export default function CouponsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("marketingPage.couponsBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("marketingPage.coupons")}</h1>
        </div>

        <Link to="/admin/coupons/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("marketingPage.createCoupon")}
        </Link>
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("marketingPage.backToCoupons")}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("marketingPage.couponCode")}</th>
                <th className="px-5 py-3">{t("marketingPage.couponFor")}</th>
                <th className="px-5 py-3">{t("marketingPage.discountPercent")}</th>
                <th className="px-5 py-3">{t("marketingPage.validTill")}</th>
                <th className="px-5 py-3">{t("marketingPage.quantity")}</th>
                <th className="px-5 py-3">{t("marketingPage.used")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {coupons.map(([code, couponFor, discount, validity, quantity, used, status]) => (
                <tr key={code} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Tags size={18} className="text-brand-700" />
                      <p className="font-black">{code}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{couponFor}</td>
                  <td className="px-5 py-4 text-sm font-black">{discount}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{validity}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{quantity}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{used}</td>
                  <td className="px-5 py-4">
                    <span className={status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                      {t(`status.${status}`)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/coupons/${code}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
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