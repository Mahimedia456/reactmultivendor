import { Link, useParams } from "react-router-dom";
import { PackageCheck, Truck, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";
import AccountLayout from "../components/account/AccountLayout";
import { accountOrders, billingAddress, shippingAddress } from "../data/accountData";
import { mockProducts } from "../data/mockProducts";
import { formatMoney } from "../utils/currency";

export default function AccountOrderDetail() {
  const { t } = useTranslation();
  const { orderId } = useParams();

  const order = accountOrders.find((item) => item.id === orderId) || accountOrders[0];
  const products = mockProducts.slice(0, order.items);

  const timeline = [
    ["Order Placed", "Your order was received successfully.", PackageCheck],
    ["Processing", "Vendor is preparing your products.", CreditCard],
    ["Shipping", "Courier tracking will connect after backend setup.", Truck],
  ];

  return (
    <AccountLayout
      title={`${t("account.order")} ${order.id}`}
      description="Detailed order view for customer marketplace purchases."
    >
      <div className="grid gap-8">
        <div className="grid gap-5 md:grid-cols-4">
          <div className="border border-black/10 bg-white p-5">
            <p className="product-card-title text-black/55">{t("account.date")}</p>
            <p className="mt-2 text-[13px] text-black/65">{order.date}</p>
          </div>

          <div className="border border-black/10 bg-white p-5">
            <p className="product-card-title text-black/55">{t("account.status")}</p>
            <p className="mt-2 text-[13px] text-black/65">{order.status}</p>
          </div>

          <div className="border border-black/10 bg-white p-5">
            <p className="product-card-title text-black/55">{t("account.total")}</p>
            <p className="mt-2 text-[13px] text-black/65">{formatMoney(order.total)}</p>
          </div>

          <div className="border border-black/10 bg-white p-5">
            <p className="product-card-title text-black/55">{t("account.items")}</p>
            <p className="mt-2 text-[13px] text-black/65">{order.items}</p>
          </div>
        </div>

        <div className="border border-black/10 bg-white">
          <div className="border-b border-black/10 p-6">
            <h2 className="product-card-title text-black">Order Items</h2>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="grid gap-5 border-b border-black/10 p-5 last:border-b-0 md:grid-cols-[96px_1fr_auto]"
            >
              <Link to={`/product/${product.slug}`} className="h-[110px] bg-black/[0.04]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div>
                <h3 className="product-card-title text-black">{product.name}</h3>
                <p className="mt-2 product-card-desc text-black/55">
                  Sold by {product.storeName}
                </p>
              </div>

              <p className="product-card-price text-black">
                {formatMoney(product.price)}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map(([title, text, Icon]) => (
            <div key={title} className="border border-black/10 bg-white p-6">
              <Icon size={24} strokeWidth={1.5} />
              <h3 className="product-card-title mt-4 text-black">{title}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-black/55">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[ [t("account.billingAddress"), billingAddress], [t("account.shippingAddress"), shippingAddress] ].map(
            ([title, address]) => (
              <div key={title} className="border border-black/10 bg-white p-6">
                <h3 className="product-card-title text-black">{title}</h3>

                <div className="mt-4 space-y-2 text-[13px] leading-[22px] text-black/60">
                  <p>{address.firstName} {address.lastName}</p>
                  <p>{address.street}</p>
                  <p>{address.city}, {address.province} {address.postcode}</p>
                  <p>{address.country}</p>
                  <p>{address.phone}</p>
                  <p>{address.email}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </AccountLayout>
  );
}