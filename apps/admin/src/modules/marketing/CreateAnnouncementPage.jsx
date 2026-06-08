import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateAnnouncementPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/announcements" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("marketingPage.backToAnnouncements")}
        </Link>
        <h1 className="text-2xl font-black">{t("marketingPage.createAnnouncement")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder={t("marketingPage.title")} />

          <select className="ms-input">
            <option>{t("marketingPage.all")}</option>
            <option>{t("marketingPage.vendors")}</option>
            <option>{t("marketingPage.customers")}</option>
            <option>{t("marketingPage.admins")}</option>
          </select>

          <select className="ms-input">
            <option>{t("marketingPage.normal")}</option>
            <option>{t("marketingPage.highPriority")}</option>
          </select>

          <select className="ms-input">
            <option>{t("status.active")}</option>
            <option>{t("marketingPage.draft")}</option>
          </select>

          <textarea className="ms-input h-32 py-3 lg:col-span-2" placeholder={t("marketingPage.message")} />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("marketingPage.publish")}
          </button>
        </div>
      </div>
    </div>
  );
}