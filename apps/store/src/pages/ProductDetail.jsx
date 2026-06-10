import { Link, useParams } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Star,
  Store,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductRail from "../components/ProductRail";
import { mockProducts } from "../data/mockProducts";
import { formatMoney } from "../utils/currency";
import { useStore } from "../context/StoreContext";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="border border-black/10 bg-white p-5">
      <Icon size={20} strokeWidth={1.6} />
      <h3 className="product-card-title mt-4 text-black">{title}</h3>
      <p className="mt-2 text-[13px] leading-[20px] text-black/55">{text}</p>
    </div>
  );
}

export default function ProductDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const product =
    mockProducts.find((item) => item.slug === slug) || mockProducts[0];

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const relatedProducts = mockProducts
    .filter((item) => item.id !== product.id)
    .filter((item) => item.category === product.category)
    .slice(0, 4);

  const fallbackRelated = relatedProducts.length
    ? relatedProducts
    : mockProducts.filter((item) => item.id !== product.id).slice(0, 4);

  const storeSlug = String(product.storeName || "")
    .toLowerCase()
    .replaceAll(" ", "-");

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-10 lg:grid-cols-2 md:py-14">
          <div className="grid gap-4 md:grid-cols-[92px_1fr]">
            <div className="hidden gap-3 md:grid">
              {[product.image, product.hoverImage || product.image, product.image].map(
                (image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="h-[92px] border border-black/10 bg-black/[0.03]"
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>

            <div className="relative min-h-[560px] overflow-hidden bg-[#f3f3f3]">
              {product.badge ? (
                <span className="absolute left-5 top-5 z-20 bg-white px-3 py-1 product-badge-text text-black shadow-sm">
                  {product.badge}
                </span>
              ) : null}

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full max-w-2xl">
              <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
                {product.category}
              </p>

              <h1 className="luxury-section-title">{product.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-[13px] text-black/58">
                <span className="inline-flex items-center gap-1">
                  <Star size={15} fill="currentColor" />
                  {product.rating} {t("productDetail.rating")}
                </span>

                <span>
                  {product.sold} {t("productDetail.sold")}
                </span>

                <Link
                  to={`/store/${storeSlug}`}
                  className="inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <Store size={15} />
                  {t("productDetail.soldBy")} {product.storeName}
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="font-heading text-[28px] uppercase tracking-[0.04em] text-black">
                  {formatMoney(product.price)}
                </span>

                {product.oldPrice ? (
                  <span className="text-[15px] text-black/35 line-through">
                    {formatMoney(product.oldPrice)}
                  </span>
                ) : null}
              </div>

              <p className="mt-6 text-[13px] leading-[22px] text-black/62">
                {t("productDetail.overviewDesc")}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_56px]">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="flex h-14 items-center justify-center gap-2 bg-black px-5 product-action-text text-white transition hover:bg-brand-primary hover:text-black"
                >
                  <ShoppingBag size={18} />
                  {t("productDetail.addToCart")}
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`grid h-14 place-items-center border border-black/15 transition ${
                    isWishlisted
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                  aria-label={t("productDetail.wishlist")}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  icon={Truck}
                  title={t("productDetail.delivery")}
                  text={t("productDetail.deliveryText")}
                />
                <InfoCard
                  icon={ShieldCheck}
                  title={t("productDetail.secure")}
                  text={t("productDetail.secureText")}
                />
                <InfoCard
                  icon={RotateCcw}
                  title={t("productDetail.returns")}
                  text={t("productDetail.returnsText")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-12 md:py-20">
          <div className="lg:col-span-4">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              {t("productDetail.overview")}
            </p>

            <h2 className="luxury-section-title text-white">
              {product.name}
            </h2>
          </div>

          <div className="space-y-5 text-[13px] leading-[22px] text-white/65 lg:col-span-8">
            <p>{t("productDetail.overviewDesc")}</p>

            <div className="grid gap-px border border-white/15 sm:grid-cols-3">
              <div className="p-5">
                <h3 className="product-card-title text-white">
                  {t("productDetail.brand")}
                </h3>
                <p className="mt-2 text-white/60">{product.brand}</p>
              </div>

              <div className="p-5">
                <h3 className="product-card-title text-white">
                  {t("productDetail.category")}
                </h3>
                <p className="mt-2 text-white/60">{product.category}</p>
              </div>

              <div className="p-5">
                <h3 className="product-card-title text-white">
                  {t("productDetail.seller")}
                </h3>
                <p className="mt-2 text-white/60">{product.storeName}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductRail
        eyebrow={t("productDetail.related")}
        title={t("productDetail.related")}
        description={t("productDetail.relatedDesc")}
        products={fallbackRelated}
      />

      <Footer />
    </main>
  );
}