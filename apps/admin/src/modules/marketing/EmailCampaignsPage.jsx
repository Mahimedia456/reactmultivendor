import { Link } from "react-router-dom";
import { Mail, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const campaigns = [
  ["marketingPage.welcomeOffer", "marketingPage.customers", "12k", "42%", "active"],
  ["marketingPage.vendorEducation", "marketingPage.vendors", "420", "61%", "sent"],
  ["marketingPage.flashSaleBlast", "marketingPage.customers", "30k", "36%", "draft"],
];

export default function EmailCampaignsPage() {
  const { t } = useTranslation();

  function statusLabel(status) {
    if (status === "sent") return t("marketingPage.sent");
    if (status === "draft") return t("marketingPage.draft");
    return t("status.active");
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("marketingPage.emailCampaignsBreadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("marketingPage.emailCampaigns")}</h1>
        </div>
        <Link to="/admin/email-campaigns/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("marketingPage.createCampaign")}
        </Link>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("marketingPage.campaign")}</th>
              <th className="px-5 py-3">{t("marketingPage.audience")}</th>
              <th className="px-5 py-3">{t("marketingPage.sent")}</th>
              <th className="px-5 py-3">{t("marketingPage.openRate")}</th>
              <th className="px-5 py-3">{t("common.status")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {campaigns.map(([nameKey, audienceKey, sent, opened, status]) => (
              <tr key={nameKey}>
                <td className="px-5 py-4 font-black">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-700" />
                    {t(nameKey)}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{t(audienceKey)}</td>
                <td className="px-5 py-4 text-sm font-semibold">{sent}</td>
                <td className="px-5 py-4 text-sm font-black">{opened}</td>
                <td className="px-5 py-4"><span className="ms-badge">{statusLabel(status)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}