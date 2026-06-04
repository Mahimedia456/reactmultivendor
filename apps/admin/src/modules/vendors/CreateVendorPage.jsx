import { Link } from "react-router-dom";
import { ArrowLeft, Save, Store } from "lucide-react";

export default function CreateVendorPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/vendors" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to vendors
        </Link>
        <h1 className="text-2xl font-black">Create Vendor</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">Create vendor account, store profile, commission and payout settings.</p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Vendor Account</h3>
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Owner Name</label>
                <input className="ms-input" placeholder="Aamir" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Email</label>
                <input className="ms-input" placeholder="vendor@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Phone</label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Password</label>
                <input className="ms-input" type="password" placeholder="Create password" />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Store size={19} /> Store Profile
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
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Address</label>
                <textarea className="ms-input h-24 py-3" placeholder="Store address" />
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
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Documents / KYC</h3>
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">CNIC / Tax ID</label>
                <input className="ms-input" placeholder="35202-XXXXXXX-X" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Business Registration</label>
                <input className="ms-input" placeholder="Registration number" />
              </div>
              <div className="lg:col-span-2 rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                <p className="text-sm font-bold">Upload vendor documents</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">CNIC, tax certificate, business proof</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Admin Controls</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">Status</label>
                <select className="ms-input">
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Suspended</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Commission Rate</label>
                <input className="ms-input" placeholder="10%" />
              </div>
              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Allow product publishing</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Auto approve products</span>
              </label>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Payout Details</h3>
            <div className="mt-5 space-y-4">
              <input className="ms-input" placeholder="Bank Name" />
              <input className="ms-input" placeholder="Account Title" />
              <input className="ms-input" placeholder="IBAN / Account No" />
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} /> Save Vendor
          </button>
        </aside>
      </div>
    </div>
  );
}