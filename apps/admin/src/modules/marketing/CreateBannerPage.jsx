import { Link } from "react-router-dom";
import { ArrowLeft, ImagePlus, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateBannerPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/banners" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("marketingPage.backToBanners")}
        </Link>
        <h1 className="text-2xl font-black">{t("marketingPage.createBanner")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.title")}</label>
            <input className="ms-input" placeholder={t("marketingPage.summerSaleHero")} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.position")}</label>
            <select className="ms-input">
              <option>{t("marketingPage.homepageHero")}</option>
              <option>{t("marketingPage.homepageSecondary")}</option>
              <option>{t("marketingPage.categoryPage")}</option>
              <option>{t("marketingPage.productPage")}</option>
              <option>{t("marketingPage.vendorStore")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.buttonLabel")}</label>
            <input className="ms-input" placeholder={t("marketingPage.shopNow")} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.buttonLink")}</label>
            <input className="ms-input" placeholder="/shop" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.startDate")}</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.endDate")}</label>
            <input type="date" className="ms-input" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">{t("marketingPage.bannerImage")}</label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <ImagePlus className="mx-auto text-slate-400" size={32} />
              <p className="mt-3 text-sm font-bold">
                {t("marketingPage.uploadDesktopMobileImage")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("marketingPage.saveBanner")}
          </button>
        </div>
      </div>
    </div>
  );
}