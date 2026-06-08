export default function VendorStatCard({ title, value, note, icon: Icon, tone = "brand" }) {
  const tones = {
    brand: "bg-brand-500/15 text-brand-600 dark:text-brand-400",
    green: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    orange: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
    red: "bg-red-500/15 text-red-600 dark:text-red-400",
    blue: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  };

  return (
    <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
            {value}
          </h3>

          {note && (
            <p className="mt-1 text-xs font-semibold text-slate-400">
              {note}
            </p>
          )}
        </div>

        {Icon && (
          <div className={`rounded-xl p-3 ${tones[tone] || tones.brand}`}>
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}