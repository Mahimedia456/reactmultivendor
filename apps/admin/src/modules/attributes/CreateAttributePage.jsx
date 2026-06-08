import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Save, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateAttributePage() {
  const { t } = useTranslation();
  const values = ["30ml", "50ml", "100ml"];

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/attributes"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("attributes.backToAttributes")}
        </Link>

        <h1 className="text-2xl font-black">
          {t("attributes.addAttribute")}
        </h1>
      </div>

      <div className="ms-card p-5">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("attributes.attributeName")}
            </label>
            <input className="ms-input" placeholder={t("attributes.size")} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("attributes.values")}
            </label>

            <div className="flex gap-3">
              <input
                className="ms-input"
                placeholder={t("attributes.addValuePlaceholder")}
              />
              <button className="ms-btn-soft gap-2">
                <Plus size={16} />
                {t("common.add")}
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="ms-badge gap-2">
                  {value}
                  <X size={13} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/attributes" className="ms-btn-soft">
            {t("common.cancel")}
          </Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("attributes.saveAttribute")}
          </button>
        </div>
      </div>
    </div>
  );
}