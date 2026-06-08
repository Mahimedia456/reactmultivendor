import { Download, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  ["Elyndor", "386", "Rs 1,740,000"],
  ["Vauren", "252", "Rs 630,000"],
  ["Night Rider", "198", "Rs 435,000"],
];

export default function ProductReportsPage() {
  const { t } = useTranslation();

  const stats = [
    ["reportsPage.products", "18,420"],
    ["reportsPage.bestSellers", "240"],
    ["reportsPage.outOfStock", "86"],
    ["reportsPage.revenue", "Rs 18.4M"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("reportsPage.productsBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("reportsPage.productReports")}
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
            <Package size={20} className="text-brand-700" />
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
              <th className="px-5 py-3">{t("reportsPage.product")}</th>
              <th className="px-5 py-3">{t("reportsPage.unitsSold")}</th>
              <th className="px-5 py-3">{t("reportsPage.revenue")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {products.map(([product, sold, revenue]) => (
              <tr key={product}>
                <td className="px-5 py-4 font-black">{product}</td>
                <td className="px-5 py-4">{sold}</td>
                <td className="px-5 py-4 font-bold">{revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}