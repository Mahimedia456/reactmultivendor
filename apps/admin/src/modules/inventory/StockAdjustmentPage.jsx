import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StockAdjustmentPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("inventoryPage.backToInventory")}
        </Link>
        <h1 className="text-2xl font-black">{t("inventoryPage.stockAdjustment")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("inventoryPage.stockAdjustmentText")}
        </p>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("inventoryPage.product")}</label>
            <select className="ms-input">
              <option>Elyndor Perfume 50ml</option>
              <option>Floral Charm 50ml</option>
              <option>Wireless Earbuds Pro</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("inventoryPage.warehouse")}</label>
            <select className="ms-input">
              <option>{t("inventoryPage.mainWarehouse")}</option>
              <option>{t("inventoryPage.karachiWarehouse")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("inventoryPage.adjustmentType")}</label>
            <select className="ms-input">
              <option>{t("inventoryPage.addStock")}</option>
              <option>{t("inventoryPage.removeStock")}</option>
              <option>{t("inventoryPage.setStock")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("inventoryPage.quantity")}</label>
            <input className="ms-input" placeholder="10" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">{t("inventoryPage.reason")}</label>
            <textarea className="ms-input h-28 py-3" placeholder={t("inventoryPage.reasonPlaceholder")} />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/inventory" className="ms-btn-soft">
            {t("common.cancel")}
          </Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("inventoryPage.saveAdjustment")}
          </button>
        </div>
      </div>
    </div>
  );
}