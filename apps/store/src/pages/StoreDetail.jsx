import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import StoreDetailHero from "../components/stores/StoreDetailHero";
import StoreInfoBar from "../components/stores/StoreInfoBar";
import StoreProductSection from "../components/stores/StoreProductSection";
import StoreAboutSection from "../components/stores/StoreAboutSection";
import { mockStores } from "../data/mockStores";
import { mockProducts, topSellingProducts } from "../data/mockProducts";

export default function StoreDetail() {
  const { slug } = useParams();

  const store = mockStores.find((item) => item.slug === slug) || mockStores[0];

  const storeProducts = mockProducts.filter(
    (product) => product.storeName === store.name
  );

  const products = storeProducts.length ? storeProducts : mockProducts.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <StoreDetailHero store={store} />

      <StoreInfoBar store={store} />

      <StoreProductSection store={store} products={products} />

      <StoreAboutSection store={store} />

      <ProductRail
        eyebrow="Marketplace Favorites"
        title="Recommended Products"
        description="Explore more best-selling products from active sellers."
        products={topSellingProducts}
      />

      <Footer />
    </main>
  );
}