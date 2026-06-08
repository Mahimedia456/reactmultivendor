import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateBrandPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/brands"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("brands.backToBrands")}
        </Link>

        <h1 className="text-2xl font-black">{t("brands.addBrand")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("brands.brandName")}
            </label>
            <input className="ms-input" placeholder="Scents By Aamir" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("common.slug")}
            </label>
            <input className="ms-input" placeholder="scents-by-aamir" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("common.status")}
            </label>
            <select className="ms-input">
              <option>{t("status.active")}</option>
              <option>{t("status.inactive")}</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">
              {t("common.description")}
            </label>
            <textarea
              className="ms-input h-28 py-3"
              placeholder={t("brands.brandDescriptionPlaceholder")}
            />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">
              {t("common.logo")}
            </label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <p className="text-sm font-bold">{t("brands.uploadLogo")}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/brands" className="ms-btn-soft">
            {t("common.cancel")}
          </Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("brands.saveBrand")}
          </button>
        </div>
      </div>
    </div>
  );
}