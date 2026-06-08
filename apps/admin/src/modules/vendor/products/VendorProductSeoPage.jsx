import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorProductSeoPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.products.seoTitlePage")}
        description={t("vendorPanel.products.seoDescriptionPage")}
        action={
          <button className="ms-btn-primary">
            {t("vendorPanel.products.saveSeo")}
          </button>
        }
      />

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.products.seoTitle")}
            </label>
            <input
              className="ms-input"
              placeholder={t("vendorPanel.products.seoTitlePlaceholder")}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.products.productSlug")}
            </label>
            <input
              className="ms-input"
              placeholder={t("vendorPanel.products.productSlugPlaceholder")}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.products.metaDescription")}
            </label>
            <textarea
              className="ms-input min-h-32"
              placeholder={t("vendorPanel.products.metaDescriptionPlaceholder")}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">
              {t("vendorPanel.products.keywords")}
            </label>
            <input
              className="ms-input"
              placeholder={t("vendorPanel.products.keywordsPlaceholder")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}