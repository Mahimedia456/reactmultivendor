import { useState } from "react";
import { PackageCheck, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OrderTracking() {
  const { t } = useTranslation();
  const [orderNumber, setOrderNumber] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSearched(true);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[420px] overflow-hidden bg-black text-white md:min-h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85"
          alt="Order tracking"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.45))]" />

        <div className="site-container relative z-10 flex min-h-[420px] items-end pb-12 md:min-h-[520px] md:pb-14">
          <div className="max-w-[720px]">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              {t("tracking.eyebrow")}
            </p>

            <h1 className="home-hero-title">{t("tracking.title")}</h1>

            <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/76">
              {t("tracking.desc")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <form
            onSubmit={handleSubmit}
            className="border border-black/10 bg-white p-6 lg:col-span-7 md:p-8"
          >
            <label className="product-card-title text-black">
              {t("tracking.title")}
            </label>

            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
              <input
                value={orderNumber}
                onChange={(event) => setOrderNumber(event.target.value)}
                placeholder={t("tracking.placeholder")}
                className="h-12 border border-black/10 bg-black/[0.03] px-4 text-[13px] outline-none transition focus:border-black"
                required
              />

              <button type="submit" className="luxury-btn-dark luxury-btn">
                <Search size={16} />
                {t("tracking.button")}
              </button>
            </div>
          </form>

          <div className="border border-black/10 bg-black/[0.03] p-6 lg:col-span-5 md:p-8">
            <PackageCheck size={32} strokeWidth={1.5} />

            <h2 className="product-card-title mt-5 text-black">
              {t("tracking.resultTitle")}
            </h2>

            {searched ? (
              <div className="mt-4 space-y-3 text-[13px] leading-[22px] text-black/65">
                <p>
                  <strong>Order:</strong> {orderNumber}
                </p>
                <p>
                  <strong>Status:</strong> {t("tracking.status")}
                </p>
                <p>{t("tracking.message")}</p>
              </div>
            ) : (
              <p className="mt-4 text-[13px] leading-[22px] text-black/55">
                {t("tracking.desc")}
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}