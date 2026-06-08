import { KeyRound, Mail, Save, ShieldCheck, Store, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorSettingsPage() {
  const { t } = useTranslation();

  const preferences = [
    ["vendorPanel.settings.orderNotifications", "vendorPanel.settings.orderNotificationsDesc"],
    ["vendorPanel.settings.lowStockAlerts", "vendorPanel.settings.lowStockAlertsDesc"],
    ["vendorPanel.settings.payoutUpdates", "vendorPanel.settings.payoutUpdatesDesc"],
    ["vendorPanel.settings.reviewAlerts", "vendorPanel.settings.reviewAlertsDesc"],
  ];

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.settings.title")}
        description={t("vendorPanel.settings.description")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Save size={17} />
            {t("vendorPanel.settings.saveSettings")}
          </button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amazon-navy text-brand-500">
              <UserRound size={28} />
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
              {t("vendorPanel.settings.vendorAccount")}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {t("vendorPanel.settings.accountDescription")}
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                vendor@mahistore.com
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck size={16} />
                {t("vendorPanel.settings.verifiedVendor")}
              </p>
              <p className="flex items-center gap-2">
                <Store size={16} />
                Mahi Vendor Store
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.settings.security")}
            </h3>

            <div className="mt-4 space-y-4">
              <input
                className="ms-input"
                type="password"
                placeholder={t("vendorPanel.settings.currentPassword")}
              />
              <input
                className="ms-input"
                type="password"
                placeholder={t("vendorPanel.settings.newPassword")}
              />
              <input
                className="ms-input"
                type="password"
                placeholder={t("vendorPanel.settings.confirmPassword")}
              />
            </div>

            <button className="ms-btn-soft mt-5 inline-flex items-center gap-2">
              <KeyRound size={17} />
              {t("vendorPanel.settings.updatePassword")}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.settings.accountInformation")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.settings.fullName")}
                </label>
                <input className="ms-input" defaultValue="Aamir Ali" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.settings.email")}
                </label>
                <input className="ms-input" defaultValue="vendor@mahistore.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.settings.phone")}
                </label>
                <input className="ms-input" defaultValue="+92 300 0000000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.settings.language")}
                </label>
                <select className="ms-input" defaultValue="en">
                  <option value="en">{t("vendorPanel.settings.english")}</option>
                  <option value="ur">{t("vendorPanel.settings.urdu")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.settings.notificationPreferences")}
            </h3>

            <div className="mt-5 space-y-4">
              {preferences.map(([titleKey, descKey]) => (
                <label
                  key={titleKey}
                  className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-white/5"
                >
                  <span>
                    <span className="block text-sm font-black">
                      {t(titleKey)}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {t(descKey)}
                    </span>
                  </span>

                  <input type="checkbox" defaultChecked className="h-5 w-5" />
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="ms-btn-soft">
              {t("vendorPanel.common.cancel")}
            </button>
            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              {t("vendorPanel.settings.saveAllSettings")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}