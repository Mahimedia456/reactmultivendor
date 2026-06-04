export default function RefundsPage() {
  const rows = [
    ["REF-1001", "MS-1001", "Ahmed Raza", "Rs 4,500", "Pending"],
    ["REF-1002", "MS-1008", "Sara Khan", "Rs 2,200", "Paid"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">Sales / Refunds</p>
        <h1 className="mt-1 text-2xl font-black">Refunds</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Refund ID</th>
              <th className="px-5 py-3">Order</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([id, order, customer, amount, status]) => (
              <tr key={id}>
                <td className="px-5 py-4 font-black">{id}</td>
                <td className="px-5 py-4 text-sm font-semibold">{order}</td>
                <td className="px-5 py-4 text-sm font-semibold">{customer}</td>
                <td className="px-5 py-4 text-sm font-black">{amount}</td>
                <td className="px-5 py-4">
                  <span className={status === "Paid" ? "ms-badge-success" : "ms-badge-warning"}>
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