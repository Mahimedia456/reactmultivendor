import { Bell, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotificationsPage() {
  const { t } = useTranslation();

  const stats = [
    ["marketingPage.sent", "48k"],
    ["marketingPage.delivered", "44k"],
    ["marketingPage.opened", "18k"],
    ["marketingPage.clicked", "6k"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">{t("marketingPage.notificationsBreadcrumb")}</p>
        <h1 className="mt-1 text-2xl font-black">{t("marketingPage.pushNotifications")}</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <Bell className="text-brand-700" size={20} />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">{t("marketingPage.sendNotification")}</h3>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder={t("marketingPage.title")} />
          <select className="ms-input">
            <option>{t("marketingPage.allCustomers")}</option>
            <option>{t("marketingPage.allVendors")}</option>
            <option>{t("marketingPage.selectedCustomers")}</option>
          </select>
          <input className="ms-input lg:col-span-2" placeholder={t("marketingPage.redirectUrl")} />
          <textarea className="ms-input h-28 py-3 lg:col-span-2" placeholder={t("marketingPage.message")} />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Send size={17} />
            {t("marketingPage.sendNotification")}
          </button>
        </div>
      </div>
    </div>
  );
}