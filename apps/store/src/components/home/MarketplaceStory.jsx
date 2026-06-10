import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { homeImages } from "../../data/homeData";

export default function MarketplaceStory() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-40">
        <img
          src={homeImages.vendor}
          alt="Vendor marketplace"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/70" />

      <div className="site-container relative z-10 grid min-h-[560px] items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            Sell On Mahi Store
          </p>

          <h2 className="luxury-section-title text-white">
            {t("home.sellerTitle")}
          </h2>

          <p className="mt-5 max-w-xl text-[13px] leading-[22px] text-white/68">
            {t("home.sellerDesc")}
          </p>

          <Link to="/vendor/register" className="luxury-link mt-7 text-white">
            {t("common.becomeSeller")}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Verified Stores", "Shop from trusted sellers"],
            ["Fast Checkout", "Simple cart and order flow"],
            ["Order Tracking", "Track marketplace orders"],
            ["Vendor Deals", "Offers from multiple sellers"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border border-white/18 bg-white/8 p-6 backdrop-blur"
            >
              <h3 className="product-card-title text-white">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}