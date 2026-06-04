import {
  ArrowLeft,
  CreditCard,
  Edit,
  Package,
  ShoppingCart,
  Star,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function StoreDetailPage() {
  const { id } = useParams();

  const store = {
    id,
    name: "Aamir Fragrances",
    slug: "aamir-fragrances",
    vendor: "Aamir",
    email: "aamir@mahistore.com",
    phone: "+92 308 2544148",
    status: "Open",
    commission: "10%",
    rating: "4.8",
    wallet: "Rs 92,000",
    sales: "Rs 640,000",
    products: 86,
    orders: 420,
    customers: 318,
  };

  const tabs = ["Overview", "Products", "Orders", "Reviews", "Payouts", "Settings"];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link
            to="/admin/stores"
            className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} />
            Back to stores
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Store size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-black">{store.name}</h1>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                /store/{store.slug}
              </p>
            </div>
          </div>
        </div>

        <Link to={`/admin/stores/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} />
          Edit Store
        </Link>
      </div>

      <div className="rounded-card border border-panel-line bg-white p-5 dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black text-slate-500">Store Status</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="ms-badge-success">{store.status}</span>
              <span className="ms-badge">Commission {store.commission}</span>
              <span className="ms-badge">Rating {store.rating}</span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            <button className="ms-btn-soft">Suspend</button>
            <button className="ms-btn-soft">View Public Store</button>
            <button className="ms-btn-soft">Documents</button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Sales", store.sales, CreditCard],
          ["Orders", store.orders, ShoppingCart],
          ["Products", store.products, Package],
          ["Customers", store.customers, Users],
        ].map(([label, value, Icon]) => (
          <div key={label} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <Icon size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={index === 0 ? "ms-btn-primary h-10" : "ms-btn-soft"}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <div className="ms-card p-5">
          <h3 className="text-lg font-black">Store Information</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Store Name", store.name],
              ["Vendor Owner", store.vendor],
              ["Email", store.email],
              ["Phone", store.phone],
              ["Store Slug", store.slug],
              ["Commission", store.commission],
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

        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Wallet Summary</h3>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                <WalletCards size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">
                  Available Balance
                </p>
                <h4 className="text-2xl font-black">{store.wallet}</h4>
              </div>
            </div>

            <button className="ms-btn-soft mt-5 w-full justify-between">
              <span>View Payout History</span>
              <span>12 records</span>
            </button>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Store Rating</h3>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <h4 className="text-2xl font-black">{store.rating}/5</h4>
                <p className="text-sm font-bold text-slate-500">
                  Based on product and store reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Recent Store Activity</h3>

        <div className="mt-5 space-y-3">
          {[
            "New order received from customer Ahmed Raza",
            "Vendor updated Elyndor Perfume stock",
            "Payout request submitted for Rs 30,000",
          ].map((activity) => (
            <div
              key={activity}
              className="rounded-lg border border-panel-line p-4 text-sm font-semibold dark:border-panel-darkLine"
            >
              {activity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}