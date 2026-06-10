import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccountLayout from "../components/account/AccountLayout";
import AccountFormInput from "../components/account/AccountFormInput";
import { accountUser } from "../data/accountData";

export default function AccountDetails() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: accountUser.firstName,
    lastName: accountUser.lastName,
    email: accountUser.email,
    phone: accountUser.phone,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    setMessage(t("account.messageApi"));
  }

  return (
    <AccountLayout
      title={t("account.details")}
      description="Update customer profile information and password."
    >
      <form onSubmit={handleSubmit} className="border border-black/10 bg-white p-6 md:p-8">
        <h2 className="product-card-title text-black">Personal Details</h2>

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
            label={t("account.email")}
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
          />

          <AccountFormInput
            label={t("account.phone")}
            name="phone"
            value={form.phone}
            onChange={updateField}
          />
        </div>

        <div className="my-8 border-t border-black/10 pt-8">
          <h2 className="product-card-title text-black">Password Change</h2>
        </div>

        <div className="grid gap-5">
          <AccountFormInput
            label={t("account.currentPassword")}
            name="currentPassword"
            type="password"
            value={form.currentPassword}
            onChange={updateField}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <AccountFormInput
              label={t("account.newPassword")}
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={updateField}
            />

            <AccountFormInput
              label={t("account.confirmPassword")}
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={updateField}
            />
          </div>
        </div>

        {message ? (
          <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
            {message}
          </p>
        ) : null}

        <button type="submit" className="luxury-btn-dark luxury-btn mt-7">
          {t("account.saveChanges")}
        </button>
      </form>
    </AccountLayout>
  );
}