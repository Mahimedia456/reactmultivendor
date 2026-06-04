import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateCustomerPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/customers"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          Back to customers
        </Link>
        <h1 className="text-2xl font-black">Create Customer</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Full Name</label>
            <input className="ms-input" placeholder="Ahmed Raza" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Email</label>
            <input className="ms-input" placeholder="customer@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Phone</label>
            <input className="ms-input" placeholder="+92 300 0000000" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Blocked</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Default Address</label>
            <textarea className="ms-input h-28 py-3" placeholder="Customer shipping address" />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/customers" className="ms-btn-soft">
            Cancel
          </Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Customer
          </button>
        </div>
      </div>
    </div>
  );
}