import { Check, Eye, Search, Star, Trash2, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    id: 1,
    product: "Elyndor Perfume 50ml",
    customer: "Ahmed Raza",
    vendor: "Aamir Fragrances",
    rating: 5,
    commentKey: "reviewsPage.excellentFragrance",
    status: "approved",
  },
  {
    id: 2,
    product: "Floral Charm 50ml",
    customer: "Sara Khan",
    vendor: "Aamir Fragrances",
    rating: 4,
    commentKey: "reviewsPage.goodScentLateDelivery",
    status: "pending",
  },
  {
    id: 3,
    product: "Wireless Earbuds Pro",
    customer: "Hamza Ali",
    vendor: "Tech Point",
    rating: 2,
    commentKey: "reviewsPage.batteryNotGood",
    status: "rejected",
  },
];

export default function ReviewsPage() {
  const { t } = useTranslation();

  const stats = [
    ["reviewsPage.totalReviews", "3,482"],
    ["status.approved", "3,210"],
    ["status.pending", "186"],
    ["status.rejected", "86"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">
          {t("reviewsPage.breadcrumb")}
        </p>
        <h1 className="mt-1 text-2xl font-black">{t("reviewsPage.title")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("reviewsPage.description")}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
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
              placeholder={t("reviewsPage.searchPlaceholder")}
            />
          </div>

          <select className="ms-input h-10 w-44">
            <option>{t("reviewsPage.allStatus")}</option>
            <option>{t("status.approved")}</option>
            <option>{t("status.pending")}</option>
            <option>{t("status.rejected")}</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("reviewsPage.product")}</th>
                <th className="px-5 py-3">{t("reviewsPage.customer")}</th>
                <th className="px-5 py-3">{t("reviewsPage.vendor")}</th>
                <th className="px-5 py-3">{t("reviewsPage.rating")}</th>
                <th className="px-5 py-3">{t("reviewsPage.review")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.actions")}</th>
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
                    {t(review.commentKey)}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        review.status === "approved"
                          ? "ms-badge-success"
                          : review.status === "pending"
                          ? "ms-badge-warning"
                          : "ms-badge-danger"
                      }
                    >
                      {t(`status.${review.status}`)}
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