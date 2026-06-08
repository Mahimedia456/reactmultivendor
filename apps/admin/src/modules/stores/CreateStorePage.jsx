import { Link } from "react-router-dom";
import { ArrowLeft, ImagePlus, Save, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateStorePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/stores"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("storesPage.backToStores")}
        </Link>

        <h1 className="text-2xl font-black">{t("storesPage.createStore")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
          {t("storesPage.createDescription")}
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Store size={19} />
              {t("storesPage.storeInformation")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeName")}
                </label>
                <input className="ms-input" placeholder="Aamir Fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeSlug")}
                </label>
                <input className="ms-input" placeholder="aamir-fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.vendorOwner")}
                </label>
                <select className="ms-input">
                  <option>Aamir</option>
                  <option>Usman</option>
                  <option>Ali Khan</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeStatus")}
                </label>
                <select className="ms-input">
                  <option>{t("storesPage.open")}</option>
                  <option>{t("storesPage.closed")}</option>
                  <option>{t("storesPage.suspended")}</option>
                  <option>{t("storesPage.pendingReview")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeEmail")}
                </label>
                <input className="ms-input" placeholder="store@example.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storePhone")}
                </label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.shortDescription")}
                </label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder={t("storesPage.shortStoreIntroduction")}
                />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("storesPage.branding")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeLogo")}
                </label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">
                    {t("storesPage.uploadStoreLogo")}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {t("storesPage.squareImageRecommended")}
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeBanner")}
                </label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">
                    {t("storesPage.uploadBanner")}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {t("storesPage.wideStorefrontHeaderImage")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("storesPage.address")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.streetAddress")}
                </label>
                <input
                  className="ms-input"
                  placeholder={t("storesPage.officeShopAddress")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.city")}
                </label>
                <input className="ms-input" placeholder="Karachi" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.country")}
                </label>
                <select className="ms-input">
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("storesPage.seoSettings")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.seoTitle")}
                </label>
                <input
                  className="ms-input"
                  placeholder={t("storesPage.seoTitlePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.seoKeywords")}
                </label>
                <input
                  className="ms-input"
                  placeholder={t("storesPage.seoKeywordsPlaceholder")}
                />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.seoDescription")}
                </label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder={t("storesPage.seoDescriptionPlaceholder")}
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("storesPage.storeControls")}
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.commissionRate")}
                </label>
                <input className="ms-input" placeholder="10%" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.storeVisibility")}
                </label>
                <select className="ms-input">
                  <option>{t("storesPage.visibleOnStorefront")}</option>
                  <option>{t("storesPage.hiddenFromStorefront")}</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">
                  {t("storesPage.featuredStore")}
                </span>
              </label>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">
                  {t("storesPage.allowCodOrders")}
                </span>
              </label>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("storesPage.payoutMethod")}
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.bankName")}
                </label>
                <input className="ms-input" placeholder="Bank Alfalah" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.accountTitle")}
                </label>
                <input className="ms-input" placeholder="Aamir Fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("storesPage.ibanAccountNo")}
                </label>
                <input className="ms-input" placeholder="PK00..." />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/admin/stores" className="ms-btn-soft flex-1">
              {t("common.cancel")}
            </Link>

            <button className="ms-btn-primary flex-1 gap-2">
              <Save size={16} />
              {t("storesPage.saveStore")}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}