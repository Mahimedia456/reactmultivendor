import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateShippingRulePage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/shipping" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to shipping
        </Link>
        <h1 className="text-2xl font-black">Create Shipping Rule</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Rule Name</label>
            <input className="ms-input" placeholder="Karachi Standard Delivery" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Zone</label>
            <select className="ms-input">
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Delivery Method</label>
            <select className="ms-input">
              <option>Standard Delivery</option>
              <option>Express Delivery</option>
              <option>Courier Pickup</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Base Rate</label>
            <input className="ms-input" placeholder="250" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Free Shipping Above</label>
            <input className="ms-input" placeholder="10000" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">COD Allowed</label>
            <select className="ms-input">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">ETA</label>
            <input className="ms-input" placeholder="2-4 business days" />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2"><Save size={17} /> Save Rule</button>
        </div>
      </div>
    </div>
  );
}