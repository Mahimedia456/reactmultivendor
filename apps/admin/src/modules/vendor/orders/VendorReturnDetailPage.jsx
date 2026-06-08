import { ArrowLeft, CheckCircle2, Save, XCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

export default function VendorReturnDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.returns.detailTitle", { id })}
        description={t("vendorPanel.returns.detailDescription")}
        action={
          <Link to="/vendor/returns" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.common.back")}
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.returns.returnInformation")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">
                  {t("vendorPanel.returns.order")}
                </p>
                <p className="mt-1 font-black">#ORD-10021</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">
                  {t("vendorPanel.returns.customer")}
                </p>
                <p className="mt-1 font-black">Ali Khan</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">
                  {t("vendorPanel.returns.product")}
                </p>
                <p className="mt-1 font-black">Wireless Gaming Mouse</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">
                  {t("vendorPanel.returns.requestedQty")}
                </p>
                <p className="mt-1 font-black">1</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-black">
                {t("vendorPanel.returns.customerReason")}
              </p>
              <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {t("vendorPanel.returns.customerReasonText")}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.returns.vendorDecision")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <button className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-left text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <CheckCircle2 size={24} />
                <p className="mt-3 font-black">
                  {t("vendorPanel.returns.approveReturn")}
                </p>
                <p className="mt-1 text-sm">
                  {t("vendorPanel.returns.approveReturnText")}
                </p>
              </button>

              <button className="rounded-xl border border-red-200 bg-red-50 p-5 text-left text-red-700 dark:border-red-500/20 dark:bg-red-500/10">
                <XCircle size={24} />
                <p className="mt-3 font-black">
                  {t("vendorPanel.returns.rejectReturn")}
                </p>
                <p className="mt-1 text-sm">
                  {t("vendorPanel.returns.rejectReturnText")}
                </p>
              </button>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.returns.vendorNote")}
              </label>
              <textarea
                className="ms-input min-h-32"
                placeholder={t("vendorPanel.returns.vendorNotePlaceholder")}
              />
            </div>

            <div className="mt-5 flex justify-end">
              <button className="ms-btn-primary inline-flex items-center gap-2">
                <Save size={17} />
                {t("vendorPanel.returns.saveDecision")}
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.returns.returnStatus")}
          </h3>

          <div className="mt-4">
            <VendorStatusBadge status="pending" />
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">{t("vendorPanel.returns.returnId")}</span>
              <strong>#RET-{id}</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{t("vendorPanel.returns.refundAmount")}</span>
              <strong>$49</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">{t("vendorPanel.common.date")}</span>
              <strong>2026-06-04</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}