import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const departments = [
  {
    title: "Fashion",
    link: "/category/fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Electronics",
    link: "/category/electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Beauty",
    link: "/category/beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Home",
    link: "/category/home-living",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=85",
  },
];

export default function ShopCategoryStrip() {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white">
      <div className="site-container py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="luxury-section-title text-white">
            {t("shop.shopByDepartment")}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[20px] text-white/60">
            {t("shop.departmentDesc")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {departments.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group relative min-h-[240px] overflow-hidden bg-black md:min-h-[320px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <h3 className="product-card-title absolute bottom-5 left-5 text-white">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}