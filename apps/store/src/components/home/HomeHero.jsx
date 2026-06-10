import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { homeImages } from "../../data/homeData";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-black text-white">
      <img
        src={homeImages.hero}
        alt="Mahi Store Marketplace"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.14)_52%,rgba(0,0,0,0.52))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.74),transparent_54%)]" />

      <div className="site-container relative z-10 flex min-h-[680px] items-end pb-14">
        <div className="max-w-[720px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("home.heroEyebrow")}
          </p>

          <h1 className="home-hero-title">{t("home.heroTitle")}</h1>

          <p className="mt-4 max-w-[520px] text-[13px] leading-[22px] text-white/76">
            {t("home.heroSubtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop" className="luxury-btn-light luxury-btn">
              {t("common.shopNow")}
            </Link>

            <Link to="/stores" className="luxury-btn text-white">
              {t("common.exploreStores")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}