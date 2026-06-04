import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, ShoppingCart, Tags, WalletCards } from "lucide-react";

export default function CouponDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <Link to="/admin/coupons" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} />
            Back to coupons
          </Link>
          <h1 className="text-2xl font-black">Coupon {id}</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Edit size={17} />
          Edit Coupon
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Code", id, Tags],
          ["Orders", "286", ShoppingCart],
          ["Revenue", "Rs 1.4M", WalletCards],
          ["Discount Given", "Rs 184k", Tags],
        ].map(([label, value, Icon]) => (
          <div key={label} className="ms-card p-5">
            <Icon size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Coupon Information</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ["Type", "Percentage"],
            ["Discount", "10%"],
            ["Minimum Order", "Rs 3,000"],
            ["Maximum Discount", "Rs 1,000"],
            ["Usage Limit", "1000"],
            ["Status", "Active"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
              <p className="text-xs font-black uppercase text-slate-400">{label}</p>
              <p className="mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}