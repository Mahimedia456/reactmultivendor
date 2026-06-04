import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateCategoryPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/categories" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to categories
        </Link>
        <h1 className="text-2xl font-black">Add Category</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">Create a new product category.</p>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Category Name</label>
            <input className="ms-input" placeholder="Perfumes" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Slug</label>
            <input className="ms-input" placeholder="perfumes" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Parent Category</label>
            <select className="ms-input">
              <option>Main Category</option>
              <option>Perfumes</option>
              <option>Electronics</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Category Image</label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <p className="text-sm font-bold">Upload category image</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">PNG, JPG or WEBP</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Link to="/admin/categories" className="ms-btn-soft">Cancel</Link>
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Category
          </button>
        </div>
      </div>
    </div>
  );
}