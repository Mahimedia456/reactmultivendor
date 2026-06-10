import { useTranslation } from "react-i18next";

export default function StoreHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1800&q=85"
        alt="Marketplace stores"
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.45))]" />

      <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
        <div className="max-w-[720px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("stores.heroEyebrow")}
          </p>

          <h1 className="home-hero-title">{t("stores.heroTitle")}</h1>

          <p className="mt-3 max-w-[540px] text-[13px] leading-[22px] text-white/76">
            {t("stores.heroSubtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}