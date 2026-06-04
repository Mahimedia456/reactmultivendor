import { Check, Eye, Search, Star, Trash2, X } from "lucide-react";

const reviews = [
  {
    id: 1,
    product: "Elyndor Perfume 50ml",
    customer: "Ahmed Raza",
    vendor: "Aamir Fragrances",
    rating: 5,
    comment: "Excellent fragrance and long lasting.",
    status: "Approved",
  },
  {
    id: 2,
    product: "Floral Charm 50ml",
    customer: "Sara Khan",
    vendor: "Aamir Fragrances",
    rating: 4,
    comment: "Good scent but delivery was late.",
    status: "Pending",
  },
  {
    id: 3,
    product: "Wireless Earbuds Pro",
    customer: "Hamza Ali",
    vendor: "Tech Point",
    rating: 2,
    comment: "Battery timing is not good.",
    status: "Rejected",
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Catalog / Reviews</p>
        <h1 className="mt-1 text-2xl font-black">Reviews</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          Moderate product and store reviews before publishing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Reviews", "3,482"],
          ["Approved", "3,210"],
          ["Pending", "186"],
          ["Rejected", "86"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder="Search reviews..."
            />
          </div>

          <select className="ms-input h-10 w-44">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Product</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Vendor</th>
                <th className="px-5 py-3">Rating</th>
                <th className="px-5 py-3">Review</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4 font-black">{review.product}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{review.customer}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{review.vendor}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 font-black text-brand-700">
                      <Star size={16} fill="currentColor" />
                      {review.rating}
                    </div>
                  </td>
                  <td className="max-w-[300px] px-5 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {review.comment}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        review.status === "Approved"
                          ? "ms-badge-success"
                          : review.status === "Pending"
                          ? "ms-badge-warning"
                          : "ms-badge-danger"
                      }
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="ms-btn-soft h-9 w-9 px-0">
                        <Eye size={15} />
                      </button>
                      <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                        <Check size={15} />
                      </button>
                      <button className="ms-btn-soft h-9 w-9 px-0 text-amber-700">
                        <X size={15} />
                      </button>
                      <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}