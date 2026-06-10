import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccountLayout from "../components/account/AccountLayout";
import AccountFormInput from "../components/account/AccountFormInput";
import { billingAddress, shippingAddress } from "../data/accountData";

function AddressForm({ title, initialData }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialData);
  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(t("account.messageApi"));
  }

  return (
    <form onSubmit={handleSubmit} className="border border-black/10 bg-white p-6 md:p-8">
      <h2 className="product-card-title text-black">{title}</h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <AccountFormInput
          label={t("account.firstName")}
          name="firstName"
          value={form.firstName}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label={t("account.lastName")}
          name="lastName"
          value={form.lastName}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label={t("account.country")}
          name="country"
          value={form.country}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label={t("account.phone")}
          name="phone"
          value={form.phone}
          onChange={updateField}
        />

        <div className="md:col-span-2">
          <AccountFormInput
            label={t("account.street")}
            name="street"
            value={form.street}
            onChange={updateField}
            required
          />
        </div>

        <AccountFormInput
          label={t("account.city")}
          name="city"
          value={form.city}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label={t("account.province")}
          name="province"
          value={form.province}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label={t("account.postcode")}
          name="postcode"
          value={form.postcode}
          onChange={updateField}
        />

        <AccountFormInput
          label={t("account.email")}
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          required
        />
      </div>

      {message ? (
        <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
          {message}
        </p>
      ) : null}

      <button type="submit" className="luxury-btn-dark luxury-btn mt-7">
        {t("account.saveAddress")}
      </button>
    </form>
  );
}

export default function AccountAddresses() {
  const { t } = useTranslation();

  return (
    <AccountLayout
      title={t("account.addresses")}
      description="Manage billing and shipping addresses for marketplace orders."
    >
      <div className="grid gap-8">
        <AddressForm title={t("account.billingAddress")} initialData={billingAddress} />
        <AddressForm title={t("account.shippingAddress")} initialData={shippingAddress} />
      </div>
    </AccountLayout>
  );
}