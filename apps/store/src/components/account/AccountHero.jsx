export default function AccountHero({ eyebrow, title, description }) {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-black text-white md:min-h-[460px]">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85"
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />

      <div className="absolute inset-0 bg-black/62" />

      <div className="site-container relative z-10 flex min-h-[360px] items-end pb-12 md:min-h-[460px]">
        <div className="max-w-[720px]">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {eyebrow}
          </p>

          <h1 className="home-hero-title">{title}</h1>

          {description ? (
            <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/72">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}