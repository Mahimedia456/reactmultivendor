import { Download, Users } from "lucide-react";

const customers = [
  ["Ahmed Raza", "12", "Rs 84,500"],
  ["Sara Khan", "8", "Rs 42,200"],
  ["Hamza Ali", "5", "Rs 18,400"],
];

export default function CustomerReportsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">Reports / Customers</p>
          <h1 className="mt-1 text-2xl font-black">Customer Reports</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Download size={17} />
          Export
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Customers", "18,400"],
          ["New", "840"],
          ["Returning", "6,200"],
          ["Lifetime Value", "Rs 2.8M"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <Users size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Orders</th>
              <th className="px-5 py-3">Spent</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {customers.map(([name, orders, spent]) => (
              <tr key={name}>
                <td className="px-5 py-4 font-black">{name}</td>
                <td className="px-5 py-4">{orders}</td>
                <td className="px-5 py-4 font-bold">{spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}