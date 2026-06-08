import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, CreditCard, Upload, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PayoutDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const details = [
    ["finance.payoutId", id],
    ["finance.vendor", "Aamir Fragrances"],
    ["finance.amount", "Rs 30,000"],
    ["finance.bank", "Bank Alfalah"],
    ["finance.accountTitle", "Aamir Fragrances"],
    ["common.status", t("finance.pending")],
  ];

  const stats = [
    ["finance.amount", "Rs 30,000"],
    ["common.status", t("finance.pending")],
    ["finance.vendorBalance", "Rs 92,000"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/payouts" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("finance.backToPayouts")}
        </Link>
        <h1 className="text-2xl font-black">
          {t("finance.payout")} {id}
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <CreditCard size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">{t("finance.payoutInformation")}</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {details.map(([labelKey, value]) => (
              <div key={labelKey} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
                <p className="text-xs font-black uppercase text-slate-400">{t(labelKey)}</p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("finance.adminActions")}</h3>

            <div className="mt-5 space-y-3">
              <button className="ms-btn-soft w-full justify-between text-emerald-700">
                <span>{t("finance.approveRequest")}</span>
                <Check size={16} />
              </button>

              <button className="ms-btn-soft w-full justify-between text-rose-700">
                <span>{t("finance.rejectRequest")}</span>
                <X size={16} />
              </button>

              <button className="ms-btn-primary w-full justify-between">
                <span>{t("finance.markAsPaid")}</span>
                <CreditCard size={16} />
              </button>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("finance.paymentProof")}</h3>

            <div className="mt-5 rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <Upload className="mx-auto text-slate-400" size={30} />
              <p className="mt-3 text-sm font-bold">{t("finance.uploadProof")}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}