import { Link } from "react-router-dom";
import { Mail, Plus } from "lucide-react";

const campaigns = [
  ["Welcome Offer", "Customers", "12k", "42%", "Active"],
  ["Vendor Education", "Vendors", "420", "61%", "Sent"],
  ["Flash Sale Blast", "Customers", "30k", "36%", "Draft"],
];

export default function EmailCampaignsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">Marketing / Email Campaigns</p>
          <h1 className="mt-1 text-2xl font-black">Email Campaigns</h1>
        </div>
        <Link to="/admin/email-campaigns/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Campaign
        </Link>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Campaign</th>
              <th className="px-5 py-3">Audience</th>
              <th className="px-5 py-3">Sent</th>
              <th className="px-5 py-3">Open Rate</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {campaigns.map(([name, audience, sent, opened, status]) => (
              <tr key={name}>
                <td className="px-5 py-4 font-black">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-700" />
                    {name}
                  </div>
                </td>
                <td className="px-5 py-4 text-sm font-semibold">{audience}</td>
                <td className="px-5 py-4 text-sm font-semibold">{sent}</td>
                <td className="px-5 py-4 text-sm font-black">{opened}</td>
                <td className="px-5 py-4"><span className="ms-badge">{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}