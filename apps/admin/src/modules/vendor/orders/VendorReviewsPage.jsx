import { MessageSquareReply, Search, Star, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const reviews = [
  { id: 1, product: "Wireless Gaming Mouse", customer: "Ali Khan", rating: 5, review: "Excellent quality and fast delivery.", status: "Published" },
  { id: 2, product: "Smart Watch Pro", customer: "Sara Malik", rating: 4, review: "Good product but packaging can improve.", status: "Published" },
  { id: 3, product: "Leather Laptop Bag", customer: "Ahmed Raza", rating: 2, review: "Quality was not as expected.", status: "Pending" },
];

export default function VendorReviewsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader title="Product Reviews" description="View customer reviews and reply to product feedback." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title="Average Rating" value="4.8" icon={Star} tone="green" />
        <VendorStatCard title="Total Reviews" value="2,145" icon={Star} />
        <VendorStatCard title="Pending Replies" value="18" icon={MessageSquareReply} tone="orange" />
        <VendorStatCard title="Low Ratings" value="7" icon={Star} tone="red" />
      </div>

      <VendorTableCard
        title="Review List"
        description="Customer product feedback"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search reviews..." />
          </div>
        }
      >
        <table className="w-full min-w-[950px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Rating</th>
              <th className="px-5 py-4">Review</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {reviews.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.product}</td>
                <td className="px-5 py-4 font-bold">{item.customer}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1 font-black text-orange-500">
                    <Star size={16} fill="currentColor" /> {item.rating}
                  </div>
                </td>
                <td className="px-5 py-4 max-w-md text-sm text-slate-500">{item.review}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0"><MessageSquareReply size={16} /></button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>

      <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">Reply to Review</h3>
        <textarea className="ms-input mt-4 min-h-32" placeholder="Write vendor reply..." />
        <div className="mt-4 flex justify-end">
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <MessageSquareReply size={17} />
            Publish Reply
          </button>
        </div>
      </div>
    </div>
  );
}