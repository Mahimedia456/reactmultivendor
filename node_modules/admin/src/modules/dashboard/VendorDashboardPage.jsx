export default function VendorDashboardPage() {
  const cards = [
    ["Vendor Sales", "Rs 640k"],
    ["Orders", "420"],
    ["Products", "86"],
    ["Pending Payout", "Rs 92k"],
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Store sales, products, orders and payout summary.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <h3 className="mt-3 text-2xl font-bold">{value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 ms-card p-6">
        <h3 className="font-bold">Vendor Activity</h3>
        <div className="mt-6 h-72 rounded-2xl bg-slate-100 dark:bg-slate-800" />
      </div>
    </div>
  );
}
