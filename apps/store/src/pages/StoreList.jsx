import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreHero from "../components/stores/StoreHero";
import StoreFilters from "../components/stores/StoreFilters";
import StoreGrid from "../components/stores/StoreGrid";
import StorePromoBanner from "../components/stores/StorePromoBanner";
import { mockStores } from "../data/mockStores";

export default function StoreList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredStores = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return mockStores.filter((store) => {
      const categoryMatch = category === "all" || store.category === category;

      const searchMatch =
        !keyword ||
        store.name.toLowerCase().includes(keyword) ||
        store.categoryLabel.toLowerCase().includes(keyword);

      return categoryMatch && searchMatch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <StoreHero />

      <StoreFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <StoreGrid stores={filteredStores} />

      <StorePromoBanner />

      <Footer />
    </main>
  );
}