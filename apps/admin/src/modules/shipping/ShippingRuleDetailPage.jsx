import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, Truck } from "lucide-react";

export default function ShippingRuleDetailPage() {
  const { id } = useParams();

  const details = [
    ["Rule ID", id],
    ["Rule Name", "Karachi Standard Delivery"],
    ["Zone", "Karachi"],
    ["Method", "Standard Delivery"],
    ["Base Rate", "Rs 250"],
    ["Free Shipping Above", "Rs 10,000"],
    ["COD Allowed", "Yes"],
    ["Status", "Active"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <Link to="/admin/shipping" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} /> Back to shipping
          </Link>
          <h1 className="text-2xl font-black">Shipping Rule Detail</h1>
        </div>

        <Link to={`/admin/shipping/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} /> Edit Rule
        </Link>
      </div>

      <div className="ms-card p-5">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
          <Truck size={19} /> Rule Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {details.map(([label, value]) => (
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