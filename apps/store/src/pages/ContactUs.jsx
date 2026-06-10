import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const inputClass =
    "h-12 w-full border border-black/10 bg-black/[0.03] px-4 text-[13px] outline-none transition focus:border-black";

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(t("pages.contact.success"));
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-black py-20 text-white">
        <div className="site-container">
          <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
            {t("pages.contact.eyebrow")}
          </p>
          <h1 className="home-hero-title">{t("pages.contact.title")}</h1>
          <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/70">
            {t("pages.contact.desc")}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <form onSubmit={handleSubmit} className="border border-black/10 p-6 lg:col-span-8 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input className={inputClass} placeholder={t("pages.contact.name")} required />
              <input className={inputClass} type="email" placeholder={t("pages.contact.email")} required />
              <input className={`${inputClass} md:col-span-2`} placeholder={t("pages.contact.phone")} />
              <textarea
                className="w-full border border-black/10 bg-black/[0.03] px-4 py-3 text-[13px] outline-none transition focus:border-black md:col-span-2"
                rows="6"
                placeholder={t("pages.contact.message")}
                required
              />
            </div>

            {message ? (
              <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                {message}
              </p>
            ) : null}

            <button type="submit" className="luxury-btn-dark luxury-btn mt-7">
              {t("pages.contact.send")}
            </button>
          </form>

          <aside className="border border-black/10 p-6 lg:col-span-4 md:p-8">
            <h2 className="product-card-title">{t("pages.contact.support")}</h2>
            <div className="mt-5 space-y-3 text-[13px] leading-[22px] text-black/62">
              <p>support@mahistore.com</p>
              <p>+92 308 2544148</p>
              <p>{t("pages.contact.address")}</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}