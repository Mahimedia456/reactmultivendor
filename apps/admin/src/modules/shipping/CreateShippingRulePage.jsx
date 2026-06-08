import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateShippingRulePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/shipping"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("shippingPage.backToShipping")}
        </Link>
        <h1 className="text-2xl font-black">
          {t("shippingPage.createShippingRule")}
        </h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.ruleName")}
            </label>
            <input className="ms-input" placeholder="Karachi Standard Delivery" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.zone")}
            </label>
            <select className="ms-input">
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.deliveryMethod")}
            </label>
            <select className="ms-input">
              <option>{t("shippingPage.standardDelivery")}</option>
              <option>{t("shippingPage.expressDelivery")}</option>
              <option>{t("shippingPage.courierPickup")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.baseRate")}
            </label>
            <input className="ms-input" placeholder="250" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.freeShippingAbove")}
            </label>
            <input className="ms-input" placeholder="10000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.codAllowed")}
            </label>
            <select className="ms-input">
              <option>{t("shippingPage.yes")}</option>
              <option>{t("shippingPage.no")}</option>
            </select>
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

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("shippingPage.eta")}
            </label>
            <input className="ms-input" placeholder={t("shippingPage.businessDays24")} />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("shippingPage.saveRule")}
          </button>
        </div>
      </div>
    </div>
  );
}