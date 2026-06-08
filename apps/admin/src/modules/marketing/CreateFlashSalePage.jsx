import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateFlashSalePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/flash-sales" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("marketingPage.backToFlashSales")}
        </Link>
        <h1 className="text-2xl font-black">{t("marketingPage.createFlashSale")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder={t("marketingPage.campaignName")} />
          <select className="ms-input">
            <option>{t("marketingPage.percentageDiscount")}</option>
            <option>{t("marketingPage.fixedDiscount")}</option>
          </select>
          <input className="ms-input" placeholder={t("marketingPage.discountValue")} />
          <input className="ms-input" placeholder={t("marketingPage.priority")} />
          <input type="datetime-local" className="ms-input" />
          <input type="datetime-local" className="ms-input" />
          <select className="ms-input">
            <option>{t("status.active")}</option>
            <option>{t("marketingPage.scheduled")}</option>
            <option>{t("status.inactive")}</option>
          </select>
          <select className="ms-input">
            <option>{t("marketingPage.allVendors")}</option>
            <option>Aamir Fragrances</option>
          </select>
          <textarea className="ms-input h-28 py-3 lg:col-span-2" placeholder={t("marketingPage.productsIncludedNotes")} />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("marketingPage.saveFlashSale")}
          </button>
        </div>
      </div>
    </div>
  );
}