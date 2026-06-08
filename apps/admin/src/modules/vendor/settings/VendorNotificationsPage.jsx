import { Edit, Plus, Search, Tags, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const coupons = [
  { id: 1, code: "VENDOR10", typeKey: "vendorPanel.coupons.percentage", value: "10%", usage: "42 / 100", expiry: "2026-07-30", status: "active" },
  { id: 2, code: "FREESHIP", typeKey: "vendorPanel.coupons.shipping", valueKey: "vendorPanel.coupons.free", usage: "21 / 50", expiry: "2026-08-15", status: "active" },
  { id: 3, code: "SUMMER25", typeKey: "vendorPanel.coupons.fixed", value: "$25", usage: "0 / 200", expiry: "2026-06-30", status: "draft" },
];

export default function VendorCouponsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.coupons.title")}
        description={t("vendorPanel.coupons.description")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.coupons.addCoupon")}
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title={t("vendorPanel.coupons.totalCoupons")} value="18" icon={Tags} />
        <VendorStatCard title={t("vendorPanel.coupons.activeCoupons")} value="11" icon={Tags} tone="green" />
        <VendorStatCard title={t("vendorPanel.coupons.usedThisMonth")} value="320" icon={Tags} tone="blue" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.coupons.couponList")}
        description={t("vendorPanel.coupons.couponListDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder={t("vendorPanel.coupons.searchCoupons")} />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.coupons.code")}</th>
              <th className="px-5 py-4">{t("vendorPanel.coupons.type")}</th>
              <th className="px-5 py-4">{t("vendorPanel.coupons.value")}</th>
              <th className="px-5 py-4">{t("vendorPanel.coupons.usage")}</th>
              <th className="px-5 py-4">{t("vendorPanel.coupons.expiry")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{coupon.code}</td>
                <td className="px-5 py-4 font-bold">{t(coupon.typeKey)}</td>
                <td className="px-5 py-4 font-black">{coupon.valueKey ? t(coupon.valueKey) : coupon.value}</td>
                <td className="px-5 py-4 text-sm text-slate-500">{coupon.usage}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{coupon.expiry}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={coupon.status} /></td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0"><Edit size={16} /></button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">
          {t("vendorPanel.coupons.addEditCoupon")}
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <input className="ms-input" placeholder={t("vendorPanel.coupons.couponCode")} />
          <select className="ms-input">
            <option>{t("vendorPanel.coupons.percentage")}</option>
            <option>{t("vendorPanel.coupons.fixedAmount")}</option>
            <option>{t("vendorPanel.coupons.freeShipping")}</option>
          </select>
          <input className="ms-input" placeholder={t("vendorPanel.coupons.discountValue")} />
          <input className="ms-input" placeholder={t("vendorPanel.coupons.usageLimit")} />
          <input className="ms-input" type="date" />
          <select className="ms-input">
            <option>{t("vendorCommon.statuses.active")}</option>
            <option>{t("vendorCommon.statuses.draft")}</option>
          </select>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="ms-btn-primary">{t("vendorPanel.coupons.saveCoupon")}</button>
        </div>
      </div>
    </div>
  );
}