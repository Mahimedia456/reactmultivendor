import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DealsBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85"
        alt="Marketplace deals"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-black/58" />

      <div className="site-container relative z-10 flex min-h-[520px] items-center justify-center text-center">
        <div className="max-w-3xl">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            Flash Sale
          </p>

          <h2 className="luxury-section-title text-white">
            {t("home.dealBannerTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[22px] text-white/68">
            {t("home.dealBannerDesc")}
          </p>

          <Link to="/deals" className="luxury-btn-light luxury-btn mt-8">
            Explore Deals
          </Link>
        </div>
      </div>
    </section>
  );
}