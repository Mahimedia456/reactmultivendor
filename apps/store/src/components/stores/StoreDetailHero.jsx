import { Link } from "react-router-dom";
import { BadgeCheck, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StoreDetailHero({ store }) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[600px]">
      <img
        src={store.banner || store.image}
        alt={store.name}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.14)_56%,rgba(0,0,0,0.48))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.74),transparent_55%)]" />

      <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[600px] md:pb-14">
        <div className="max-w-[760px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {store.categoryLabel}
          </p>

          <h1 className="home-hero-title">{store.name}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] leading-[20px] text-white/78">
            <span className="inline-flex items-center gap-1">
              <Star size={15} fill="currentColor" />
              {store.rating} {t("storeDetail.rating")}
            </span>

            <span>
              {store.productsCount} {t("storeDetail.products")}
            </span>

            {store.verified ? (
              <span className="inline-flex items-center gap-1">
                <BadgeCheck size={15} />
                {t("storeDetail.verified")}
              </span>
            ) : null}
          </div>

          <Link to={`/shop?store=${store.slug}`} className="luxury-link mt-7 text-white">
            {t("storeDetail.visitShop")}
          </Link>
        </div>
      </div>
    </section>
  );
}