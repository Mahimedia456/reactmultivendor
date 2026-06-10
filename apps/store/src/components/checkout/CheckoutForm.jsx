import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStore } from "../../context/StoreContext";

export default function CheckoutForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cart, totals, clearCart } = useStore();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    notes: "",
  });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const order = {
      id: `MS-${Date.now()}`,
      customer: form,
      items: cart,
      totals,
      paymentMethod: "cod",
      status: "processing",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("mahi_last_order", JSON.stringify(order));
    clearCart();
    navigate("/order-received");
  }

  const inputClass =
    "h-12 w-full border border-black/10 bg-black/[0.03] px-4 text-[13px] outline-none transition focus:border-black";

  return (
    <form onSubmit={handleSubmit} className="border border-black/10 bg-white p-6 md:p-8">
      <h2 className="product-card-title text-black">
        {t("checkout.billingDetails")}
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <input className={inputClass} name="firstName" placeholder={t("checkout.firstName")} value={form.firstName} onChange={updateField} required />
        <input className={inputClass} name="lastName" placeholder={t("checkout.lastName")} value={form.lastName} onChange={updateField} required />
        <input className={inputClass} name="email" type="email" placeholder={t("checkout.email")} value={form.email} onChange={updateField} required />
        <input className={inputClass} name="phone" placeholder={t("checkout.phone")} value={form.phone} onChange={updateField} required />
        <input className={`${inputClass} md:col-span-2`} name="address" placeholder={t("checkout.address")} value={form.address} onChange={updateField} required />
        <input className={inputClass} name="city" placeholder={t("checkout.city")} value={form.city} onChange={updateField} required />
        <input className={inputClass} name="province" placeholder={t("checkout.province")} value={form.province} onChange={updateField} required />

        <textarea
          name="notes"
          placeholder={t("checkout.notes")}
          value={form.notes}
          onChange={updateField}
          rows="5"
          className="w-full border border-black/10 bg-black/[0.03] px-4 py-3 text-[13px] outline-none transition focus:border-black md:col-span-2"
        />
      </div>

      <div className="mt-6 border border-black/10 bg-black/[0.03] p-4">
        <p className="product-card-title text-black">{t("checkout.cod")}</p>
      </div>

      <button type="submit" className="luxury-btn-dark luxury-btn mt-7 w-full">
        {t("checkout.placeOrder")}
      </button>
    </form>
  );
}