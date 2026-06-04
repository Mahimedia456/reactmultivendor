export default function PlaceholderPage({ title, description }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Mahi Store / Admin</p>
        <h1 className="mt-1 text-2xl font-black">{title}</h1>
        <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          {description || "This module UI and API will be built in upcoming steps."}
        </p>
      </div>

      <div className="ms-card p-8">
        <h3 className="text-lg font-black">{title} Module</h3>
        <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          Placeholder ready. Next we will replace this with complete tables, forms,
          filters, actions and API connection.
        </p>
      </div>
    </div>
  );
}