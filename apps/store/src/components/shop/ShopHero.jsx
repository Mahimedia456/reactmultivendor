import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ShopHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
      <img
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85"
        alt="Shop marketplace"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.45))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.70),transparent_52%)]" />

      <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
        <div className="max-w-[720px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("shop.heroEyebrow")}
          </p>

          <h1 className="home-hero-title">{t("shop.heroTitle")}</h1>

          <p className="mt-3 max-w-[540px] text-[13px] leading-[22px] tracking-[0.2px] text-white/76">
            {t("shop.heroSubtitle")}
          </p>

          <Link to="/stores" className="luxury-link mt-7 text-white">
            Explore Vendors
          </Link>
        </div>
      </div>
    </section>
  );
}