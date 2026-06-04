import { ArrowLeft, CheckCircle2, Save, XCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

export default function VendorReturnDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={`Return #RET-${id}`}
        description="Review return request, update approval status and add vendor notes."
        action={<Link to="/vendor/returns" className="ms-btn-soft inline-flex items-center gap-2"><ArrowLeft size={17} /> Back</Link>}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Return Information</h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">Order</p>
                <p className="mt-1 font-black">#ORD-10021</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">Customer</p>
                <p className="mt-1 font-black">Ali Khan</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">Product</p>
                <p className="mt-1 font-black">Wireless Gaming Mouse</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">Requested Qty</p>
                <p className="mt-1 font-black">1</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-black">Customer Reason</p>
              <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300">
                Product arrived damaged and mouse click is not working correctly.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Vendor Decision</h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <button className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-left text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <CheckCircle2 size={24} />
                <p className="mt-3 font-black">Approve Return</p>
                <p className="mt-1 text-sm">Accept return request for admin processing.</p>
              </button>

              <button className="rounded-xl border border-red-200 bg-red-50 p-5 text-left text-red-700 dark:border-red-500/20 dark:bg-red-500/10">
                <XCircle size={24} />
                <p className="mt-3 font-black">Reject Return</p>
                <p className="mt-1 text-sm">Reject request with a clear vendor note.</p>
              </button>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-black">Vendor Note</label>
              <textarea className="ms-input min-h-32" placeholder="Write return decision note..." />
            </div>

            <div className="mt-5 flex justify-end">
              <button className="ms-btn-primary inline-flex items-center gap-2"><Save size={17} /> Save Decision</button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">Return Status</h3>
          <div className="mt-4"><VendorStatusBadge status="Pending" /></div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Return ID</span><strong>#RET-{id}</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Refund Amount</span><strong>$49</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Date</span><strong>2026-06-04</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}