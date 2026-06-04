import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, Package } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

export default function VendorProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Product Detail"
        description={`Complete product overview for product ID ${id}.`}
        action={
          <div className="flex gap-2">
            <Link to="/vendor/products" className="ms-btn-soft inline-flex items-center gap-2">
              <ArrowLeft size={17} />
              Back
            </Link>
            <Link to={`/vendor/products/${id}/edit`} className="ms-btn-primary inline-flex items-center gap-2">
              <Edit size={17} />
              Edit Product
            </Link>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="flex h-64 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5">
            <Package size={70} className="text-slate-400" />
          </div>

          <div className="mt-5">
            <VendorStatusBadge status="Published" />
            <h2 className="mt-3 text-xl font-black text-slate-950 dark:text-white">
              Wireless Gaming Mouse
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              SKU: MS-MOUSE-001
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            Product Information
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Category", "Electronics"],
              ["Brand", "Mahi Store"],
              ["Regular Price", "$59.00"],
              ["Sale Price", "$49.00"],
              ["Stock", "42 units"],
              ["Low Stock Alert", "8 units"],
              ["Weight", "0.45 KG"],
              ["Visibility", "Visible"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">{label}</p>
                <p className="mt-1 font-black text-slate-950 dark:text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-white/5">
            <p className="text-xs font-black uppercase text-slate-400">Description</p>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              Premium wireless gaming mouse with ergonomic grip, fast response, and long battery life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}