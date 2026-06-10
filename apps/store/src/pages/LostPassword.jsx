import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountHero from "../components/account/AccountHero";
import AccountFormInput from "../components/account/AccountFormInput";

export default function LostPassword() {
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
        title={t("account.lostTitle")}
        description={t("account.lostDesc")}
      />

      <section className="bg-white">
        <div className="site-container py-12 md:py-16">
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl border border-black/10 p-6 md:p-8">
            <AccountFormInput label={t("account.email")} type="email" required />

            {message && (
              <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                {message}
              </p>
            )}

            <button type="submit" className="luxury-btn-dark luxury-btn mt-7">
              {t("account.sendReset")}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}