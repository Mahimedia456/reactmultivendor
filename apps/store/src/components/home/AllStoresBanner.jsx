import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AllStoresBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=85"
            alt="All stores"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[520px] items-center px-[var(--page-padding-x)] py-12">
          <div className="max-w-xl">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              Vendor Network
            </p>

            <h2 className="luxury-section-title text-white">
              {t("home.allStoresTitle")}
            </h2>

            <p className="mt-5 text-[13px] leading-[22px] text-white/65">
              {t("home.allStoresDesc")}
            </p>

            <Link to="/stores" className="luxury-link mt-8 text-white">
              Explore All Stores
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}