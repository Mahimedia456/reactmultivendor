import { useTranslation } from "react-i18next";
import { mockCategories } from "../../data/mockCategories";

export default function StoreFilters({
  search,
  setSearch,
  category,
  setCategory,
}) {
  const { t } = useTranslation();

  const inputClass =
    "h-11 border border-black/10 bg-black/[0.035] px-4 text-[13px] uppercase tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black";

  return (
    <section className="sticky top-[var(--header-height)] z-30 border-b border-black/10 bg-white text-black">
      <div className="site-container grid gap-4 py-4 md:grid-cols-[1.5fr_1fr]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t("stores.searchPlaceholder")}
          className={inputClass}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={inputClass}
        >
          <option value="all">{t("stores.allCategories")}</option>
          {mockCategories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}