import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, MapPin, User, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../Header";
import Footer from "../Footer";
import AccountHero from "./AccountHero";

export default function AccountLayout({ title, description, children }) {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    [t("account.dashboard"), "/account", LayoutDashboard],
    [t("account.orders"), "/account/orders", Package],
    [t("account.addresses"), "/account/addresses", MapPin],
    [t("account.details"), "/account/details", User],
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <AccountHero
        eyebrow="Customer Account"
        title={title}
        description={description}
      />

      <section className="bg-white">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[280px_1fr] md:py-16">
          <aside className="border border-black/10 bg-white p-4">
            <nav className="space-y-2">
              {links.map(([label, to, Icon]) => {
                const active = location.pathname === to;

                return (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-3 px-4 py-3 product-card-title transition ${
                      active
                        ? "bg-black text-white"
                        : "text-black/65 hover:bg-black/[0.04] hover:text-black"
                    }`}
                  >
                    <Icon size={17} />
                    {label}
                  </Link>
                );
              })}

              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3 product-card-title text-black/50"
              >
                <LogOut size={17} />
                {t("account.logout")}
              </button>
            </nav>
          </aside>

          <div>{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}