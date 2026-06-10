import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Store } from "lucide-react";
import { formatMoney } from "../utils/currency";
import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const item = {
    id: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image || product.thumbnail,
    hoverImage: product.hoverImage || product.image || product.thumbnail,
    price: product.price,
    oldPrice: product.oldPrice,
    badge: product.badge,
    storeName: product.storeName || "Mahi Store Seller",
    rating: product.rating || 4.8,
    sold: product.sold || 0,
  };

  const isWishlisted = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

  return (
    <article className="product-card group bg-white text-black">
      <div className="relative">
        <Link to={`/product/${item.slug}`} className="block">
          <div className="product-card-media relative min-h-[380px] overflow-hidden bg-[#f3f3f3] md:min-h-[480px]">
            {item.badge ? (
              <span className="absolute left-5 top-5 z-20 bg-white px-3 py-1 product-badge-text text-black shadow-sm">
                {item.badge}
              </span>
            ) : null}

            <img
              src={item.image}
              alt={item.name}
              className="product-main-image product-image-transition absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <img
              src={item.hoverImage}
              alt={`${item.name} hover`}
              className="product-hover-image product-image-transition absolute inset-0 h-full w-full object-cover opacity-0"
              loading="lazy"
            />

            <div className="product-hover-shade absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 z-30 translate-y-6 bg-white px-5 py-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="product-card-title text-black">{item.name}</h3>

              <p className="mt-3 flex items-center gap-2 product-card-desc text-black/58">
                <Store size={14} /> {item.storeName}
              </p>

              <div className="mt-4 flex items-center gap-3 product-card-desc text-black/58">
                <span className="inline-flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> {item.rating}
                </span>
                <span>{item.sold} sold</span>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_48px] gap-2">
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    addToCart(product);
                  }}
                  className="flex h-12 items-center justify-center gap-2 bg-black product-action-text text-white transition hover:bg-brand-primary hover:text-black"
                >
                  <ShoppingBag size={16} />
                  Add To Cart
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    toggleWishlist(product);
                  }}
                  className={`grid h-12 place-items-center border border-black/15 transition ${
                    isWishlisted
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
          </div>
        </Link>

        <div className="min-h-[120px] border-b border-black/10 bg-white px-5 py-5">
          <Link to={`/product/${item.slug}`}>
            <h3 className="product-card-title text-black">{item.name}</h3>
          </Link>

          <p className="mt-2 product-card-desc text-black/50">
            Sold by {item.storeName}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <span className="product-card-price text-black">
              {formatMoney(item.price)}
            </span>

            {item.oldPrice ? (
              <span className="text-[12px] text-black/35 line-through">
                {formatMoney(item.oldPrice)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}