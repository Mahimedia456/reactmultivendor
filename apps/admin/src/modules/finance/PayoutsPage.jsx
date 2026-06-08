import { Link } from "react-router-dom";
import { Check, Eye, Plus, WalletCards, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const payouts = [
  ["PO-1001", "Aamir Fragrances", "Rs 30,000", "Bank Alfalah", "finance.today", "pending"],
  ["PO-1002", "Urban Deals", "Rs 85,000", "Meezan Bank", "finance.yesterday", "approved"],
  ["PO-1003", "Tech Point", "Rs 22,000", "HBL", "finance.twoDaysAgo", "paid"],
];

export default function PayoutsPage() {
  const { t } = useTranslation();

  const stats = [
    ["finance.pending", "18"],
    ["finance.approved", "42"],
    ["finance.paid", "286"],
    ["finance.rejected", "6"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("finance.payoutsBreadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("finance.payoutRequests")}</h1>
        </div>

        <Link to="/admin/payouts/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("finance.createPayout")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <WalletCards size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[950px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("finance.payout")}</th>
              <th className="px-5 py-3">{t("finance.vendor")}</th>
              <th className="px-5 py-3">{t("finance.amount")}</th>
              <th className="px-5 py-3">{t("finance.bank")}</th>
              <th className="px-5 py-3">{t("finance.requested")}</th>
              <th className="px-5 py-3">{t("common.status")}</th>
              <th className="px-5 py-3 text-right">{t("common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {payouts.map(([id, vendor, amount, bank, dateKey, status]) => (
              <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4 font-black">{id}</td>
                <td className="px-5 py-4 text-sm font-semibold">{vendor}</td>
                <td className="px-5 py-4 text-sm font-black">{amount}</td>
                <td className="px-5 py-4 text-sm font-semibold">{bank}</td>
                <td className="px-5 py-4 text-sm font-semibold">{t(dateKey)}</td>
                <td className="px-5 py-4">
                  <span
                    className={
                      status === "paid"
                        ? "ms-badge-success"
                        : status === "approved"
                        ? "ms-badge"
                        : status === "pending"
                        ? "ms-badge-warning"
                        : "ms-badge-danger"
                    }
                  >
                    {t(`finance.${status}`)}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/payouts/${id}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                      <Check size={15} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                      <X size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}