import { Link } from "react-router-dom";
import { ArrowLeft, ImagePlus, Save, Store } from "lucide-react";

export default function CreateStorePage() {
  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/stores"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          Back to stores
        </Link>

        <h1 className="text-2xl font-black">Create Store</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
          Create a vendor storefront with commission, contact and SEO settings.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Store size={19} />
              Store Information
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Store Name</label>
                <input className="ms-input" placeholder="Aamir Fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Store Slug</label>
                <input className="ms-input" placeholder="aamir-fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Vendor Owner</label>
                <select className="ms-input">
                  <option>Aamir</option>
                  <option>Usman</option>
                  <option>Ali Khan</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Store Status</label>
                <select className="ms-input">
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Suspended</option>
                  <option>Pending Review</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Store Email</label>
                <input className="ms-input" placeholder="store@example.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Store Phone</label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Short Description</label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder="Short store introduction"
                />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Branding</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Store Logo</label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">Upload store logo</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    Square image recommended
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Store Banner</label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">Upload banner</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    Wide storefront header image
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Address</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Street Address</label>
                <input className="ms-input" placeholder="Office / shop address" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">City</label>
                <input className="ms-input" placeholder="Karachi" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Country</label>
                <select className="ms-input">
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">SEO Settings</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">SEO Title</label>
                <input className="ms-input" placeholder="Aamir Fragrances Store" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">SEO Keywords</label>
                <input className="ms-input" placeholder="perfume, fragrance, store" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">SEO Description</label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder="Meta description for store page"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Store Controls</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  Commission Rate
                </label>
                <input className="ms-input" placeholder="10%" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Store Visibility
                </label>
                <select className="ms-input">
                  <option>Visible on storefront</option>
                  <option>Hidden from storefront</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Featured Store</span>
              </label>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Allow COD orders</span>
              </label>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Payout Method</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">Bank Name</label>
                <input className="ms-input" placeholder="Bank Alfalah" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Account Title
                </label>
                <input className="ms-input" placeholder="Aamir Fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  IBAN / Account No
                </label>
                <input className="ms-input" placeholder="PK00..." />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/admin/stores" className="ms-btn-soft flex-1">
              Cancel
            </Link>

            <button className="ms-btn-primary flex-1 gap-2">
              <Save size={16} />
              Save Store
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}