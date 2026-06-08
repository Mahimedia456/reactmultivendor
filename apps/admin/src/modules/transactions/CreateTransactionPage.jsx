import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateTransactionPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/transactions"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("transactionsPage.backToTransactions")}
        </Link>
        <h1 className="text-2xl font-black">
          {t("transactionsPage.createManualTransaction")}
        </h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.transactionType")}
            </label>
            <select className="ms-input">
              <option>{t("transactionsPage.orderPayment")}</option>
              <option>{t("transactionsPage.manualCredit")}</option>
              <option>{t("transactionsPage.manualDebit")}</option>
              <option>{t("transactionsPage.refund")}</option>
              <option>{t("transactionsPage.payout")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.relatedOrder")}
            </label>
            <select className="ms-input">
              <option>MS-1001</option>
              <option>MS-1002</option>
              <option>{t("transactionsPage.none")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.vendor")}
            </label>
            <select className="ms-input">
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
              <option>Tech Point</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.paymentMethod")}
            </label>
            <select className="ms-input">
              <option>{t("transactionsPage.cod")}</option>
              <option>{t("transactionsPage.card")}</option>
              <option>{t("transactionsPage.bankTransfer")}</option>
              <option>{t("transactionsPage.wallet")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.amount")}
            </label>
            <input className="ms-input" placeholder="6700" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("common.status")}
            </label>
            <select className="ms-input">
              <option>{t("status.paid")}</option>
              <option>{t("status.pending")}</option>
              <option>{t("status.failed")}</option>
              <option>{t("status.refunded")}</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">
              {t("transactionsPage.notes")}
            </label>
            <textarea
              className="ms-input h-28 py-3"
              placeholder={t("transactionsPage.internalNotes")}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("transactionsPage.saveTransaction")}
          </button>
        </div>
      </div>
    </div>
  );
}