import { Link } from "react-router-dom";
import { Megaphone, Plus } from "lucide-react";

const items = [
  ["New payout schedule", "Vendors", "Active"],
  ["Eid sale policy", "All", "Active"],
  ["Maintenance notice", "Customers", "Expired"],
];

export default function AnnouncementsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">Marketing / Announcements</p>
          <h1 className="mt-1 text-2xl font-black">Announcements</h1>
        </div>
        <Link to="/admin/announcements/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create
        </Link>
      </div>

      <div className="grid gap-4">
        {items.map(([title, audience, status]) => (
          <div key={title} className="ms-card p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Megaphone className="text-brand-700" size={22} />
              <div>
                <h3 className="font-black">{title}</h3>
                <p className="text-sm font-semibold text-slate-500">{audience}</p>
              </div>
            </div>
            <span className={status === "Active" ? "ms-badge-success" : "ms-badge-danger"}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}