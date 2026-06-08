import { Edit, ReceiptText, RotateCcw, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

const vendors = [
  ["Aamir Fragrances", "Aamir", "10%", "420", "Rs 640,000", "Rs 64,000"],
  ["Urban Deals", "Usman", "12%", "980", "Rs 1,420,000", "Rs 170,400"],
  ["Tech Point", "Ali Khan", "8%", "112", "Rs 310,000", "Rs 24,800"],
];

export default function CommissionsPage() {
  const { t } = useTranslation();

  const stats = [
    ["finance.globalCommission", "10%"],
    ["finance.collected", "Rs 1.2M"],
    ["finance.pending", "Rs 186k"],
    ["finance.vendorOverrides", "12"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">{t("finance.commissionsBreadcrumb")}</p>
        <h1 className="mt-1 text-2xl font-black">{t("finance.commissionsTitle")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("finance.commissionsDescription")}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <ReceiptText size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">{t("finance.globalCommissionSettings")}</h3>

        <div className="mt-5 grid gap-5 lg:grid-cols-4">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.defaultRate")}</label>
            <input className="ms-input" defaultValue="10%" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.commissionType")}</label>
            <select className="ms-input">
              <option>{t("finance.percentage")}</option>
              <option>{t("finance.fixed")}</option>
              <option>{t("finance.percentageFixed")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.fixedFee")}</label>
            <input className="ms-input" defaultValue="0" />
          </div>

          <div className="flex items-end">
            <button className="ms-btn-primary w-full gap-2">
              <Save size={17} />
              {t("common.save")}
            </button>
          </div>
        </div>
      </div>

      <div className="ms-card overflow-hidden">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <h3 className="text-lg font-black">{t("finance.vendorCommissionOverrides")}</h3>
        </div>

        <table className="w-full min-w-[950px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("finance.store")}</th>
              <th className="px-5 py-3">{t("finance.owner")}</th>
              <th className="px-5 py-3">{t("finance.rate")}</th>
              <th className="px-5 py-3">{t("finance.orders")}</th>
              <th className="px-5 py-3">{t("finance.revenue")}</th>
              <th className="px-5 py-3">{t("finance.commission")}</th>
              <th className="px-5 py-3 text-right">{t("common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {vendors.map(([store, owner, rate, orders, revenue, commission]) => (
              <tr key={store} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{store}</td>
                <td className="px-5 py-4 text-sm font-semibold">{owner}</td>
                <td className="px-5 py-4"><span className="ms-badge">{rate}</span></td>
                <td className="px-5 py-4 text-sm font-semibold">{orders}</td>
                <td className="px-5 py-4 text-sm font-black">{revenue}</td>
                <td className="px-5 py-4 text-sm font-black">{commission}</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0"><Edit size={15} /></button>
                    <button className="ms-btn-soft h-9 w-9 px-0"><RotateCcw size={15} /></button>
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