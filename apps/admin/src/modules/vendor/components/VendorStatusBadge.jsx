export default function VendorStatusBadge({ status }) {
  const key = String(status || "").toLowerCase();

  const styles = {
    active: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    published: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    paid: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
    processing: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
    pending: "bg-orange-500/15 text-orange-700 dark:text-orange-400",
    draft: "bg-slate-500/15 text-slate-700 dark:text-slate-300",
    rejected: "bg-red-500/15 text-red-700 dark:text-red-400",
    refunded: "bg-red-500/15 text-red-700 dark:text-red-400",
    completed: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ${styles[key] || styles.draft}`}>
      {status}
    </span>
  );
}