import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateCouponPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/coupons" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to coupons
        </Link>
        <h1 className="text-2xl font-black">Create Coupon</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Coupon Code</label>
            <input className="ms-input" placeholder="SAVE10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Coupon Type</label>
            <select className="ms-input">
              <option>Percentage</option>
              <option>Fixed Amount</option>
              <option>Free Shipping</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Discount Value</label>
            <input className="ms-input" placeholder="10" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Maximum Discount</label>
            <input className="ms-input" placeholder="1000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Minimum Order</label>
            <input className="ms-input" placeholder="3000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Usage Limit</label>
            <input className="ms-input" placeholder="1000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Per User Limit</label>
            <input className="ms-input" placeholder="1" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Start Date</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">End Date</label>
            <input type="date" className="ms-input" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Applicable Vendor</label>
            <select className="ms-input">
              <option>All Vendors</option>
              <option>Aamir Fragrances</option>
              <option>Urban Deals</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">Applicable Category</label>
            <select className="ms-input">
              <option>All Categories</option>
              <option>Perfumes</option>
              <option>Electronics</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Coupon
          </button>
        </div>
      </div>
    </div>
  );
}