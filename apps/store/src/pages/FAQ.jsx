import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    ["pages.faq.q1", "pages.faq.a1"],
    ["pages.faq.q2", "pages.faq.a2"],
    ["pages.faq.q3", "pages.faq.a3"],
    ["pages.faq.q4", "pages.faq.a4"],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("pages.faq.eyebrow")}
          </p>
          <h1 className="home-hero-title">{t("pages.faq.title")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("pages.faq.desc")}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container py-12 md:py-16">
          <div className="grid gap-px border border-black/10">
            {faqs.map(([q, a]) => (
              <div key={q} className="border-b border-black/10 p-6 last:border-b-0">
                <h2 className="product-card-title text-black">{t(q)}</h2>
                <p className="mt-3 text-[13px] leading-[22px] text-black/60">
                  {t(a)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}