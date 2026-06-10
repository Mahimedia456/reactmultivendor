import { useTranslation } from "react-i18next";

export default function CategoryHero({ category }) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[420px] overflow-hidden bg-black text-white md:min-h-[520px]">
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.45))]" />

      <div className="site-container relative z-10 flex min-h-[420px] items-end pb-12 md:min-h-[520px] md:pb-14">
        <div className="max-w-[700px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("category.heroEyebrow")}
          </p>

          <h1 className="home-hero-title">{category.name}</h1>

          <p className="mt-3 max-w-[520px] text-[13px] leading-[22px] text-white/76">
            {t("category.heroSubtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}