import { Link } from "react-router-dom";
import { AlertTriangle, Boxes, Edit, PackageSearch, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const inventory = [
  {
    id: 1,
    product: "Elyndor Perfume 50ml",
    sku: "ELYN-50",
    vendor: "Aamir Fragrances",
    warehouseKey: "inventoryPage.mainWarehouse",
    stock: 42,
    lowStock: 10,
    status: "inStock",
  },
  {
    id: 2,
    product: "Floral Charm 50ml",
    sku: "FLOR-50",
    vendor: "Aamir Fragrances",
    warehouseKey: "inventoryPage.mainWarehouse",
    stock: 8,
    lowStock: 10,
    status: "lowStock",
  },
  {
    id: 3,
    product: "Wireless Earbuds Pro",
    sku: "TECH-WEP",
    vendor: "Tech Point",
    warehouseKey: "inventoryPage.karachiWarehouse",
    stock: 0,
    lowStock: 5,
    status: "outOfStock",
  },
];

export default function InventoryPage() {
  const { t } = useTranslation();

  const stats = [
    ["inventoryPage.totalSkus", "1,248"],
    ["inventoryPage.inStock", "1,102"],
    ["inventoryPage.lowStock", "86"],
    ["inventoryPage.outOfStock", "60"],
  ];

  const statusClass = {
    inStock: "ms-badge-success",
    lowStock: "ms-badge-warning",
    outOfStock: "ms-badge-danger",
  };

  const statusKey = {
    inStock: "inventoryPage.inStock",
    lowStock: "inventoryPage.lowStock",
    outOfStock: "inventoryPage.outOfStock",
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("inventoryPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">{t("inventoryPage.title")}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {t("inventoryPage.description")}
          </p>
        </div>

        <Link to="/admin/inventory/adjustments" className="ms-btn-primary gap-2">
          <Edit size={17} />
          {t("inventoryPage.adjustStock")}
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
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("inventoryPage.searchPlaceholder")}
            />
          </div>

          <div className="flex gap-2">
            <Link to="/admin/inventory/low-stock" className="ms-btn-soft gap-2">
              <AlertTriangle size={17} />
              {t("inventoryPage.lowStock")}
            </Link>

            <Link to="/admin/inventory/logs" className="ms-btn-soft gap-2">
              <PackageSearch size={17} />
              {t("inventoryPage.stockLogs")}
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("inventoryPage.product")}</th>
                <th className="px-5 py-3">{t("inventoryPage.sku")}</th>
                <th className="px-5 py-3">{t("inventoryPage.vendor")}</th>
                <th className="px-5 py-3">{t("inventoryPage.warehouse")}</th>
                <th className="px-5 py-3">{t("inventoryPage.stock")}</th>
                <th className="px-5 py-3">{t("inventoryPage.lowAlert")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Boxes size={18} />
                      </div>
                      <p className="font-black">{item.product}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.sku}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{t(item.warehouseKey)}</td>
                  <td className="px-5 py-4 text-sm font-black">{item.stock}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.lowStock}</td>
                  <td className="px-5 py-4">
                    <span className={statusClass[item.status]}>
                      {t(statusKey[item.status])}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to="/admin/inventory/adjustments" className="ms-btn-soft">
                      {t("inventoryPage.adjust")}
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