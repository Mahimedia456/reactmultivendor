import { Link } from "react-router-dom";
import { Star, Store } from "lucide-react";
import { useTranslation } from "react-i18next";
import { homeStores } from "../../data/homeData";

export default function FeaturedStores() {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black">
      <div className="site-container py-14 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              Verified Vendors
            </p>

            <h2 className="luxury-section-title">
              {t("home.featuredStores")}
            </h2>

            <p className="mt-3 max-w-2xl text-[13px] leading-[20px] text-black/58">
              {t("home.featuredStoresDesc")}
            </p>
          </div>

          <Link to="/stores" className="luxury-link text-black">
            {t("common.viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeStores.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.slug}`}
              className="group border border-black/10 bg-white transition hover:border-black"
            >
              <div className="relative h-[280px] overflow-hidden bg-black">
                <img
                  src={store.image}
                  alt={store.name}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 inline-flex items-center gap-2 bg-white px-3 py-1 product-badge-text text-black">
                    <Store size={13} />
                    {store.category}
                  </div>

                  <h3 className="product-card-title text-white">
                    {store.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <p className="product-card-desc text-black/55">
                  {store.productsCount} products
                </p>

                <p className="inline-flex items-center gap-1 product-card-desc text-black">
                  <Star size={14} fill="currentColor" />
                  {store.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}