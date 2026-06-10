import { useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountHero from "../components/account/AccountHero";
import AccountFormInput from "../components/account/AccountFormInput";

const VENDOR_LOGIN_URL = "https://reactmultivendor-admin.vercel.app/";

export default function AccountLogin() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(t("account.messageApi"));
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <AccountHero
        eyebrow="Customer Account"
        title={t("account.loginTitle")}
        description={t("account.loginDesc")}
      />

      <section className="bg-white">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-5">
            <p className="font-heading text-[13px] uppercase tracking-[0.16em] text-brand-primary">
              {t("account.welcome")}
            </p>

            <h2 className="luxury-section-title mt-3">{t("account.login")}</h2>

            <div className="mt-8 border border-black/10 bg-black/[0.03] p-6">
              <Store size={26} strokeWidth={1.5} />

              <h3 className="product-card-title mt-4 text-black">
                {t("vendor.login")}
              </h3>

              <p className="mt-3 text-[13px] leading-[22px] text-black/60">
                Vendor accounts are managed in the seller/admin panel.
              </p>

              <a
                href={VENDOR_LOGIN_URL}
                target="_blank"
                rel="noreferrer"
                className="luxury-btn-dark luxury-btn mt-5"
              >
                {t("vendor.login")}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-black/10 p-6 lg:col-span-7 md:p-8"
          >
            <div className="grid gap-5">
              <AccountFormInput
                label={t("account.email")}
                type="email"
                required
              />

              <AccountFormInput
                label={t("account.password")}
                type="password"
                required
              />

              <div className="flex flex-wrap justify-between gap-4">
                <Link to="/account/lost-password" className="luxury-link text-black">
                  {t("account.lostPassword")}
                </Link>

                <Link to="/account/register" className="luxury-link text-black">
                  {t("account.createAccount")}
                </Link>
              </div>

              {message ? (
                <p className="border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                  {message}
                </p>
              ) : null}

              <button type="submit" className="luxury-btn-dark luxury-btn">
                {t("account.login")}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}