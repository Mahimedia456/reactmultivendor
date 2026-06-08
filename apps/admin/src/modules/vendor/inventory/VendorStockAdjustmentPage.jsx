import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorStockAdjustmentPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.inventory.adjustmentTitle")}
        description={t("vendorPanel.inventory.adjustmentDescription")}
        action={
          <Link to="/vendor/inventory" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.common.back")}
          </Link>
        }
      />

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-black">{t("vendorPanel.inventory.product")}</label>
            <select className="ms-input">
              <option>Wireless Gaming Mouse</option>
              <option>Smart Watch Pro</option>
              <option>Leather Laptop Bag</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">{t("vendorPanel.inventory.adjustmentType")}</label>
            <select className="ms-input">
              <option value="increase">{t("vendorPanel.inventory.increaseStock")}</option>
              <option value="decrease">{t("vendorPanel.inventory.decreaseStock")}</option>
              <option value="correction">{t("vendorPanel.inventory.stockCorrection")}</option>
              <option value="damage">{t("vendorPanel.inventory.damageLost")}</option>
              <option value="return">{t("vendorPanel.inventory.customerReturn")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">{t("vendorPanel.inventory.quantity")}</label>
            <input className="ms-input" type="number" placeholder="10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">{t("vendorPanel.inventory.referenceNo")}</label>
            <input className="ms-input" placeholder="ADJ-10021" />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-black">{t("vendorPanel.inventory.notes")}</label>
          <textarea className="ms-input min-h-32" placeholder={t("vendorPanel.inventory.notesPlaceholder")} />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/vendor/inventory" className="ms-btn-soft">
            {t("vendorPanel.common.cancel")}
          </Link>
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Save size={17} />
            {t("vendorPanel.inventory.saveAdjustment")}
          </button>
        </div>
      </div>
    </div>
  );
}