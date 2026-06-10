import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CenterPromoBanner() {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black">
      <div className="site-container py-14 text-center md:py-20">
        <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
          {t("home.centerPromoEyebrow")}
        </p>

        <h2 className="luxury-section-title">{t("home.centerPromoTitle")}</h2>

        <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-[22px] text-black/62">
          {t("home.centerPromoDesc")}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/shop" className="luxury-btn-dark luxury-btn">
            Shop Products
          </Link>
          <Link to="/stores" className="luxury-btn text-black">
            View Stores
          </Link>
        </div>
      </div>
    </section>
  );
}