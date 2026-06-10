import { useTranslation } from "react-i18next";

const categories = [
  ["all", "All Categories"],
  ["fashion", "Fashion"],
  ["electronics", "Electronics"],
  ["beauty", "Beauty"],
  ["home-living", "Home & Living"],
  ["grocery", "Grocery"],
  ["sports", "Sports"],
];

const ratings = [
  ["all", "All Ratings"],
  ["4", "4 Stars & Up"],
  ["3", "3 Stars & Up"],
];

export default function ShopFilters({
  search,
  setSearch,
  category,
  setCategory,
  rating,
  setRating,
  sort,
  setSort,
}) {
  const { t } = useTranslation();

  const inputClass =
    "h-11 border border-black/10 bg-black/[0.035] px-4 text-[13px] uppercase tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black";

  const sortOptions = [
    ["featured", t("shop.featured")],
    ["new", t("shop.newest")],
    ["best", t("shop.bestSelling")],
    ["price_low", t("shop.priceLow")],
    ["price_high", t("shop.priceHigh")],
  ];

  return (
    <section className="sticky top-[var(--header-height)] z-30 border-b border-black/10 bg-white text-black">
      <div className="site-container grid gap-4 py-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t("shop.searchPlaceholder")}
          className={inputClass}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={inputClass}
        >
          {categories.map(([value, label]) => (
            <option key={value} value={value}>
              {value === "all" ? t("shop.allCategories") : label}
            </option>
          ))}
        </select>

        <select
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          className={inputClass}
        >
          {ratings.map(([value, label]) => (
            <option key={value} value={value}>
              {value === "all" ? t("shop.allRatings") : label}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className={inputClass}
        >
          {sortOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}