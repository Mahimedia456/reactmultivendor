import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import { dealProducts, topSellingProducts } from "../data/mockProducts";

export default function DealsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=85"
          alt="Marketplace deals"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/58" />

        <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
          <div className="max-w-[720px]">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              Marketplace Offers
            </p>

            <h1 className="home-hero-title">{t("home.deals")}</h1>

            <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/76">
              {t("home.dealsDesc")}
            </p>
          </div>
        </div>
      </section>

      <ProductRail
        eyebrow="Limited Offers"
        title={t("home.deals")}
        description={t("home.dealsDesc")}
        products={dealProducts}
      />

      <ProductRail
        eyebrow="Customer Favorites"
        title={t("home.topSelling")}
        description={t("home.topSellingDesc")}
        products={topSellingProducts}
      />

      <Footer />
    </main>
  );
}