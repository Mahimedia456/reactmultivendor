import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateCampaignPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/email-campaigns" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("marketingPage.backToCampaigns")}
        </Link>
        <h1 className="text-2xl font-black">{t("marketingPage.createEmailCampaign")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder={t("marketingPage.campaignName")} />
          <select className="ms-input">
            <option>{t("marketingPage.allCustomers")}</option>
            <option>{t("marketingPage.allVendors")}</option>
            <option>{t("marketingPage.selectedSegment")}</option>
          </select>
          <input className="ms-input lg:col-span-2" placeholder={t("marketingPage.emailSubject")} />
          <textarea className="ms-input h-64 py-3 lg:col-span-2" placeholder={t("marketingPage.emailContent")} />
          <select className="ms-input">
            <option>{t("marketingPage.sendImmediately")}</option>
            <option>{t("marketingPage.schedule")}</option>
          </select>
          <input type="datetime-local" className="ms-input" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Send size={17} />
            {t("marketingPage.sendCampaign")}
          </button>
        </div>
      </div>
    </div>
  );
}