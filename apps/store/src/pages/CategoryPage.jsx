import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import CategoryHero from "../components/category/CategoryHero";
import { mockCategories } from "../data/mockCategories";
import { mockProducts, topSellingProducts } from "../data/mockProducts";

export default function CategoryPage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const category =
    mockCategories.find((item) => item.slug === slug) || mockCategories[0];

  const products = mockProducts.filter((item) => item.category === category.slug);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <CategoryHero category={category} />

      <ShopProductGrid
        title={`${category.name} ${t("category.allProducts")}`}
        products={products}
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