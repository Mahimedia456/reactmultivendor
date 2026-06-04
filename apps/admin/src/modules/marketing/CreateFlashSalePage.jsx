import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateFlashSalePage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/flash-sales" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to flash sales
        </Link>
        <h1 className="text-2xl font-black">Create Flash Sale</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder="Campaign Name" />
          <select className="ms-input">
            <option>Percentage Discount</option>
            <option>Fixed Discount</option>
          </select>
          <input className="ms-input" placeholder="Discount Value" />
          <input className="ms-input" placeholder="Priority" />
          <input type="datetime-local" className="ms-input" />
          <input type="datetime-local" className="ms-input" />
          <select className="ms-input">
            <option>Active</option>
            <option>Scheduled</option>
            <option>Inactive</option>
          </select>
          <select className="ms-input">
            <option>All Vendors</option>
            <option>Aamir Fragrances</option>
          </select>
          <textarea className="ms-input h-28 py-3 lg:col-span-2" placeholder="Products included / internal notes" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Flash Sale
          </button>
        </div>
      </div>
    </div>
  );
}