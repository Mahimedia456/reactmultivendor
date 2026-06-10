import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShippingPolicy() {
  const { t } = useTranslation();

  const sections = [
    ["pages.shipping.section1", "pages.shipping.section1Text"],
    ["pages.shipping.section2", "pages.shipping.section2Text"],
    ["pages.shipping.section3", "pages.shipping.section3Text"],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("pages.shipping.eyebrow")}
          </p>
          <h1 className="home-hero-title">{t("pages.shipping.title")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("pages.shipping.desc")}
          </p>
        </div>
      </section>

      <section className="site-container py-12 md:py-16">
        <div className="space-y-6">
          {sections.map(([title, text]) => (
            <div key={title} className="border border-black/10 p-6">
              <h2 className="product-card-title">{t(title)}</h2>
              <p className="mt-3 text-[13px] leading-[22px] text-black/60">
                {t(text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}