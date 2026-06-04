import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorStockAdjustmentPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Stock Adjustment"
        description="Increase, decrease or correct product stock with movement notes."
        action={
          <Link to="/vendor/inventory" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            Back
          </Link>
        }
      />

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-black">Product</label>
            <select className="ms-input">
              <option>Wireless Gaming Mouse</option>
              <option>Smart Watch Pro</option>
              <option>Leather Laptop Bag</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Adjustment Type</label>
            <select className="ms-input">
              <option value="increase">Increase Stock</option>
              <option value="decrease">Decrease Stock</option>
              <option value="correction">Stock Correction</option>
              <option value="damage">Damage / Lost</option>
              <option value="return">Customer Return</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Quantity</label>
            <input className="ms-input" type="number" placeholder="10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Reference No</label>
            <input className="ms-input" placeholder="ADJ-10021" />
          </div>
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-sm font-black">Notes</label>
          <textarea className="ms-input min-h-32" placeholder="Reason for this stock adjustment..." />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/vendor/inventory" className="ms-btn-soft">Cancel</Link>
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Save size={17} />
            Save Adjustment
          </button>
        </div>
      </div>
    </div>
  );
}