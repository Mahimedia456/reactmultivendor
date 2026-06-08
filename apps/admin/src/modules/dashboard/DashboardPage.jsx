import {
  ArrowUpRight,
  BadgeDollarSign,
  Building2,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("dashboard.totalRevenue"),
      value: "Rs 8.4M",
      icon: BadgeDollarSign,
      change: "+18.4%",
    },
    {
      label: t("dashboard.totalOrders"),
      value: "24,820",
      icon: ShoppingBag,
      change: "+12.7%",
    },
    {
      label: t("dashboard.activeVendors"),
      value: "126",
      icon: Building2,
      change: "+6.2%",
    },
    {
      label: t("dashboard.customers"),
      value: "18,430",
      icon: Users,
      change: "+22.1%",
    },
  ];

  const recentOrders = [
    ["MS-1001", "Rs 12,400", "status.processing"],
    ["MS-1002", "Rs 8,200", "status.paid"],
    ["MS-1003", "Rs 18,900", "status.shipped"],
    ["MS-1004", "Rs 4,500", "status.pending"],
  ];

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-[28px] border border-panel-line bg-gradient-to-r from-brand-950 via-brand-800 to-brand-600 p-7 text-white shadow-card dark:border-panel-darkLine">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.35),transparent_24%)]" />

        <div className="relative z-10 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-200">
              {t("dashboard.marketplacePerformance")}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight">
              {t("dashboard.heroTitle")}
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-brand-100">
              {t("dashboard.heroText")}
            </p>
          </div>

          <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-brand-800">
            {t("dashboard.viewReports")}
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className="ms-card p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                  <Icon size={22} />
                </div>
                <span className="ms-badge">{card.change}</span>
              </div>

              <p className="mt-5 text-sm font-bold text-slate-500 dark:text-slate-400">
                {card.label}
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">{card.value}</h3>
            </div>
          );
        })}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="ms-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="ms-section-title">{t("dashboard.revenue")}</p>
              <h3 className="mt-2 text-xl font-black">{t("dashboard.salesAnalytics")}</h3>
            </div>
            <button className="ms-btn-soft">{t("dashboard.monthly")}</button>
          </div>

          <div className="mt-6 flex h-80 items-end gap-3 rounded-3xl bg-panel-page p-5 dark:bg-[#0a1020]">
            {[45, 70, 52, 86, 66, 95, 74, 88, 62, 91, 78, 98].map((height, index) => (
              <div key={index} className="flex flex-1 flex-col justify-end">
                <div
                  className="rounded-t-2xl bg-gradient-to-t from-brand-700 to-aqua-400"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ms-card p-6">
          <div>
            <p className="ms-section-title">{t("dashboard.operations")}</p>
            <h3 className="mt-2 text-xl font-black">{t("dashboard.recentOrders")}</h3>
          </div>

          <div className="mt-6 space-y-3">
            {recentOrders.map(([order, amount, statusKey]) => (
              <div
                key={order}
                className="flex items-center justify-between rounded-2xl border border-panel-line bg-panel-page p-4 dark:border-panel-darkLine dark:bg-[#0a1020]"
              >
                <div>
                  <p className="font-black">{order}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {t(statusKey)}
                  </p>
                </div>
                <p className="font-black">{amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}