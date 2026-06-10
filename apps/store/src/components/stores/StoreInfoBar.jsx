import { BadgeCheck, Package, Star, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StoreInfoBar({ store }) {
  const { t } = useTranslation();

  const items = [
    {
      title: t("storeDetail.category"),
      value: store.categoryLabel,
      icon: Store,
    },
    {
      title: t("storeDetail.products"),
      value: store.productsCount,
      icon: Package,
    },
    {
      title: t("storeDetail.rating"),
      value: store.rating,
      icon: Star,
    },
    {
      title: t("storeDetail.verified"),
      value: store.verified ? "Yes" : "No",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="bg-white text-black">
      <div className="site-container grid gap-px border-b border-black/10 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="border-black/10 p-6 md:border-r last:border-r-0">
              <Icon size={22} strokeWidth={1.6} />
              <h3 className="product-card-title mt-4 text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[20px] text-black/55">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}