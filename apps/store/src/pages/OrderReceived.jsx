import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OrderReceived() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-white">
        <div className="site-container flex min-h-[560px] items-center justify-center py-20 text-center">
          <div className="max-w-2xl">
            <CheckCircle2 className="mx-auto mb-6" size={56} strokeWidth={1.5} />

            <h1 className="luxury-section-title">
              {t("checkout.successTitle")}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-[22px] text-black/60">
              {t("checkout.successDesc")}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link to="/shop" className="luxury-btn-dark luxury-btn">
                {t("cart.continueShopping")}
              </Link>

              <Link to="/account/orders" className="luxury-btn text-black">
                View Orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}