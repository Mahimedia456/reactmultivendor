import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, FileText, X } from "lucide-react";

const docs = [
  ["CNIC Front", "Submitted", "Approved"],
  ["Business Registration", "Submitted", "Pending"],
  ["Tax Certificate", "Missing", "Required"],
];

export default function VendorDocumentsPage() {
  const { id } = useParams();

  return (
    <div className="space-y-5">
      <div>
        <Link to={`/admin/vendors/${id}`} className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} /> Back to vendor
        </Link>
        <h1 className="text-2xl font-black">Vendor Documents</h1>
      </div>

      <div className="grid gap-4">
        {docs.map(([name, status, review]) => (
          <div key={name} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-black">{name}</h3>
                  <p className="text-sm font-semibold text-slate-500">{status}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className={review === "Approved" ? "ms-badge-success" : review === "Pending" ? "ms-badge-warning" : "ms-badge-danger"}>
                  {review}
                </span>
                <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700"><Check size={15} /></button>
                <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700"><X size={15} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}