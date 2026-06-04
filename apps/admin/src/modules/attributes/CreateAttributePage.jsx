import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Save, X } from "lucide-react";

export default function CreateAttributePage() {
  const values = ["30ml", "50ml", "100ml"];

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/attributes" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to attributes
        </Link>
        <h1 className="text-2xl font-black">Add Attribute</h1>
      </div>

      <div className="ms-card p-5">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold">Attribute Name</label>
            <input className="ms-input" placeholder="Size" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Values</label>
            <div className="flex gap-3">
              <input className="ms-input" placeholder="Add value e.g. 50ml" />
              <button className="ms-btn-soft gap-2">
                <Plus size={16} />
                Add
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="ms-badge gap-2">
                  {value}
                  <X size={13} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/attributes" className="ms-btn-soft">Cancel</Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Attribute
          </button>
        </div>
      </div>
    </div>
  );
}