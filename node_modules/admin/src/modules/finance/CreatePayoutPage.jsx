import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreatePayoutPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/payouts" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to payouts
        </Link>
        <h1 className="text-2xl font-black">Create Payout</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Vendor</label>
            <select className="ms-input">
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
              <option>Tech Point</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Amount</label>
            <input className="ms-input" placeholder="30000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Bank Name</label>
            <input className="ms-input" placeholder="Bank Alfalah" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Account Title</label>
            <input className="ms-input" placeholder="Aamir Fragrances" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Account / IBAN</label>
            <input className="ms-input" placeholder="PK00..." />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Reference Number</label>
            <input className="ms-input" placeholder="TRX-REF-001" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Notes</label>
            <textarea className="ms-input h-28 py-3" placeholder="Internal payout notes" />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Create Payout
          </button>
        </div>
      </div>
    </div>
  );
}