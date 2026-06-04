import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function StockAdjustmentPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/inventory" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to inventory
        </Link>
        <h1 className="text-2xl font-black">Stock Adjustment</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          Increase or decrease product stock with reason tracking.
        </p>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Product</label>
            <select className="ms-input">
              <option>Elyndor Perfume 50ml</option>
              <option>Floral Charm 50ml</option>
              <option>Wireless Earbuds Pro</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Warehouse</label>
            <select className="ms-input">
              <option>Main Warehouse</option>
              <option>Karachi Warehouse</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Adjustment Type</label>
            <select className="ms-input">
              <option>Add Stock</option>
              <option>Remove Stock</option>
              <option>Set Stock</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Quantity</label>
            <input className="ms-input" placeholder="10" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Reason</label>
            <textarea className="ms-input h-28 py-3" placeholder="Stock received from supplier / damaged / correction" />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/inventory" className="ms-btn-soft">Cancel</Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Adjustment
          </button>
        </div>
      </div>
    </div>
  );
}