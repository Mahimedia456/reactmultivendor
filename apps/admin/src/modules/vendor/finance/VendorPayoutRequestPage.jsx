import { ArrowLeft, Save, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorPayoutRequestPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Request Payout"
        description="Submit a withdrawal request from your available vendor wallet balance."
        action={<Link to="/vendor/payouts" className="ms-btn-soft inline-flex items-center gap-2"><ArrowLeft size={17} /> Back</Link>}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">Payout Information</h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">Amount</label>
              <input className="ms-input" type="number" placeholder="500" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Payout Method</label>
              <select className="ms-input">
                <option>Bank Transfer</option>
                <option>JazzCash</option>
                <option>EasyPaisa</option>
                <option>PayPal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Account Holder</label>
              <input className="ms-input" placeholder="Aamir Ali" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Account Number / IBAN</label>
              <input className="ms-input" placeholder="PK00 XXXX XXXX XXXX" />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">Vendor Note</label>
            <textarea className="ms-input min-h-32" placeholder="Optional payout note..." />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/payouts" className="ms-btn-soft">Cancel</Link>
            <button className="ms-btn-primary inline-flex items-center gap-2"><Save size={17} /> Submit Request</button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-amazon-navy p-6 text-white shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-slate-950">
            <WalletCards size={24} />
          </div>
          <p className="mt-5 text-sm font-bold text-slate-300">Available Balance</p>
          <h2 className="mt-2 text-4xl font-black">$3,250.00</h2>
          <p className="mt-3 text-sm text-slate-400">
            Your payout request cannot exceed available wallet balance.
          </p>
        </div>
      </div>
    </div>
  );
}