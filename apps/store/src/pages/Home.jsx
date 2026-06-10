import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import HomeHero from "../components/home/HomeHero";
import VendorBenefits from "../components/home/VendorBenefits";
import CenterPromoBanner from "../components/home/CenterPromoBanner";
import CategoryShowcase from "../components/home/CategoryShowcase";
import DealsBanner from "../components/home/DealsBanner";
import FeaturedStores from "../components/home/FeaturedStores";
import AllStoresBanner from "../components/home/AllStoresBanner";
import MarketplaceStory from "../components/home/MarketplaceStory";
import {
  mockProducts,
  topSellingProducts,
  newArrivalProducts,
  dealProducts,
} from "../data/mockProducts";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <HomeHero />
      <VendorBenefits />

      <ProductRail
        eyebrow={t("home.marketplacePicks")}
        title={t("home.productsYouMayLike")}
        description={t("home.productsDesc")}
        products={mockProducts.slice(0, 4)}
      />

      <CenterPromoBanner />
      <CategoryShowcase />

      <ProductRail
        eyebrow="Limited Offers"
        title={t("home.deals")}
        description={t("home.dealsDesc")}
        products={dealProducts.slice(0, 4)}
      />

      <DealsBanner />
      <FeaturedStores />
      <AllStoresBanner />
      <MarketplaceStory />

      <ProductRail
        eyebrow="Customer Favorites"
        title={t("home.topSelling")}
        description={t("home.topSellingDesc")}
        products={topSellingProducts}
      />

      <ProductRail
        eyebrow="Fresh Picks"
        title={t("home.newArrivals")}
        description={t("home.newArrivalsDesc")}
        products={newArrivalProducts}
      />

      <Footer />
    </main>
  );
}