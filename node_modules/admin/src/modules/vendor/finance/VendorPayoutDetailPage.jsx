import { ArrowLeft, Download, WalletCards } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

export default function VendorPayoutDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={`Payout PAY-${id}`}
        description="View payout request details, method, status and admin processing notes."
        action={
          <div className="flex gap-2">
            <Link to="/vendor/payouts" className="ms-btn-soft inline-flex items-center gap-2"><ArrowLeft size={17} /> Back</Link>
            <button className="ms-btn-primary inline-flex items-center gap-2"><Download size={17} /> Download Receipt</button>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">Payout Details</h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              ["Payout Reference", `PAY-${id}`],
              ["Amount", "$500"],
              ["Method", "Bank Transfer"],
              ["Account Holder", "Aamir Ali"],
              ["Account / IBAN", "PK00 XXXX XXXX XXXX"],
              ["Request Date", "2026-06-03"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-xs font-black uppercase text-slate-400">{label}</p>
                <p className="mt-1 font-black text-slate-950 dark:text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="text-sm font-black">Vendor Note</p>
            <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/5">
              Please process payout to my listed bank account.
            </p>
          </div>

          <div className="mt-5">
            <p className="text-sm font-black">Admin Note</p>
            <p className="mt-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/5">
              Payout is under review by finance team.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600">
            <WalletCards size={24} />
          </div>

          <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">
            Current Status
          </h3>

          <div className="mt-4">
            <VendorStatusBadge status="Processing" />
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Requested</span>
              <strong>$500</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Fee</span>
              <strong>$0</strong>
            </div>
            <div className="flex justify-between border-t pt-3 text-lg font-black dark:border-panel-darkLine">
              <span>Net Payout</span>
              <span>$500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}