import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

export default function Wishlist() {
  const { t } = useTranslation();
  const { wishlist } = useStore();

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <h1 className="home-hero-title">{t("cart.wishlistTitle")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("cart.wishlistDesc")}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container py-12 md:py-16">
          {wishlist.length ? (
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-black/10 p-10 text-center">
              <h2 className="luxury-section-title">
                {t("cart.emptyWishlist")}
              </h2>
              <Link to="/shop" className="luxury-btn-dark luxury-btn mt-6">
                {t("cart.continueShopping")}
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}