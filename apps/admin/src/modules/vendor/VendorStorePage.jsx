import {
  Globe,
  Mail,
  MapPin,
  Phone,
  Store,
} from "lucide-react";

import VendorPageHeader from "./components/VendorPageHeader";

export default function VendorStorePage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Store Profile"
        description="Manage your vendor store information."
        action={<button className="ms-btn-primary">Save Changes</button>}
      />

      <div className="grid gap-6 xl:grid-cols-[350px_1fr]">
        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-500 text-slate-950">
            <Store size={42} />
          </div>

          <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
            Mahi Vendor Store
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              vendor@mahistore.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              +92 300 0000000
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Karachi, Pakistan
            </div>

            <div className="flex items-center gap-2">
              <Globe size={16} />
              mahistore.com
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">
                Store Name
              </label>
              <input
                className="ms-input"
                defaultValue="Mahi Vendor Store"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                Store Email
              </label>
              <input
                className="ms-input"
                defaultValue="vendor@mahistore.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                Phone
              </label>
              <input
                className="ms-input"
                defaultValue="+92 300 0000000"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">
                Website
              </label>
              <input
                className="ms-input"
                defaultValue="https://mahistore.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-black">
              Store Description
            </label>

            <textarea
              className="ms-input min-h-40"
              defaultValue="We provide premium quality products with fast delivery."
            />
          </div>
        </div>
      </div>
    </div>
  );
}