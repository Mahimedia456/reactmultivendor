import { KeyRound, Mail, Save, ShieldCheck, Store, UserRound } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorSettingsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Vendor Settings"
        description="Manage vendor account, password, notification preferences and store controls."
        action={<button className="ms-btn-primary inline-flex items-center gap-2"><Save size={17} /> Save Settings</button>}
      />

      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amazon-navy text-brand-500">
              <UserRound size={28} />
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">
              Vendor Account
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Update your account identity and access information.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                vendor@mahistore.com
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Verified Vendor
              </p>
              <p className="flex items-center gap-2">
                <Store size={16} />
                Mahi Vendor Store
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Security
            </h3>

            <div className="mt-4 space-y-4">
              <input className="ms-input" type="password" placeholder="Current Password" />
              <input className="ms-input" type="password" placeholder="New Password" />
              <input className="ms-input" type="password" placeholder="Confirm Password" />
            </div>

            <button className="ms-btn-soft mt-5 inline-flex items-center gap-2">
              <KeyRound size={17} />
              Update Password
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Account Information
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black">Full Name</label>
                <input className="ms-input" defaultValue="Aamir Ali" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Email</label>
                <input className="ms-input" defaultValue="vendor@mahistore.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Phone</label>
                <input className="ms-input" defaultValue="+92 300 0000000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Language</label>
                <select className="ms-input" defaultValue="en">
                  <option value="en">English</option>
                  <option value="ur">Urdu</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Notification Preferences
            </h3>

            <div className="mt-5 space-y-4">
              {[
                ["Order notifications", "Receive alerts when new orders arrive."],
                ["Low stock alerts", "Get notified when products reach low-stock threshold."],
                ["Payout updates", "Receive updates when payout status changes."],
                ["Review alerts", "Receive alerts for new product reviews."],
              ].map(([title, desc]) => (
                <label
                  key={title}
                  className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-white/5"
                >
                  <span>
                    <span className="block text-sm font-black">{title}</span>
                    <span className="block text-xs text-slate-500">{desc}</span>
                  </span>

                  <input type="checkbox" defaultChecked className="h-5 w-5" />
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="ms-btn-soft">Cancel</button>
            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              Save All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}