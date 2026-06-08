import { ArrowLeft, Download, WalletCards } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

export default function VendorPayoutDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const details = [
    [t("vendorPanel.payouts.payoutReference"), `PAY-${id}`],
    [t("vendorPanel.common.amount"), "$500"],
    [t("vendorPanel.common.method"), t("vendorPanel.payouts.bankTransfer")],
    [t("vendorPanel.payouts.accountHolder"), "Aamir Ali"],
    [t("vendorPanel.payouts.accountIban"), "PK00 XXXX XXXX XXXX"],
    [t("vendorPanel.payouts.requestDate"), "2026-06-03"],
  ];

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.payouts.detailTitle", { id })}
        description={t("vendorPanel.payouts.detailDescription")}
        action={
          <div className="flex gap-2">
            <Link to="/vendor/payouts" className="ms-btn-soft inline-flex items-center gap-2">
              <ArrowLeft size={17} />
              {t("vendorPanel.common.back")}
            </Link>

            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Download size={17} />
              {t("vendorPanel.common.downloadReceipt")}
            </button>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.payouts.payoutDetails")}
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {details.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">{label}</p>
                <p className="mt-1 font-black text-slate-950 dark:text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="text-sm font-black">
              {t("vendorPanel.payouts.vendorNote")}
            </p>
            <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/5">
              {t("vendorPanel.payouts.vendorNoteText")}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-sm font-black">
              {t("vendorPanel.payouts.adminNote")}
            </p>
            <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/5">
              {t("vendorPanel.payouts.adminNoteText")}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
            <WalletCards size={24} />
          </div>

          <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.payouts.currentStatus")}
          </h3>

          <div className="mt-4">
            <VendorStatusBadge status="processing" />
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">{t("vendorPanel.payouts.requested")}</span>
              <strong>$500</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{t("vendorPanel.payouts.fee")}</span>
              <strong>$0</strong>
            </div>

            <div className="flex justify-between border-t pt-3 text-lg font-black dark:border-panel-darkLine">
              <span>{t("vendorPanel.payouts.netPayout")}</span>
              <span>$500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}