import { Download, Store, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";

const vendors = [
  ["Aamir Fragrances", "420", "Rs 640,000", "Rs 64,000"],
  ["Urban Deals", "980", "Rs 1,420,000", "Rs 170,400"],
  ["Tech Point", "112", "Rs 310,000", "Rs 24,800"],
];

export default function VendorReportsPage() {
  const { t } = useTranslation();

  const stats = [
    ["reportsPage.activeVendors", "248"],
    ["reportsPage.revenue", "Rs 12.4M"],
    ["reportsPage.commission", "Rs 1.8M"],
    ["reportsPage.payouts", "Rs 8.2M"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("reportsPage.vendorsBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("reportsPage.vendorReports")}
          </h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Download size={17} />
          {t("reportsPage.export")}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <Store size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">
              {t(labelKey)}
            </p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("reportsPage.vendor")}</th>
              <th className="px-5 py-3">{t("reportsPage.orders")}</th>
              <th className="px-5 py-3">{t("reportsPage.revenue")}</th>
              <th className="px-5 py-3">{t("reportsPage.commission")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {vendors.map(([vendor, orders, revenue, commission]) => (
              <tr key={vendor}>
                <td className="px-5 py-4 font-black">{vendor}</td>
                <td className="px-5 py-4">{orders}</td>
                <td className="px-5 py-4 font-bold">{revenue}</td>
                <td className="px-5 py-4 font-bold">{commission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">
          {t("reportsPage.vendorEarningsDistribution")}
        </h3>
        <div className="mt-5 flex h-72 items-center justify-center rounded-card bg-slate-50 dark:bg-white/5">
          <WalletCards size={60} className="text-brand-500" />
        </div>
      </div>
    </div>
  );
}