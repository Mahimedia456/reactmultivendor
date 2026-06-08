import { Link } from "react-router-dom";
import { Eye, Plus, Search, Truck, Warehouse } from "lucide-react";
import { useTranslation } from "react-i18next";

const zones = [
  ["Karachi", "Pakistan", "Rs 250", "active"],
  ["Lahore", "Pakistan", "Rs 300", "active"],
  ["Islamabad", "Pakistan", "Rs 350", "active"],
];

const methods = [
  ["shippingPage.standardDelivery", "shippingPage.businessDays24", "Rs 250", "active"],
  ["shippingPage.expressDelivery", "shippingPage.businessDays12", "Rs 500", "active"],
  ["shippingPage.courierPickup", "shippingPage.vendorManaged", "shippingPage.custom", "inactive"],
];

export default function ShippingPage() {
  const { t } = useTranslation();

  const stats = [
    ["shippingPage.shippingZones", "12"],
    ["shippingPage.activeMethods", "8"],
    ["shippingPage.courierPartners", "4"],
    ["shippingPage.pendingShipments", "142"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("shippingPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("shippingPage.title")}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {t("shippingPage.description")}
          </p>
        </div>

        <div className="flex gap-2">
          <Link to="/admin/couriers" className="ms-btn-soft">
            {t("shippingPage.courierPartners")}
          </Link>

          <Link to="/admin/shipping/create" className="ms-btn-primary gap-2">
            <Plus size={17} />
            {t("shippingPage.addShippingRule")}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="ms-card">
          <div className="flex items-center justify-between border-b border-panel-line p-4 dark:border-panel-darkLine">
            <div>
              <h3 className="text-lg font-black">{t("shippingPage.shippingZones")}</h3>
              <p className="text-sm font-semibold text-slate-500">
                {t("shippingPage.cityCountryRates")}
              </p>
            </div>
            <Link to="/admin/shipping/create" className="ms-btn-soft gap-2">
              <Plus size={16} />
              {t("shippingPage.zoneLabel")}
            </Link>
          </div>

          <div className="p-4">
            <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
              <Search size={17} className="text-slate-400" />
              <input
                className="w-full bg-transparent text-sm font-medium outline-none"
                placeholder={t("shippingPage.searchZones")}
              />
            </div>

            <div className="space-y-3">
              {zones.map(([city, country, rate, status], index) => (
                <div
                  key={city}
                  className="flex items-center justify-between rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Warehouse size={18} />
                    </div>
                    <div>
                      <p className="font-black">{city}</p>
                      <p className="text-sm font-semibold text-slate-500">{country}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-black">{rate}</p>
                      <span className={status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                        {t(`status.${status}`)}
                      </span>
                    </div>

                    <Link to={`/admin/shipping/${index + 1}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ms-card">
          <div className="flex items-center justify-between border-b border-panel-line p-4 dark:border-panel-darkLine">
            <div>
              <h3 className="text-lg font-black">{t("shippingPage.deliveryMethods")}</h3>
              <p className="text-sm font-semibold text-slate-500">
                {t("shippingPage.deliveryMethodsText")}
              </p>
            </div>
            <Link to="/admin/shipping/create" className="ms-btn-soft gap-2">
              <Plus size={16} />
              {t("shippingPage.method")}
            </Link>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              {methods.map(([nameKey, etaKey, rateKey, status], index) => (
                <div
                  key={nameKey}
                  className="flex items-center justify-between rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Truck size={18} />
                    </div>
                    <div>
                      <p className="font-black">{t(nameKey)}</p>
                      <p className="text-sm font-semibold text-slate-500">{t(etaKey)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-black">
                        {rateKey.includes(".") ? t(rateKey) : rateKey}
                      </p>
                      <span className={status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                        {t(`status.${status}`)}
                      </span>
                    </div>

                    <Link to={`/admin/shipping/${index + 10}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}