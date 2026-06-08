import { ArrowLeft, Save } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorCategoryFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? t("vendorPanel.categories.editTitle") : t("vendorPanel.categories.createTitle")}
        description={t("vendorPanel.categories.formDescription")}
        action={
          <Link to="/vendor/categories" className="ms-btn-soft inline-flex items-center gap-2">
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
                {t("vendorPanel.categories.categoryName")}
              </label>
              <input className="ms-input" defaultValue={isEdit ? "Electronics" : ""} placeholder={t("vendorPanel.categories.electronics")} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.categories.slug")}
              </label>
              <input className="ms-input" defaultValue={isEdit ? "electronics" : ""} placeholder="electronics" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                {t("vendorPanel.categories.parentCategory")}
              </label>
              <select className="ms-input" defaultValue="main">
                <option value="main">{t("vendorPanel.categories.mainCategory")}</option>
                <option value="electronics">{t("vendorPanel.categories.electronics")}</option>
                <option value="fashion">{t("vendorPanel.categories.fashion")}</option>
              </select>
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
              {t("vendorPanel.categories.descriptionLabel")}
            </label>
            <textarea className="ms-input min-h-32" placeholder={t("vendorPanel.categories.descriptionPlaceholder")} />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.categories.categoryImage")}
            </label>
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-panel-darkLine">
              <p className="text-sm font-bold text-slate-500">
                {t("vendorPanel.categories.uploadImage")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/categories" className="ms-btn-soft">
              {t("vendorPanel.common.cancel")}
            </Link>

            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              {isEdit ? t("vendorPanel.categories.updateCategory") : t("vendorPanel.categories.createCategory")}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.categories.categoryRules")}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            {t("vendorPanel.categories.rulesText")}
          </p>
        </div>
      </div>
    </div>
  );
}