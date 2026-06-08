import { MessageSquareReply, Search, Star, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const reviews = [
  {
    id: 1,
    product: "Wireless Gaming Mouse",
    customer: "Ali Khan",
    rating: 5,
    review: "Excellent quality and fast delivery.",
    status: "published",
  },
  {
    id: 2,
    product: "Smart Watch Pro",
    customer: "Sara Malik",
    rating: 4,
    review: "Good product but packaging can improve.",
    status: "published",
  },
  {
    id: 3,
    product: "Leather Laptop Bag",
    customer: "Ahmed Raza",
    rating: 2,
    review: "Quality was not as expected.",
    status: "pending",
  },
];

export default function VendorReviewsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.reviews.title")}
        description={t("vendorPanel.reviews.description")}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.reviews.averageRating")} value="4.8" icon={Star} tone="green" />
        <VendorStatCard title={t("vendorPanel.reviews.totalReviews")} value="2,145" icon={Star} />
        <VendorStatCard title={t("vendorPanel.reviews.pendingReplies")} value="18" icon={MessageSquareReply} tone="orange" />
        <VendorStatCard title={t("vendorPanel.reviews.lowRatings")} value="7" icon={Star} tone="red" />
      </div>

      <VendorTableCard
        title={t("vendorPanel.reviews.reviewList")}
        description={t("vendorPanel.reviews.reviewListDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder={t("vendorPanel.reviews.searchReviews")}
            />
          </div>
        }
      >
        <table className="w-full min-w-[950px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.reviews.product")}</th>
              <th className="px-5 py-4">{t("vendorPanel.reviews.customer")}</th>
              <th className="px-5 py-4">{t("vendorPanel.reviews.rating")}</th>
              <th className="px-5 py-4">{t("vendorPanel.reviews.review")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {reviews.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">
                  {item.product}
                </td>
                <td className="px-5 py-4 font-bold">{item.customer}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1 font-black text-orange-500">
                    <Star size={16} fill="currentColor" /> {item.rating}
                  </div>
                </td>
                <td className="max-w-md px-5 py-4 text-sm text-slate-500">
                  {item.review}
                </td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <MessageSquareReply size={16} />
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

      <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <h3 className="text-lg font-black text-slate-950 dark:text-white">
          {t("vendorPanel.reviews.replyToReview")}
        </h3>

        <textarea
          className="ms-input mt-4 min-h-32"
          placeholder={t("vendorPanel.reviews.replyPlaceholder")}
        />

        <div className="mt-4 flex justify-end">
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <MessageSquareReply size={17} />
            {t("vendorPanel.reviews.publishReply")}
          </button>
        </div>
      </div>
    </div>
  );
}