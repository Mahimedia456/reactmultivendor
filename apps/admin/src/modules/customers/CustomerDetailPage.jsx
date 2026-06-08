import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, ShoppingCart, Star, UserRound, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CustomerDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const customer = {
    id,
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    phone: "+92 300 0000000",
    orders: 12,
    spent: "Rs 84,500",
    status: "active",
  };

  const stats = [
    ["customers.totalOrders", customer.orders, ShoppingCart],
    ["customers.totalSpent", customer.spent, WalletCards],
    ["customers.reviews", "6", Star],
    ["common.status", t(`status.${customer.status}`), UserRound],
  ];

  const info = [
    ["common.name", customer.name],
    ["common.email", customer.email],
    ["common.phone", customer.phone],
    ["common.status", t(`status.${customer.status}`)],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link to="/admin/customers" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} />
            {t("customers.backToCustomers")}
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <UserRound size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">{customer.name}</h1>
              <p className="mt-1 text-sm font-bold text-slate-500">{customer.email}</p>
            </div>
          </div>
        </div>

        <Link to={`/admin/customers/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} />
          {t("customers.editCustomer")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value, Icon]) => (
          <div key={labelKey} className="ms-card p-5">
            <Icon size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">{t("customers.customerInformation")}</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {info.map(([labelKey, value]) => (
              <div key={labelKey} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
                <p className="text-xs font-black uppercase text-slate-400">{t(labelKey)}</p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="ms-card p-5">
          <h3 className="text-lg font-black">{t("customers.defaultAddress")}</h3>
          <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            House 24, Street 8, DHA Phase 6, Karachi, Pakistan
          </p>
        </aside>
      </div>
    </div>
  );
}