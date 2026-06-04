import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";

export default function CreateCampaignPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/email-campaigns" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to campaigns
        </Link>
        <h1 className="text-2xl font-black">Create Email Campaign</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder="Campaign Name" />
          <select className="ms-input">
            <option>All Customers</option>
            <option>All Vendors</option>
            <option>Selected Segment</option>
          </select>
          <input className="ms-input lg:col-span-2" placeholder="Email Subject" />
          <textarea className="ms-input h-64 py-3 lg:col-span-2" placeholder="Email content / builder placeholder" />
          <select className="ms-input">
            <option>Send Immediately</option>
            <option>Schedule</option>
          </select>
          <input type="datetime-local" className="ms-input" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Send size={17} />
            Send Campaign
          </button>
        </div>
      </div>
    </div>
  );
}