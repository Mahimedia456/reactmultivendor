import { Link } from "react-router-dom";

const groups = [
  {
    title: "Fashion",
    links: [
      ["Men Fashion", "/shop?category=fashion"],
      ["Women Fashion", "/shop?category=fashion"],
      ["Shoes", "/shop?category=sports"],
      ["Bags", "/shop?category=fashion"],
    ],
  },
  {
    title: "Electronics",
    links: [
      ["Mobiles", "/shop?category=electronics"],
      ["Laptops", "/shop?category=electronics"],
      ["Accessories", "/shop?category=electronics"],
      ["Smart Watches", "/shop?category=electronics"],
    ],
  },
  {
    title: "Marketplace",
    links: [
      ["All Products", "/shop"],
      ["All Stores", "/stores"],
      ["Deals", "/deals"],
      ["Flash Sale", "/flash-sale"],
    ],
  },
];

export default function MegaMenu({ open }) {
  if (!open) return null;

  return (
    <div className="mega-menu-shadow absolute left-0 top-full z-40 w-full border-t border-black/10 bg-white text-black">
      <div className="site-container grid grid-cols-12 gap-8 py-7">
        {groups.map((group) => (
          <div key={group.title} className="col-span-2">
            <h3 className="mega-title mb-4 text-black">{group.title}</h3>
            <ul className="space-y-3">
              {group.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="mega-link text-black/55 transition hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-6 grid grid-cols-2 gap-4">
          <Link to="/stores" className="group relative min-h-[350px] overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=85"
              alt="Stores"
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="media-overlay-bottom absolute inset-0" />
            <div className="absolute bottom-5 left-5 right-5 text-center">
              <p className="mega-card-title text-white underline underline-offset-4">
                Explore Top Stores
              </p>
            </div>
          </Link>

          <Link to="/deals" className="group relative min-h-[350px] overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=85"
              alt="Deals"
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="media-overlay-bottom absolute inset-0" />
            <div className="absolute bottom-5 left-5 right-5 text-center">
              <p className="mega-card-title text-white underline underline-offset-4">
                Marketplace Deals
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}