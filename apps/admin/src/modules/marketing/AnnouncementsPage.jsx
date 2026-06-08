import { Link } from "react-router-dom";
import { Megaphone, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const items = [
  ["marketingPage.newPayoutSchedule", "marketingPage.vendors", "active"],
  ["marketingPage.eidSalePolicy", "marketingPage.all", "active"],
  ["marketingPage.maintenanceNotice", "marketingPage.customers", "expired"],
];

export default function AnnouncementsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("marketingPage.announcementsBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("marketingPage.announcements")}
          </h1>
        </div>
        <Link to="/admin/announcements/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("marketingPage.create")}
        </Link>
      </div>

      <div className="grid gap-4">
        {items.map(([titleKey, audienceKey, status]) => (
          <div key={titleKey} className="ms-card p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Megaphone className="text-brand-700" size={22} />
              <div>
                <h3 className="font-black">{t(titleKey)}</h3>
                <p className="text-sm font-semibold text-slate-500">{t(audienceKey)}</p>
              </div>
            </div>
            <span className={status === "active" ? "ms-badge-success" : "ms-badge-danger"}>
              {status === "active" ? t("status.active") : t("marketingPage.expired")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}