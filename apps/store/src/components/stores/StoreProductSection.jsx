import { useTranslation } from "react-i18next";
import ProductRail from "../ProductRail";

export default function StoreProductSection({ store, products }) {
  const { t } = useTranslation();

  return (
    <ProductRail
      eyebrow={store.name}
      title={t("storeDetail.storeProducts")}
      description={t("storeDetail.storeProductsDesc")}
      products={products}
      seeAllTo={`/shop?store=${store.slug}`}
    />
  );
}