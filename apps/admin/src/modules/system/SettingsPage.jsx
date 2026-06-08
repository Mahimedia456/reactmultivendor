import { Save, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t } = useTranslation();

  const tabs = [
    "systemPage.general",
    "systemPage.marketplace",
    "systemPage.payments",
    "systemPage.shipping",
    "systemPage.emailSmtp",
    "systemPage.notifications",
    "systemPage.taxes",
    "systemPage.security",
    "systemPage.seo",
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">
          {t("systemPage.settingsBreadcrumb")}
        </p>
        <h1 className="mt-1 text-2xl font-black">
          {t("systemPage.settingsTitle")}
        </h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[280px_1fr]">
        <aside className="ms-card p-4">
          {tabs.map((tabKey, index) => (
            <button
              key={tabKey}
              className={
                index === 0
                  ? "ms-btn-primary mb-2 w-full justify-start"
                  : "ms-btn-soft mb-2 w-full justify-start"
              }
            >
              {t(tabKey)}
            </button>
          ))}
        </aside>

        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Settings size={19} />
              {t("systemPage.generalSettings")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.marketplaceName")}
                </label>
                <input className="ms-input" defaultValue="Mahi Store" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.supportEmail")}
                </label>
                <input className="ms-input" defaultValue="support@mahistore.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.currency")}
                </label>
                <select className="ms-input">
                  <option>PKR</option>
                  <option>USD</option>
                  <option>AED</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.timezone")}
                </label>
                <select className="ms-input">
                  <option>Asia/Karachi</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("systemPage.marketplaceRules")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.defaultCommission")}
                </label>
                <input className="ms-input" defaultValue="10%" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.productApproval")}
                </label>
                <select className="ms-input">
                  <option>{t("systemPage.manualApproval")}</option>
                  <option>{t("systemPage.autoApproval")}</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" defaultChecked />
                <span className="text-sm font-bold">
                  {t("systemPage.allowVendorRegistration")}
                </span>
              </label>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" defaultChecked />
                <span className="text-sm font-bold">
                  {t("systemPage.enableCod")}
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="ms-btn-primary gap-2">
              <Save size={17} />
              {t("systemPage.saveSettings")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}