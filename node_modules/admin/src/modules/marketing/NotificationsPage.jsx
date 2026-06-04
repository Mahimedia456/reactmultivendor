import { Bell, Send } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Marketing / Notifications</p>
        <h1 className="mt-1 text-2xl font-black">Push Notifications</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Sent", "48k"],
          ["Delivered", "44k"],
          ["Opened", "18k"],
          ["Clicked", "6k"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <Bell className="text-brand-700" size={20} />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Send Notification</h3>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <input className="ms-input" placeholder="Title" />
          <select className="ms-input">
            <option>All Customers</option>
            <option>All Vendors</option>
            <option>Selected Customers</option>
          </select>
          <input className="ms-input lg:col-span-2" placeholder="Redirect URL" />
          <textarea className="ms-input h-28 py-3 lg:col-span-2" placeholder="Message" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Send size={17} />
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
}