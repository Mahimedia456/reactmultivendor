import { Link } from "react-router-dom";
import { Eye, Plus, Search, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";

const customers = [
  { id: 1, name: "Ahmed Raza", email: "ahmed@example.com", phone: "+92 300 0000000", orders: 12, spent: "Rs 84,500", status: "active" },
  { id: 2, name: "Sara Khan", email: "sara@example.com", phone: "+92 301 0000000", orders: 8, spent: "Rs 42,200", status: "active" },
  { id: 3, name: "Hamza Ali", email: "hamza@example.com", phone: "+92 302 0000000", orders: 2, spent: "Rs 9,800", status: "blocked" },
];

export default function CustomersPage() {
  const { t } = useTranslation();

  const stats = [
    ["customers.totalCustomers", "18,430"],
    ["status.active", "17,820"],
    ["status.blocked", "86"],
    ["customers.repeatBuyers", "6,420"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("customers.breadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("customers.title")}</h1>
        </div>

        <Link to="/admin/customers/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("customers.addCustomer")}
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
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder={t("customers.searchPlaceholder")} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("customers.customer")}</th>
                <th className="px-5 py-3">{t("common.phone")}</th>
                <th className="px-5 py-3">{t("customers.orders")}</th>
                <th className="px-5 py-3">{t("customers.totalSpent")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <UserRound size={18} />
                      </div>
                      <div>
                        <p className="font-black">{customer.name}</p>
                        <p className="text-xs font-semibold text-slate-500">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{customer.phone}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{customer.orders}</td>
                  <td className="px-5 py-4 text-sm font-black">{customer.spent}</td>
                  <td className="px-5 py-4">
                    <span className={customer.status === "active" ? "ms-badge-success" : "ms-badge-danger"}>
                      {t(`status.${customer.status}`)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/customers/${customer.id}`} className="ms-btn-soft h-9 w-9 px-0">
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