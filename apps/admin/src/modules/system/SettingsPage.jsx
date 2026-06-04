import { Save, Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">System / Settings</p>
        <h1 className="mt-1 text-2xl font-black">Settings</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[280px_1fr]">
        <aside className="ms-card p-4">
          {[
            "General",
            "Marketplace",
            "Payments",
            "Shipping",
            "Email SMTP",
            "Notifications",
            "Taxes",
            "Security",
            "SEO",
          ].map((item, index) => (
            <button
              key={item}
              className={index === 0 ? "ms-btn-primary mb-2 w-full justify-start" : "ms-btn-soft mb-2 w-full justify-start"}
            >
              {item}
            </button>
          ))}
        </aside>

        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Settings size={19} />
              General Settings
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Marketplace Name</label>
                <input className="ms-input" defaultValue="Mahi Store" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Support Email</label>
                <input className="ms-input" defaultValue="support@mahistore.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Currency</label>
                <select className="ms-input">
                  <option>PKR</option>
                  <option>USD</option>
                  <option>AED</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Timezone</label>
                <select className="ms-input">
                  <option>Asia/Karachi</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Marketplace Rules</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Default Commission</label>
                <input className="ms-input" defaultValue="10%" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Product Approval</label>
                <select className="ms-input">
                  <option>Manual Approval</option>
                  <option>Auto Approval</option>
                </select>
              </div>
              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" defaultChecked />
                <span className="text-sm font-bold">Allow vendor registration</span>
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" defaultChecked />
                <span className="text-sm font-bold">Enable COD</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="ms-btn-primary gap-2">
              <Save size={17} />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}