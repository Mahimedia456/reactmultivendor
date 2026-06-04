import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateAnnouncementPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/announcements" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to announcements
        </Link>
        <h1 className="text-2xl font-black">Create Announcement</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder="Title" />
          <select className="ms-input">
            <option>All</option>
            <option>Vendors</option>
            <option>Customers</option>
            <option>Admins</option>
          </select>
          <select className="ms-input">
            <option>Normal</option>
            <option>High Priority</option>
          </select>
          <select className="ms-input">
            <option>Active</option>
            <option>Draft</option>
          </select>
          <textarea className="ms-input h-32 py-3 lg:col-span-2" placeholder="Message" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}