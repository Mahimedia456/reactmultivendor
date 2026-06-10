import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountHero from "../components/account/AccountHero";
import AccountFormInput from "../components/account/AccountFormInput";

export default function AccountRegister() {
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
        title={t("account.registerTitle")}
        description={t("account.registerDesc")}
      />

      <section className="bg-white">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-5">
            <p className="font-heading text-[13px] uppercase tracking-[0.16em] text-brand-primary">
              New Customer
            </p>
            <h2 className="luxury-section-title mt-3">
              {t("account.createAccount")}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="border border-black/10 p-6 lg:col-span-7 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <AccountFormInput label={t("account.firstName")} required />
              <AccountFormInput label={t("account.lastName")} required />
              <AccountFormInput label={t("account.email")} type="email" required />
              <AccountFormInput label={t("account.phone")} />
              <AccountFormInput label={t("account.password")} type="password" required />
              <AccountFormInput label={t("account.confirmPassword")} type="password" required />
            </div>

            {message && (
              <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                {message}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <button type="submit" className="luxury-btn-dark luxury-btn">
                {t("account.register")}
              </button>

              <Link to="/account/login" className="luxury-link text-black">
                {t("account.alreadyRegistered")}
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}