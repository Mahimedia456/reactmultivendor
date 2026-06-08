import { Plus, Warehouse } from "lucide-react";
import { useTranslation } from "react-i18next";

const warehouses = [
  ["inventoryPage.mainWarehouse", "Karachi", "1,024 SKUs", "active"],
  ["inventoryPage.karachiWarehouse", "Karachi", "420 SKUs", "active"],
  ["inventoryPage.lahoreDispatch", "Lahore", "215 SKUs", "inactive"],
];

export default function WarehousesPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("inventoryPage.warehousesBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("inventoryPage.warehouses")}
          </h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("inventoryPage.addWarehouse")}
        </button>
      </div>

      <div className="grid gap-4">
        {warehouses.map(([nameKey, city, skus, status]) => (
          <div key={nameKey} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Warehouse size={20} />
                </div>
                <div>
                  <h3 className="font-black">{t(nameKey)}</h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {city} • {skus}
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