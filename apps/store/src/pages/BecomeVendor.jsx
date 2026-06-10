import { Link } from "react-router-dom";
import { BadgeCheck, Boxes, CircleDollarSign, Store } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VENDOR_LOGIN_URL = "https://reactmultivendor-admin.vercel.app/";

export default function BecomeVendor() {
  const { t } = useTranslation();

  const benefits = [
    ["vendor.benefit1", "vendor.benefit1Text", Store],
    ["vendor.benefit2", "vendor.benefit2Text", Boxes],
    ["vendor.benefit3", "vendor.benefit3Text", CircleDollarSign],
  ];

  const steps = [
    ["01", "vendor.step1", "vendor.step1Text"],
    ["02", "vendor.step2", "vendor.step2Text"],
    ["03", "vendor.step3", "vendor.step3Text"],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white md:min-h-[640px]">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85"
          alt="Become a vendor"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.10)_56%,rgba(0,0,0,0.50))]" />

        <div className="site-container relative z-10 flex min-h-[520px] items-end pb-12 md:min-h-[640px] md:pb-16">
          <div className="max-w-[760px]">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              {t("vendor.eyebrow")}
            </p>

            <h1 className="home-hero-title">{t("vendor.title")}</h1>

            <p className="mt-4 max-w-xl text-[13px] leading-[22px] text-white/76">
              {t("vendor.desc")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={VENDOR_LOGIN_URL}
                target="_blank"
                rel="noreferrer"
                className="luxury-btn-light luxury-btn"
              >
                {t("vendor.cta")}
              </a>

              <Link to="/contact-us" className="luxury-btn text-white">
                {t("vendor.apply")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-px border-b border-black/10 md:grid-cols-3">
          {benefits.map(([title, text, Icon]) => (
            <div key={title} className="border-black/10 p-7 md:border-r last:border-r-0">
              <Icon size={28} strokeWidth={1.5} />
              <h3 className="product-card-title mt-5 text-black">
                {t(title)}
              </h3>
              <p className="mt-3 text-[13px] leading-[22px] text-black/60">
                {t(text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <p className="mb-3 font-heading text-[13px] uppercase tracking-[0.4px] text-brand-primary">
              Vendor Journey
            </p>

            <h2 className="luxury-section-title text-white">
              Start Selling In Three Steps
            </h2>
          </div>

          <div className="grid gap-px md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="border border-white/15 bg-white/8 p-7">
                <p className="product-card-title text-brand-primary">
                  {number}
                </p>
                <h3 className="product-card-title mt-4 text-white">
                  {t(title)}
                </h3>
                <p className="mt-3 text-[13px] leading-[22px] text-white/62">
                  {t(text)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={VENDOR_LOGIN_URL}
              target="_blank"
              rel="noreferrer"
              className="luxury-btn-light luxury-btn"
            >
              {t("vendor.cta")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}