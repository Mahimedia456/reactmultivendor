import { Edit, Plus, Search, Trash2, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const shippingRules = [
  {
    id: 1,
    nameKey: "vendorPanel.shipping.karachiSameDay",
    zoneKey: "vendorPanel.shipping.karachi",
    methodKey: "vendorPanel.shipping.sameDayDelivery",
    fee: "$3.00",
    minOrder: "$20",
    status: "active",
  },
  {
    id: 2,
    nameKey: "vendorPanel.shipping.pakistanStandard",
    zoneKey: "vendorPanel.shipping.nationwide",
    methodKey: "vendorPanel.shipping.standardCourier",
    fee: "$5.00",
    minOrder: "$30",
    status: "active",
  },
  {
    id: 3,
    nameKey: "vendorPanel.coupons.freeShipping",
    zoneKey: "vendorPanel.shipping.nationwide",
    methodKey: "vendorPanel.shipping.freeDelivery",
    fee: "$0.00",
    minOrder: "$100",
    status: "draft",
  },
];

export default function VendorShippingPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.shipping.title")}
        description={t("vendorPanel.shipping.description")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.shipping.addShippingRule")}
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title={t("vendorPanel.shipping.shippingRules")} value="12" icon={Truck} />
        <VendorStatCard title={t("vendorPanel.shipping.activeZones")} value="5" icon={Truck} tone="green" />
        <VendorStatCard title={t("vendorPanel.shipping.courierMethods")} value="4" icon={Truck} tone="blue" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.shipping.shippingRules")}
        description={t("vendorPanel.shipping.rulesDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder={t("vendorPanel.shipping.searchRules")}
            />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.shipping.rule")}</th>
              <th className="px-5 py-4">{t("vendorPanel.shipping.zone")}</th>
              <th className="px-5 py-4">{t("vendorPanel.shipping.method")}</th>
              <th className="px-5 py-4">{t("vendorPanel.shipping.fee")}</th>
              <th className="px-5 py-4">{t("vendorPanel.shipping.minOrder")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {shippingRules.map((rule) => (
              <tr key={rule.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {t(rule.nameKey)}
                </td>
                <td className="px-5 py-4 font-bold">{t(rule.zoneKey)}</td>
                <td className="px-5 py-4 text-sm text-slate-500">
                  {t(rule.methodKey)}
                </td>
                <td className="px-5 py-4 font-black">{rule.fee}</td>
                <td className="px-5 py-4 font-bold">{rule.minOrder}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={rule.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </button>
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

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">
          {t("vendorPanel.shipping.addEditRule")}
        </h3>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <input className="ms-input" placeholder={t("vendorPanel.shipping.ruleName")} />
          <input className="ms-input" placeholder={t("vendorPanel.shipping.shippingZone")} />

          <select className="ms-input">
            <option>{t("vendorPanel.shipping.standardCourier")}</option>
            <option>{t("vendorPanel.shipping.sameDayDelivery")}</option>
            <option>{t("vendorPanel.shipping.expressDelivery")}</option>
            <option>{t("vendorPanel.shipping.freeDelivery")}</option>
          </select>

          <input className="ms-input" placeholder={t("vendorPanel.shipping.shippingFee")} />
          <input className="ms-input" placeholder={t("vendorPanel.shipping.minimumOrderAmount")} />

          <select className="ms-input">
            <option>{t("vendorCommon.statuses.active")}</option>
            <option>{t("vendorCommon.statuses.draft")}</option>
          </select>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="ms-btn-primary">
            {t("vendorPanel.shipping.saveShippingRule")}
          </button>
        </div>
      </div>
    </div>
  );
}