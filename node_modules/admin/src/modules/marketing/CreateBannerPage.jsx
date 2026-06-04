import { Link } from "react-router-dom";
import { ArrowLeft, ImagePlus, Save } from "lucide-react";

export default function CreateBannerPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/banners" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to banners
        </Link>
        <h1 className="text-2xl font-black">Create Banner</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Title</label>
            <input className="ms-input" placeholder="Summer Sale Hero" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Position</label>
            <select className="ms-input">
              <option>Homepage Hero</option>
              <option>Homepage Secondary</option>
              <option>Category Page</option>
              <option>Product Page</option>
              <option>Vendor Store</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Button Label</label>
            <input className="ms-input" placeholder="Shop Now" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Button Link</label>
            <input className="ms-input" placeholder="/shop" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Start Date</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">End Date</label>
            <input type="date" className="ms-input" />
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Banner Image</label>
            <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
              <ImagePlus className="mx-auto text-slate-400" size={32} />
              <p className="mt-3 text-sm font-bold">Upload desktop/mobile image</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Banner
          </button>
        </div>
      </div>
    </div>
  );
}