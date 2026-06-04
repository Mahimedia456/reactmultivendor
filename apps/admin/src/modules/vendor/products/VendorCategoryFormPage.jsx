import { ArrowLeft, Save } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorCategoryFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? "Edit Category" : "Create Category"}
        description="Add or update vendor product category."
        action={
          <Link to="/vendor/categories" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} /> Back
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">Category Name</label>
              <input className="ms-input" defaultValue={isEdit ? "Electronics" : ""} placeholder="Electronics" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Slug</label>
              <input className="ms-input" defaultValue={isEdit ? "electronics" : ""} placeholder="electronics" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Parent Category</label>
              <select className="ms-input" defaultValue="main">
                <option value="main">Main Category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Status</label>
              <select className="ms-input" defaultValue="active">
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">Description</label>
            <textarea className="ms-input min-h-32" placeholder="Category description..." />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">Category Image</label>
            <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-panel-darkLine">
              <p className="text-sm font-bold text-slate-500">Upload category image</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/categories" className="ms-btn-soft">Cancel</Link>
            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} /> {isEdit ? "Update Category" : "Create Category"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">Category Rules</h3>
          <p className="mt-2 text-sm text-slate-500">
            Vendor categories can be used while creating products. Admin can still moderate visibility later.
          </p>
        </div>
      </div>
    </div>
  );
}