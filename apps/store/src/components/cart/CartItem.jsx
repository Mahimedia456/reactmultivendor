import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatMoney } from "../../utils/currency";
import { useStore } from "../../context/StoreContext";

export default function CartItem({ item }) {
  const { t } = useTranslation();
  const { updateQuantity, removeFromCart } = useStore();

  return (
    <div className="grid gap-5 border-b border-black/10 py-6 md:grid-cols-[120px_1fr_auto]">
      <Link to={`/product/${item.slug}`} className="h-[140px] bg-black/[0.04]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </Link>

      <div>
        <Link to={`/product/${item.slug}`}>
          <h3 className="product-card-title text-black">{item.name}</h3>
        </Link>

        <p className="mt-2 product-card-desc text-black/55">
          Sold by {item.storeName}
        </p>

        <p className="mt-3 product-card-price text-black">
          {formatMoney(item.price)}
        </p>

        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="mt-4 inline-flex items-center gap-2 text-[13px] text-black/55 hover:text-black"
        >
          <Trash2 size={15} />
          {t("cart.remove")}
        </button>
      </div>

      <div className="flex items-start gap-3">
        <label className="product-card-title text-black/60">
          {t("cart.qty")}
        </label>

        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(event) => updateQuantity(item.id, event.target.value)}
          className="h-11 w-20 border border-black/10 px-3 text-center outline-none focus:border-black"
        />
      </div>
    </div>
  );
}