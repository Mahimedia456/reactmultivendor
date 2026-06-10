import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ShopPromoBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[460px] overflow-hidden bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1800&q=85"
        alt="Vendor deals"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />

      <div className="absolute inset-0 bg-black/62" />

      <div className="site-container relative z-10 flex min-h-[460px] items-center justify-center text-center">
        <div className="max-w-3xl">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            Marketplace Campaign
          </p>

          <h2 className="luxury-section-title text-white">
            {t("shop.promoTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[22px] text-white/70">
            {t("shop.promoDesc")}
          </p>

          <Link to="/deals" className="luxury-btn-light luxury-btn mt-8">
            {t("shop.promoButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}