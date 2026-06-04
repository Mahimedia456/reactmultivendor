import { Bell, CheckCircle2, Eye, Search, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const notifications = [
  {
    id: 1,
    title: "New order received",
    message: "Order #ORD-10021 has been assigned to your store.",
    type: "Order",
    status: "Unread",
    date: "2026-06-04",
  },
  {
    id: 2,
    title: "Payout processing",
    message: "Your payout request PAY-3001 is under review.",
    type: "Finance",
    status: "Read",
    date: "2026-06-03",
  },
  {
    id: 3,
    title: "Low stock alert",
    message: "Bluetooth Speaker is currently out of stock.",
    type: "Inventory",
    status: "Unread",
    date: "2026-06-03",
  },
];

export default function VendorNotificationsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Notifications"
        description="View order, inventory, payout and marketplace updates."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <CheckCircle2 size={17} />
            Mark All Read
          </button>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title="Total Notifications" value="84" icon={Bell} />
        <VendorStatCard title="Unread" value="12" icon={Bell} tone="orange" />
        <VendorStatCard title="Today" value="7" icon={Bell} tone="blue" />
      </div>

      <VendorTableCard
        title="Notification Center"
        description="Vendor activity messages and alerts"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder="Search notifications..."
            />
          </div>
        }
      >
        <table className="w-full min-w-[900px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Notification</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {notifications.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4">
                  <p className="font-black text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.message}</p>
                </td>
                <td className="px-5 py-4 font-bold">{item.type}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status === "Unread" ? "Pending" : "Completed"} />
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {item.date}
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}