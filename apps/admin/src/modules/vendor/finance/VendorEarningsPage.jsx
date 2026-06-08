import { BarChart3, CalendarDays, DollarSign, Download, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const earnings = [
  { order: "#ORD-10021", gross: "$240", commission: "$24", net: "$216", status: "paid", date: "2026-06-04" },
  { order: "#ORD-10022", gross: "$80", commission: "$8", net: "$72", status: "pending", date: "2026-06-04" },
  { order: "#ORD-10023", gross: "$120", commission: "$12", net: "$108", status: "processing", date: "2026-06-03" },
];

export default function VendorEarningsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.finance.earnings")}
        description={t("vendorPanel.finance.earningsDescription")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Download size={17} />
            {t("vendorPanel.common.export")}
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.finance.grossSales")} value="$18,420" icon={DollarSign} tone="green" />
        <VendorStatCard title={t("vendorPanel.finance.commission")} value="$1,842" icon={BarChart3} tone="red" />
        <VendorStatCard title={t("vendorPanel.finance.netEarnings")} value="$16,578" icon={WalletCards} />
        <VendorStatCard title={t("vendorPanel.finance.thisMonth")} value="$4,250" icon={CalendarDays} tone="blue" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.finance.earningBreakdown")}
        description={t("vendorPanel.finance.earningBreakdownDescription")}
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.customers.order")}</th>
              <th className="px-5 py-4">{t("vendorPanel.finance.grossAmount")}</th>
              <th className="px-5 py-4">{t("vendorPanel.finance.commission")}</th>
              <th className="px-5 py-4">{t("vendorPanel.finance.netEarning")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {earnings.map((item) => (
              <tr key={item.order}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.order}</td>
                <td className="px-5 py-4 font-bold">{item.gross}</td>
                <td className="px-5 py-4 font-bold text-red-600">{item.commission}</td>
                <td className="px-5 py-4 font-black text-emerald-600">{item.net}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}