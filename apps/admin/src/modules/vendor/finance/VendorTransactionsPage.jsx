import { ArrowDownCircle, ArrowUpCircle, CreditCard, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const movements = [
  {
    ref: "TXN-9001",
    typeKey: "vendorPanel.wallet.orderEarning",
    amount: "+$216",
    status: "paid",
    date: "2026-06-04",
  },
  {
    ref: "TXN-9002",
    typeKey: "vendorPanel.wallet.commissionDeduction",
    amount: "-$24",
    status: "completed",
    date: "2026-06-04",
  },
  {
    ref: "PAY-3001",
    typeKey: "vendorPanel.wallet.payoutRequest",
    amount: "-$500",
    status: "processing",
    date: "2026-06-03",
  },
];

export default function VendorTransactionsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.wallet.transactionsTitle")}
        description={t("vendorPanel.wallet.transactionsDescription")}
        action={
          <Link to="/vendor/payouts/create" className="ms-btn-primary">
            {t("vendorPanel.common.requestPayout")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.wallet.availableBalance")} value="$3,250" icon={WalletCards} tone="green" />
        <VendorStatCard title={t("vendorPanel.wallet.pendingClearance")} value="$1,120" icon={CreditCard} tone="orange" />
        <VendorStatCard title={t("vendorPanel.wallet.totalWithdrawn")} value="$9,800" icon={ArrowUpCircle} tone="blue" />
        <VendorStatCard title={t("vendorPanel.wallet.totalCredits")} value="$18,420" icon={ArrowDownCircle} />
      </div>

      <VendorTableCard
        title={t("vendorPanel.wallet.walletMovements")}
        description={t("vendorPanel.wallet.walletMovementsDescription")}
      >
        <table className="w-full min-w-[800px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.wallet.reference")}</th>
              <th className="px-5 py-4">{t("vendorPanel.wallet.type")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.amount")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.date")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {movements.map((item) => (
              <tr key={item.ref}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {item.ref}
                </td>
                <td className="px-5 py-4 font-bold">{t(item.typeKey)}</td>
                <td
                  className={`px-5 py-4 font-black ${
                    item.amount.startsWith("+")
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                >
                  {item.amount}
                </td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}