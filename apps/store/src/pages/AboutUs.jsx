import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  const { t } = useTranslation();

  const values = [
    ["pages.about.value1", "pages.about.value1Text"],
    ["pages.about.value2", "pages.about.value2Text"],
    ["pages.about.value3", "pages.about.value3Text"],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85"
          alt="About Mahi Store"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.45))]" />

        <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
          <div className="max-w-[720px]">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              {t("pages.about.eyebrow")}
            </p>
            <h1 className="home-hero-title">{t("pages.about.title")}</h1>
            <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/76">
              {t("pages.about.desc")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-12 md:py-20">
          <div className="lg:col-span-4">
            <h2 className="luxury-section-title">{t("pages.about.storyTitle")}</h2>
          </div>

          <div className="text-[13px] leading-[22px] text-black/62 lg:col-span-8">
            <p>{t("pages.about.storyText")}</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container grid gap-px py-14 md:grid-cols-3 md:py-20">
          {values.map(([title, text]) => (
            <div key={title} className="border border-white/15 bg-white/8 p-7">
              <h3 className="product-card-title text-white">{t(title)}</h3>
              <p className="mt-4 text-[13px] leading-[20px] text-white/62">
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