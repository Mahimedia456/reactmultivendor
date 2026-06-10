import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, Store, User, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import MegaMenu from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useStore } from "../context/StoreContext";
import logo from "../assets/logo.png";

const VENDOR_LOGIN_URL = "https://reactmultivendor-admin.vercel.app/";

export default function Header({ variant = "dark" }) {
  const { t } = useTranslation();
  const { cart, wishlist } = useStore();

  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isWhite = variant === "white" || scrolled;
  const isDark = !isWhite;

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  const wishlistCount = wishlist.length;

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.shop"), to: "/shop", hasMega: true },
    { label: t("nav.stores"), to: "/stores" },
    { label: t("nav.deals"), to: "/deals" },
    { label: t("vendor.nav"), to: "/become-vendor" },
    { label: t("nav.contact"), to: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-black py-2 text-white">
        <div className="site-container flex flex-col items-center justify-between gap-2 text-center md:flex-row">
          <p className="header-announcement-text">
            Free delivery on selected stores • Trusted multivendor marketplace
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/become-vendor"
              className="header-announcement-text underline underline-offset-4"
            >
              {t("vendor.topBar")}
            </Link>

            <a
              href={VENDOR_LOGIN_URL}
              target="_blank"
              rel="noreferrer"
              className="header-announcement-text text-brand-primary underline underline-offset-4"
            >
              {t("vendor.login")}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          isWhite
            ? "border-black/10 bg-white text-black"
            : "border-white/10 bg-black text-white"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="site-container flex h-[56px] items-center justify-between gap-6 md:h-[62px]">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Mahi Store"
              className={`h-[28px] w-auto object-contain transition duration-300 ${
                isDark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <nav className="hidden flex-1 items-center gap-[22px] lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onMouseEnter={() => setMegaOpen(Boolean(item.hasMega))}
                className="header-nav-link transition hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button type="button" aria-label="Search">
              <Search size={19} strokeWidth={1.45} />
            </button>

            <Link to="/stores" aria-label="Stores">
              <Store size={19} strokeWidth={1.45} />
            </Link>

            <Link to="/account/login" aria-label="Account">
              <User size={19} strokeWidth={1.45} />
            </Link>

            <Link to="/wishlist" className="relative" aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.45} />
              {wishlistCount > 0 ? (
                <span className="absolute -right-2 -top-2 grid h-[15px] w-[15px] place-items-center rounded-full bg-brand-primary text-[9px] font-bold text-black">
                  {wishlistCount}
                </span>
              ) : null}
            </Link>

            <Link to="/cart" className="relative" aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.45} />
              <span className="absolute -right-2 -top-2 grid h-[15px] w-[15px] place-items-center rounded-full bg-brand-primary text-[9px] font-bold text-black">
                {cartCount}
              </span>
            </Link>

            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <MegaMenu open={megaOpen} />

        {mobileOpen ? (
          <div
            className={
              isWhite
                ? "border-t border-black/10 bg-white px-5 py-6 text-black"
                : "border-t border-white/10 bg-black px-5 py-6 text-white"
            }
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="header-nav-link"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={VENDOR_LOGIN_URL}
                target="_blank"
                rel="noreferrer"
                className="header-nav-link text-brand-primary"
              >
                {t("vendor.login")}
              </a>
            </nav>

            <div className="mt-8 flex items-center gap-5">
              <Link to="/stores" onClick={() => setMobileOpen(false)}>
                <Store size={20} strokeWidth={1.45} />
              </Link>

              <Link to="/account/login" onClick={() => setMobileOpen(false)}>
                <User size={20} strokeWidth={1.45} />
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="relative"
              >
                <Heart size={20} strokeWidth={1.45} />
                {wishlistCount > 0 ? (
                  <span className="absolute -right-2 -top-2 grid h-[15px] w-[15px] place-items-center rounded-full bg-brand-primary text-[9px] font-bold text-black">
                    {wishlistCount}
                  </span>
                ) : null}
              </Link>

              <Link
                to="/cart"
                onClick={() => setMobileOpen(false)}
                className="relative"
              >
                <ShoppingBag size={20} strokeWidth={1.45} />
                <span className="absolute -right-2 -top-2 grid h-[15px] w-[15px] place-items-center rounded-full bg-brand-primary text-[9px] font-bold text-black">
                  {cartCount}
                </span>
              </Link>

              <LanguageSwitcher />
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}