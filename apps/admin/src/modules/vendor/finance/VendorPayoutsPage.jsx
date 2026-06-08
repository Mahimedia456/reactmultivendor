import { Eye, Plus, Search, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const payouts = [
  { id: "3001", ref: "PAY-3001", amount: "$500", methodKey: "vendorPanel.payouts.bankTransfer", status: "processing", date: "2026-06-03" },
  { id: "3002", ref: "PAY-3002", amount: "$1,200", methodKey: null, method: "JazzCash", status: "completed", date: "2026-05-28" },
  { id: "3003", ref: "PAY-3003", amount: "$750", methodKey: "vendorPanel.payouts.bankTransfer", status: "rejected", date: "2026-05-20" },
];

export default function VendorPayoutsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.payouts.title")}
        description={t("vendorPanel.payouts.description")}
        action={
          <Link to="/vendor/payouts/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.common.requestPayout")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title={t("vendorPanel.payouts.requested")} value="$2,450" icon={WalletCards} />
        <VendorStatCard title={t("vendorPanel.payouts.paid")} value="$9,800" icon={WalletCards} tone="green" />
        <VendorStatCard title={t("vendorPanel.payouts.pending")} value="$500" icon={WalletCards} tone="orange" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.payouts.history")}
        description={t("vendorPanel.payouts.historyDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder={t("vendorPanel.payouts.searchPlaceholder")}
            />
          </div>
        }
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.payouts.payout")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.amount")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.method")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.action")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {payouts.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.ref}</td>
                <td className="px-5 py-4 font-black">{item.amount}</td>
                <td className="px-5 py-4">{item.methodKey ? t(item.methodKey) : item.method}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.date}</td>
                <td className="px-5 py-4 text-right">
                  <Link to={`/vendor/payouts/${item.id}`} className="ms-btn-soft h-9 w-9 px-0">
                    <Eye size={16} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}