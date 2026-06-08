import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

const defaultValues = ["Black", "White", "Red"];

export default function VendorAttributeFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? t("vendorPanel.attributes.editTitle") : t("vendorPanel.attributes.createTitle")}
        description={t("vendorPanel.attributes.formDescription")}
        action={
          <Link to="/vendor/attributes" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.common.back")}
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.attributes.attributeInformation")}
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">{t("vendorPanel.attributes.attributeName")}</label>
              <input className="ms-input" defaultValue={isEdit ? "Color" : ""} placeholder="Color" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">{t("vendorPanel.attributes.slug")}</label>
              <input className="ms-input" defaultValue={isEdit ? "color" : ""} placeholder="color" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">{t("vendorPanel.attributes.inputType")}</label>
              <select className="ms-input" defaultValue="select">
                <option value="select">{t("vendorPanel.attributes.select")}</option>
                <option value="text">{t("vendorPanel.attributes.text")}</option>
                <option value="number">{t("vendorPanel.attributes.number")}</option>
                <option value="color">{t("vendorPanel.attributes.colorPicker")}</option>
                <option value="button">{t("vendorPanel.attributes.button")}</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">{t("vendorPanel.common.status")}</label>
              <select className="ms-input" defaultValue="active">
                <option value="active">{t("vendorCommon.statuses.active")}</option>
                <option value="draft">{t("vendorCommon.statuses.draft")}</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <label className="block text-sm font-black">{t("vendorPanel.attributes.attributeValues")}</label>
              <button className="ms-btn-soft inline-flex items-center gap-2">
                <Plus size={16} />
                {t("vendorPanel.attributes.addValue")}
              </button>
            </div>

            <div className="space-y-3">
              {(isEdit ? defaultValues : [""]).map((value, index) => (
                <div key={index} className="flex gap-3">
                  <input className="ms-input" defaultValue={value} placeholder={t("vendorPanel.attributes.valueName")} />
                  <button className="ms-btn-soft h-11 w-11 px-0 text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/attributes" className="ms-btn-soft">{t("vendorPanel.common.cancel")}</Link>
            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              {isEdit ? t("vendorPanel.attributes.updateAttribute") : t("vendorPanel.attributes.createAttribute")}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            {t("vendorPanel.attributes.usageNotes")}
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {t("vendorPanel.attributes.usageText")}
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-white/5">
            <p className="text-sm font-black">{t("vendorPanel.attributes.recommendedAttributes")}</p>
            <p className="mt-2 text-sm text-slate-500">{t("vendorPanel.attributes.recommendedText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}