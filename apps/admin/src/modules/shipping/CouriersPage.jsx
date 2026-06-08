import { Plus, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const couriers = [
  ["Leopard Courier", "shippingPage.apiConnected", "active"],
  ["TCS", "shippingPage.manualTracking", "active"],
  ["M&P", "shippingPage.notConnected", "inactive"],
];

export default function CouriersPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("shippingPage.couriersBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("shippingPage.courierPartners")}
          </h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("shippingPage.addCourier")}
        </button>
      </div>

      <div className="grid gap-4">
        {couriers.map(([name, integrationKey, status]) => (
          <div key={name} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="font-black">{name}</h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {t(integrationKey)}
                  </p>
                </div>
              </div>

              <span className={status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                {t(`status.${status}`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}