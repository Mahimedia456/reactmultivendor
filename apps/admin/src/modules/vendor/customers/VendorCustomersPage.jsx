import {
  Eye,
  Mail,
  Phone,
  Search,
  ShoppingBag,
  Trash2,
  UserRound,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const customers = [
  {
    id: "501",
    name: "Ali Khan",
    email: "ali@example.com",
    phone: "+92 300 0000000",
    orders: 12,
    spent: "$1,240",
    lastOrder: "2026-06-04",
    status: "active",
  },
  {
    id: "502",
    name: "Sara Malik",
    email: "sara@example.com",
    phone: "+92 301 1111111",
    orders: 8,
    spent: "$820",
    lastOrder: "2026-06-02",
    status: "active",
  },
  {
    id: "503",
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    phone: "+92 302 2222222",
    orders: 3,
    spent: "$210",
    lastOrder: "2026-05-29",
    status: "pending",
  },
];

export default function VendorCustomersPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.customers.title")}
        description={t("vendorPanel.customers.description")}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.customers.totalCustomers")} value="1,248" icon={Users} />
        <VendorStatCard title={t("vendorPanel.customers.repeatBuyers")} value="428" icon={ShoppingBag} tone="green" />
        <VendorStatCard title={t("vendorPanel.customers.newThisMonth")} value="96" icon={UserRound} tone="blue" />
        <VendorStatCard title={t("vendorPanel.customers.avgSpend")} value="$84.50" icon={ShoppingBag} tone="orange" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.customers.customerList")}
        description={t("vendorPanel.customers.customerListDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder={t("vendorPanel.customers.searchPlaceholder")}
            />
          </div>
        }
      >
        <table className="w-full min-w-[980px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.customers.customer")}</th>
              <th className="px-5 py-4">{t("vendorPanel.customers.contact")}</th>
              <th className="px-5 py-4">{t("vendorPanel.customers.orders")}</th>
              <th className="px-5 py-4">{t("vendorPanel.customers.totalSpent")}</th>
              <th className="px-5 py-4">{t("vendorPanel.customers.lastOrder")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amazon-navy text-brand-500">
                      <UserRound size={18} />
                    </div>
                    <div>
                      <p className="font-black text-slate-950 dark:text-white">
                        {customer.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400">
                        {t("vendorPanel.customers.customerId", { id: customer.id })}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2 font-semibold">
                      <Mail size={14} /> {customer.email}
                    </p>
                    <p className="flex items-center gap-2 text-slate-500">
                      <Phone size={14} /> {customer.phone}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4 font-black">{customer.orders}</td>
                <td className="px-5 py-4 font-black">{customer.spent}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {customer.lastOrder}
                </td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={customer.status} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link to={`/vendor/customers/${customer.id}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}