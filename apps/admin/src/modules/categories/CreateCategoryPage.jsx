import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateCategoryPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/categories" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("categories.backToCategories")}
        </Link>
        <h1 className="text-2xl font-black">{t("categories.addCategory")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">{t("categories.createText")}</p>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("categories.categoryName")}</label>
            <input className="ms-input" placeholder={t("categories.perfumes")} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("common.slug")}</label>
            <input className="ms-input" placeholder="perfumes" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("categories.parentCategory")}</label>
            <select className="ms-input">
              <option>{t("categories.mainCategory")}</option>
              <option>{t("categories.perfumes")}</option>
              <option>{t("categories.electronics")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("common.status")}</label>
            <select className="ms-input">
              <option>{t("status.active")}</option>
              <option>{t("status.inactive")}</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">{t("categories.categoryImage")}</label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <p className="text-sm font-bold">{t("categories.uploadImage")}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{t("categories.imageTypes")}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/categories" className="ms-btn-soft">{t("common.cancel")}</Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("categories.saveCategory")}
          </button>
        </div>
      </div>
    </div>
  );
}