import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, ShoppingCart, Star, UserRound, WalletCards } from "lucide-react";

export default function CustomerDetailPage() {
  const { id } = useParams();

  const customer = {
    id,
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    phone: "+92 300 0000000",
    orders: 12,
    spent: "Rs 84,500",
    status: "Active",
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link
            to="/admin/customers"
            className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} />
            Back to customers
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <UserRound size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">{customer.name}</h1>
              <p className="mt-1 text-sm font-bold text-slate-500">
                {customer.email}
              </p>
            </div>
          </div>
        </div>

        <Link to={`/admin/customers/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} />
          Edit Customer
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Orders", customer.orders, ShoppingCart],
          ["Total Spent", customer.spent, WalletCards],
          ["Reviews", "6", Star],
          ["Status", customer.status, UserRound],
        ].map(([label, value, Icon]) => (
          <div key={label} className="ms-card p-5">
            <Icon size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">Customer Information</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Name", customer.name],
              ["Email", customer.email],
              ["Phone", customer.phone],
              ["Status", customer.status],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
              >
                <p className="text-xs font-black uppercase text-slate-400">
                  {label}
                </p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="ms-card p-5">
          <h3 className="text-lg font-black">Default Address</h3>
          <p className="mt-4 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
            House 24, Street 8, DHA Phase 6, Karachi, Pakistan
          </p>
        </aside>
      </div>
    </div>
  );
}