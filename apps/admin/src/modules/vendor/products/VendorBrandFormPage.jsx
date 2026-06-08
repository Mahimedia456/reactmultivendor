import { ArrowLeft, Save } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorBrandFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? t("vendorPanel.brands.editTitle") : t("vendorPanel.brands.createTitle")}
        description={t("vendorPanel.brands.formDescription")}
        action={
          <Link to="/vendor/brands" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.common.back")}
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.brands.brandName")}
              </label>
              <input className="ms-input" defaultValue={isEdit ? "Mahi Tech" : ""} placeholder="Mahi Tech" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.brands.slug")}
              </label>
              <input className="ms-input" defaultValue={isEdit ? "mahi-tech" : ""} placeholder="mahi-tech" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.brands.website")}
              </label>
              <input className="ms-input" placeholder="https://brand.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.common.status")}
              </label>
              <select className="ms-input" defaultValue="active">
                <option value="active">{t("vendorCommon.statuses.active")}</option>
                <option value="draft">{t("vendorCommon.statuses.draft")}</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.brands.descriptionLabel")}
            </label>
            <textarea className="ms-input min-h-32" placeholder={t("vendorPanel.brands.descriptionPlaceholder")} />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.brands.brandLogo")}
            </label>
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-panel-darkLine">
              <p className="text-sm font-bold text-slate-500">
                {t("vendorPanel.brands.uploadLogo")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/brands" className="ms-btn-soft">
              {t("vendorPanel.common.cancel")}
            </Link>

            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              {isEdit ? t("vendorPanel.brands.updateBrand") : t("vendorPanel.brands.createBrand")}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.brands.brandApproval")}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            {t("vendorPanel.brands.approvalText")}
          </p>
        </div>
      </div>
    </div>
  );
}