import { ImagePlus, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorProductImagesPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Product Images"
        description="Upload and manage product gallery images."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <ImagePlus size={17} />
            Upload Images
          </button>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-panel-line bg-white p-4 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard"
          >
            <div className="flex h-48 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5">
              <ImagePlus size={42} className="text-slate-400" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="font-black">Image {item}</p>
              <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}