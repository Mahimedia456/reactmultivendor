import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CreditCard, ReceiptText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TransactionDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const details = [
    ["transactionsPage.transactionId", id],
    ["transactionsPage.order", "MS-1001"],
    ["transactionsPage.customer", "Ahmed Raza"],
    ["transactionsPage.vendor", "Aamir Fragrances"],
    ["transactionsPage.method", t("transactionsPage.cod")],
    ["transactionsPage.amount", "Rs 6,700"],
    ["common.status", t("status.pending")],
    ["transactionsPage.date", t("transactionsPage.today1030")],
  ];

  const stats = [
    ["transactionsPage.amount", "Rs 6,700"],
    ["common.status", t("status.pending")],
    ["transactionsPage.method", t("transactionsPage.cod")],
  ];

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
          {t("transactionsPage.transaction")} {id}
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <CreditCard className="text-brand-700" size={22} />
            <p className="mt-4 text-sm font-bold text-slate-500">
              {t(labelKey)}
            </p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
          <ReceiptText size={19} />
          {t("transactionsPage.transactionInformation")}
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {details.map(([labelKey, value]) => (
            <div
              key={labelKey}
              className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
            >
              <p className="text-xs font-black uppercase text-slate-400">
                {t(labelKey)}
              </p>
              <p className="mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}