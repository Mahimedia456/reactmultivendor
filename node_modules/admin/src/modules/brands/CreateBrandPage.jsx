import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateBrandPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/brands" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to brands
        </Link>
        <h1 className="text-2xl font-black">Add Brand</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Brand Name</label>
            <input className="ms-input" placeholder="Scents By Aamir" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Slug</label>
            <input className="ms-input" placeholder="scents-by-aamir" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Description</label>
            <textarea className="ms-input h-28 py-3" placeholder="Brand description" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Logo</label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <p className="text-sm font-bold">Upload brand logo</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/brands" className="ms-btn-soft">Cancel</Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Brand
          </button>
        </div>
      </div>
    </div>
  );
}