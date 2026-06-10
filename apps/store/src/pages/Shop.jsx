import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import ShopHero from "../components/shop/ShopHero";
import ShopFilters from "../components/shop/ShopFilters";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import ShopCategoryStrip from "../components/shop/ShopCategoryStrip";
import ShopPromoBanner from "../components/shop/ShopPromoBanner";
import {
  mockProducts,
  topSellingProducts,
  newArrivalProducts,
  dealProducts,
} from "../data/mockProducts";

function sortProducts(items, sort) {
  const result = [...items];

  if (sort === "price_low") {
    return result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
  }

  if (sort === "price_high") {
    return result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  }

  if (sort === "new") {
    return result.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
  }

  if (sort === "best") {
    return result.sort((a, b) => Number(b.sold || 0) - Number(a.sold || 0));
  }

  return result;
}

export default function Shop() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState(searchParams.get("sort") || "featured");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const filtered = mockProducts.filter((product) => {
      const categoryMatch =
        category === "all" || product.category === category;

      const ratingMatch =
        rating === "all" || Number(product.rating || 0) >= Number(rating);

      const searchMatch =
        !keyword ||
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.storeName.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword);

      return categoryMatch && ratingMatch && searchMatch;
    });

    return sortProducts(filtered, sort);
  }, [search, category, rating, sort]);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <ShopHero />

      <ShopFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        rating={rating}
        setRating={setRating}
        sort={sort}
        setSort={setSort}
      />

      <ShopCategoryStrip />

      <ShopProductGrid
        title={t("shop.heroTitle")}
        products={filteredProducts}
      />

      <ShopPromoBanner />

      <ProductRail
        eyebrow="Limited Offers"
        title={t("home.deals")}
        description={t("home.dealsDesc")}
        products={dealProducts.slice(0, 4)}
      />

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