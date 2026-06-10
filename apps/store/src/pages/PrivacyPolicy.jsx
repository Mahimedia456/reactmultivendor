import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const sections = [
    ["pages.privacy.section1", "pages.privacy.section1Text"],
    ["pages.privacy.section2", "pages.privacy.section2Text"],
    ["pages.privacy.section3", "pages.privacy.section3Text"],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("pages.privacy.eyebrow")}
          </p>
          <h1 className="home-hero-title">{t("pages.privacy.title")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("pages.privacy.desc")}
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