export default function ReturnsPage() {
  const rows = [
    ["RET-1001", "MS-1001", "Ahmed Raza", "Damaged item", "Pending"],
    ["RET-1002", "MS-1008", "Sara Khan", "Wrong size", "Approved"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Sales / Returns</p>
        <h1 className="mt-1 text-2xl font-black">Returns</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Return ID</th>
              <th className="px-5 py-3">Order</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Reason</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([id, order, customer, reason, status]) => (
              <tr key={id}>
                <td className="px-5 py-4 font-black">{id}</td>
                <td className="px-5 py-4 text-sm font-semibold">{order}</td>
                <td className="px-5 py-4 text-sm font-semibold">{customer}</td>
                <td className="px-5 py-4 text-sm font-semibold">{reason}</td>
                <td className="px-5 py-4">
                  <span className={status === "Approved" ? "ms-badge-success" : "ms-badge-warning"}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}