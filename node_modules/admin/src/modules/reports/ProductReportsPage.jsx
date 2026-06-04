import { Download, Package } from "lucide-react";

const products = [
  ["Elyndor", "386", "Rs 1,740,000"],
  ["Vauren", "252", "Rs 630,000"],
  ["Night Rider", "198", "Rs 435,000"],
];

export default function ProductReportsPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">Reports / Products</p>
          <h1 className="mt-1 text-2xl font-black">Product Reports</h1>
        </div>

        <button className="ms-btn-primary gap-2">
          <Download size={17} />
          Export
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Products", "18,420"],
          ["Best Sellers", "240"],
          ["Out Of Stock", "86"],
          ["Revenue", "Rs 18.4M"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <Package size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Units Sold</th>
              <th className="px-5 py-3">Revenue</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {products.map(([product, sold, revenue]) => (
              <tr key={product}>
                <td className="px-5 py-4 font-black">{product}</td>
                <td className="px-5 py-4">{sold}</td>
                <td className="px-5 py-4 font-bold">{revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}