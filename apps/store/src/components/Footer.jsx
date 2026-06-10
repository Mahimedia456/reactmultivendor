import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="site-container border-t border-black/10 py-10 text-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="luxury-btn text-black"
        >
          Back To Top
        </button>
      </div>

      <div className="site-container grid gap-10 border-t border-black/10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <img src={logo} alt="Mahi Store" className="mb-8 h-[32px] w-auto object-contain" />
          <h2 className="luxury-section-title max-w-xl">
            One Marketplace. Many Trusted Sellers.
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-[20px] text-black/65">
            Mahi Store connects customers with verified vendors, curated products and marketplace deals.
          </p>
        </div>

        {[
          ["Customer Service", [["FAQ", "/faq"], ["Track Order", "/order-tracking"], ["Returns", "/returns-exchanges"], ["Contact", "/contact-us"]]],
          ["Marketplace", [["All Products", "/shop"], ["Stores", "/stores"], ["Deals", "/deals"], ["Become Seller", "/vendor/register"]]],
          ["Company", [["About", "/about-us"], ["Privacy", "/privacy-policy"], ["Terms", "/terms-of-services"], ["Shipping", "/shipping-policy"]]],
        ].map(([title, links]) => (
          <div key={title} className="md:col-span-2">
            <h3 className="mb-5 product-card-title text-black/60">{title}</h3>
            <ul className="space-y-3">
              {links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="mega-link text-black/60 transition hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h3 className="mb-5 product-card-title text-black/60">Contact</h3>
          <div className="space-y-3 text-[13px] leading-[20px] text-black/65">
            <p>+92 308 2544148</p>
            <p>support@mahistore.com</p>
            <p>Pakistan</p>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col gap-4 border-t border-black/10 py-5 text-[12px] text-black/55 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Mahi Store. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-of-services">Terms</Link>
          <Link to="/shipping-policy">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}