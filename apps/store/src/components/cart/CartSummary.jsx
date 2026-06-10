import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatMoney } from "../../utils/currency";
import { useStore } from "../../context/StoreContext";

export default function CartSummary({ checkout = true }) {
  const { t } = useTranslation();
  const { totals } = useStore();

  return (
    <aside className="border border-black/10 bg-white p-6">
      <h2 className="product-card-title text-black">
        {t("cart.orderSummary")}
      </h2>

      <div className="mt-6 space-y-4 text-[13px] text-black/65">
        <div className="flex justify-between">
          <span>{t("cart.subtotal")}</span>
          <span>{formatMoney(totals.subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>{t("cart.delivery")}</span>
          <span>{formatMoney(totals.delivery)}</span>
        </div>

        <div className="border-t border-black/10 pt-4 product-card-title flex justify-between text-black">
          <span>{t("cart.total")}</span>
          <span>{formatMoney(totals.total)}</span>
        </div>
      </div>

      {checkout && (
        <Link to="/checkout" className="luxury-btn-dark luxury-btn mt-7 w-full">
          {t("cart.checkout")}
        </Link>
      )}
    </aside>
  );
}