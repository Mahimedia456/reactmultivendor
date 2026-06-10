import { useTranslation } from "react-i18next";

export default function StoreAboutSection({ store }) {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white">
      <div className="site-container grid gap-10 py-14 lg:grid-cols-12 md:py-20">
        <div className="lg:col-span-4">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("storeDetail.sellerInfo")}
          </p>

          <h2 className="luxury-section-title text-white">
            {t("storeDetail.aboutStore")}
          </h2>
        </div>

        <div className="space-y-5 text-[13px] leading-[22px] text-white/65 lg:col-span-8">
          <p>{t("storeDetail.aboutDesc")}</p>

          <div className="grid gap-px border border-white/15 sm:grid-cols-3">
            <div className="p-5">
              <h3 className="product-card-title text-white">
                {t("storeDetail.category")}
              </h3>
              <p className="mt-2 text-white/60">{store.categoryLabel}</p>
            </div>

            <div className="p-5">
              <h3 className="product-card-title text-white">
                {t("storeDetail.products")}
              </h3>
              <p className="mt-2 text-white/60">{store.productsCount}</p>
            </div>

            <div className="p-5">
              <h3 className="product-card-title text-white">
                {t("storeDetail.rating")}
              </h3>
              <p className="mt-2 text-white/60">{store.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}