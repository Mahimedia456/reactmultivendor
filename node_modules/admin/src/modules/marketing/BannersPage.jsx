import { Link } from "react-router-dom";
import { Image, Plus } from "lucide-react";

const banners = [
  ["Summer Sale Hero", "Homepage Hero", "Desktop + Mobile", "Active"],
  ["Perfume Collection", "Category Page", "Desktop", "Active"],
  ["Vendor Promo", "Vendor Store", "Mobile", "Inactive"],
];

export default function BannersPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">Marketing / Banners</p>
          <h1 className="mt-1 text-2xl font-black">Banners</h1>
        </div>

        <Link to="/admin/banners/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Create Banner
        </Link>
      </div>

      <div className="grid gap-4">
        {banners.map(([title, position, platform, status]) => (
          <div key={title} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Image size={20} />
                </div>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="text-sm font-semibold text-slate-500">{position} • {platform}</p>
                </div>
              </div>

              <span className={status === "Active" ? "ms-badge-success" : "ms-badge-warning"}>
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}