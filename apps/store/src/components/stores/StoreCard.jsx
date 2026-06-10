import { Link } from "react-router-dom";
import { BadgeCheck, Star, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StoreCard({ store }) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/store/${store.slug}`}
      className="group border border-black/10 bg-white text-black transition hover:border-black"
    >
      <div className="relative h-[280px] overflow-hidden bg-black">
        <img
          src={store.image}
          alt={store.name}
          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-3 inline-flex items-center gap-2 bg-white px-3 py-1 product-badge-text text-black">
            <Store size={13} />
            {store.categoryLabel}
          </div>

          <h3 className="product-card-title text-white">{store.name}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="product-card-desc text-black/55">
            {store.productsCount} {t("stores.products")}
          </p>

          <p className="inline-flex items-center gap-1 product-card-desc text-black">
            <Star size={14} fill="currentColor" />
            {store.rating}
          </p>
        </div>

        {store.verified && (
          <p className="mt-4 inline-flex items-center gap-2 product-card-desc text-black/60">
            <BadgeCheck size={15} />
            {t("stores.verified")}
          </p>
        )}
      </div>
    </Link>
  );
}