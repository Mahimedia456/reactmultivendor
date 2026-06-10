import { useTranslation } from "react-i18next";
import StoreCard from "./StoreCard";

export default function StoreGrid({ stores = [] }) {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black">
      <div className="site-container py-12 md:py-16">
        <div className="mb-8">
          <h2 className="luxury-section-title">{t("stores.allStores")}</h2>

          <p className="mt-3 text-[13px] leading-[20px] text-black/55">
            {stores.length} {t("stores.storesFound")}
          </p>
        </div>

        {stores.length ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stores.map((store) => (
              <StoreCard key={store.id || store.slug} store={store} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[320px] items-center justify-center border border-black/10 bg-black/[0.03] text-center">
            <div>
              <h3 className="luxury-section-title">{t("stores.noStores")}</h3>
              <p className="mt-3 text-[13px] leading-[20px] text-black/55">
                {t("stores.noStoresDesc")}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}