import { Link } from "react-router-dom";
import { CreditCard, Eye, Plus, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const transactions = [
  {
    id: "TXN-1001",
    order: "MS-1001",
    customer: "Ahmed Raza",
    vendor: "Aamir Fragrances",
    methodKey: "transactionsPage.cod",
    amount: "Rs 6,700",
    status: "pending",
    dateKey: "transactionsPage.today",
  },
  {
    id: "TXN-1002",
    order: "MS-1002",
    customer: "Sara Khan",
    vendor: "Urban Deals",
    methodKey: "transactionsPage.card",
    amount: "Rs 8,200",
    status: "paid",
    dateKey: "transactionsPage.yesterday",
  },
  {
    id: "TXN-1003",
    order: "MS-1003",
    customer: "Hamza Ali",
    vendor: "Tech Point",
    methodKey: "transactionsPage.bankTransfer",
    amount: "Rs 18,900",
    status: "failed",
    dateKey: "transactionsPage.twoDaysAgo",
  },
];

export default function TransactionsPage() {
  const { t } = useTranslation();

  const stats = [
    ["transactionsPage.totalCollected", "Rs 8.4M"],
    ["transactionsPage.codPending", "Rs 420k"],
    ["transactionsPage.paidOnline", "Rs 3.2M"],
    ["status.failed", "86"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("transactionsPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("transactionsPage.title")}
          </h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {t("transactionsPage.description")}
          </p>
        </div>

        <Link to="/admin/transactions/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("transactionsPage.createTransaction")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("transactionsPage.searchPlaceholder")}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("transactionsPage.transaction")}</th>
                <th className="px-5 py-3">{t("transactionsPage.order")}</th>
                <th className="px-5 py-3">{t("transactionsPage.customer")}</th>
                <th className="px-5 py-3">{t("transactionsPage.vendor")}</th>
                <th className="px-5 py-3">{t("transactionsPage.method")}</th>
                <th className="px-5 py-3">{t("transactionsPage.amount")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3">{t("transactionsPage.date")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {transactions.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <CreditCard size={18} />
                      </div>
                      <p className="font-black">{item.id}</p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">{item.order}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.customer}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(item.methodKey)}</td>
                  <td className="px-5 py-4 text-sm font-black">{item.amount}</td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        item.status === "paid"
                          ? "ms-badge-success"
                          : item.status === "pending"
                          ? "ms-badge-warning"
                          : "ms-badge-danger"
                      }
                    >
                      {t(`status.${item.status}`)}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {t(item.dateKey)}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/admin/transactions/${item.id}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Eye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}