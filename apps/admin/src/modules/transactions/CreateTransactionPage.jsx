import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateTransactionPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/transactions" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to transactions
        </Link>
        <h1 className="text-2xl font-black">Create Manual Transaction</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Transaction Type</label>
            <select className="ms-input">
              <option>Order Payment</option>
              <option>Manual Credit</option>
              <option>Manual Debit</option>
              <option>Refund</option>
              <option>Payout</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Related Order</label>
            <select className="ms-input">
              <option>MS-1001</option>
              <option>MS-1002</option>
              <option>None</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Vendor</label>
            <select className="ms-input">
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
              <option>Tech Point</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Payment Method</label>
            <select className="ms-input">
              <option>COD</option>
              <option>Card</option>
              <option>Bank Transfer</option>
              <option>Wallet</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Amount</label>
            <input className="ms-input" placeholder="6700" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
              <option>Refunded</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Notes</label>
            <textarea className="ms-input h-28 py-3" placeholder="Internal transaction notes" />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2"><Save size={17} /> Save Transaction</button>
        </div>
      </div>
    </div>
  );
}