export default function VendorTableCard({ title, description, children, action }) {
  return (
    <div className="rounded-2xl border border-panel-line bg-white shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
      <div className="flex flex-col justify-between gap-4 border-b border-panel-line p-5 dark:border-panel-darkLine md:flex-row md:items-center">
        <div>
          <h3 className="text-lg font-black text-slate-950 dark:text-white">{title}</h3>
          {description && <p className="text-sm font-medium text-slate-500">{description}</p>}
        </div>

        {action && <div>{action}</div>}
      </div>

      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}