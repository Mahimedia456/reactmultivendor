import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreatePayoutPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/payouts" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("finance.backToPayouts")}
        </Link>
        <h1 className="text-2xl font-black">{t("finance.createPayout")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.vendor")}</label>
            <select className="ms-input">
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
              <option>Tech Point</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.amount")}</label>
            <input className="ms-input" placeholder="30000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.bankName")}</label>
            <input className="ms-input" placeholder="Bank Alfalah" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.accountTitle")}</label>
            <input className="ms-input" placeholder="Aamir Fragrances" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.accountIban")}</label>
            <input className="ms-input" placeholder="PK00..." />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("finance.referenceNumber")}</label>
            <input className="ms-input" placeholder="TRX-REF-001" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">{t("finance.notes")}</label>
            <textarea className="ms-input h-28 py-3" placeholder={t("finance.internalPayoutNotes")} />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("finance.createPayout")}
          </button>
        </div>
      </div>
    </div>
  );
}