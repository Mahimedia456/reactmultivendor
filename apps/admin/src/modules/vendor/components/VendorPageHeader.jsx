export default function VendorPageHeader({ badge = "Vendor Panel", title, description, action }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard lg:flex-row lg:items-center">
      <div>
        <p className="text-sm font-black uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {badge}
        </p>
        <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-1 max-w-2xl text-sm font-medium text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}