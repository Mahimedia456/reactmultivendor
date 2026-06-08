import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateCouponPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/coupons" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("marketingPage.backToCoupons")}
        </Link>
        <h1 className="text-2xl font-black">{t("marketingPage.createCoupon")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.couponCode")}</label>
            <input className="ms-input" placeholder="SAVE10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.couponType")}</label>
            <select className="ms-input">
              <option>{t("marketingPage.percentage")}</option>
              <option>{t("marketingPage.fixedAmount")}</option>
              <option>{t("marketingPage.freeShipping")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.discountValue")}</label>
            <input className="ms-input" placeholder="10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.maximumDiscount")}</label>
            <input className="ms-input" placeholder="1000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.minimumOrder")}</label>
            <input className="ms-input" placeholder="3000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.usageLimit")}</label>
            <input className="ms-input" placeholder="1000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.perUserLimit")}</label>
            <input className="ms-input" placeholder="1" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("common.status")}</label>
            <select className="ms-input">
              <option>{t("status.active")}</option>
              <option>{t("status.inactive")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.startDate")}</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.endDate")}</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.applicableVendor")}</label>
            <select className="ms-input">
              <option>{t("marketingPage.allVendors")}</option>
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.applicableCategory")}</label>
            <select className="ms-input">
              <option>{t("marketingPage.allCategories")}</option>
              <option>{t("categories.perfumes")}</option>
              <option>{t("categories.electronics")}</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("marketingPage.saveCoupon")}
          </button>
        </div>
      </div>
    </div>
  );
}