import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { homeCategories } from "../../data/homeData";

export default function CategoryShowcase() {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white">
      <div className="site-container py-14 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="luxury-section-title text-white">
            {t("home.shopByCategory")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[20px] text-white/60">
            {t("home.categoryDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {homeCategories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative min-h-[420px] overflow-hidden bg-[#111] md:min-h-[500px]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/12 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="product-card-title text-white">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-[260px] text-[12px] leading-5 text-white/68">
                  {category.subtitle}
                </p>

                <span className="mt-5 inline-flex items-center gap-3 font-heading text-[12px] uppercase tracking-[0.09em] text-white">
                  Explore
                  <span className="h-px w-9 bg-white transition-all duration-300 group-hover:w-14" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}