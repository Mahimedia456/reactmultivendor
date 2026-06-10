import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { t } = useTranslation();
  const { cart } = useStore();

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <h1 className="home-hero-title">{t("cart.cartTitle")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("cart.cartDesc")}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[1fr_360px] md:py-16">
          <div>
            {cart.length ? (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className="border border-black/10 p-10 text-center">
                <h2 className="luxury-section-title">{t("cart.emptyCart")}</h2>
                <Link to="/shop" className="luxury-btn-dark luxury-btn mt-6">
                  {t("cart.continueShopping")}
                </Link>
              </div>
            )}
          </div>

          <CartSummary />
        </div>
      </section>

      <Footer />
    </main>
  );
}