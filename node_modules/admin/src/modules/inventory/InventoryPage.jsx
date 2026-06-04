import { Link } from "react-router-dom";
import { AlertTriangle, Boxes, Edit, PackageSearch, Search } from "lucide-react";

const inventory = [
  {
    id: 1,
    product: "Elyndor Perfume 50ml",
    sku: "ELYN-50",
    vendor: "Aamir Fragrances",
    warehouse: "Main Warehouse",
    stock: 42,
    lowStock: 10,
    status: "In Stock",
  },
  {
    id: 2,
    product: "Floral Charm 50ml",
    sku: "FLOR-50",
    vendor: "Aamir Fragrances",
    warehouse: "Main Warehouse",
    stock: 8,
    lowStock: 10,
    status: "Low Stock",
  },
  {
    id: 3,
    product: "Wireless Earbuds Pro",
    sku: "TECH-WEP",
    vendor: "Tech Point",
    warehouse: "Karachi Warehouse",
    stock: 0,
    lowStock: 5,
    status: "Out of Stock",
  },
];

export default function InventoryPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Inventory / Stock Overview</p>
          <h1 className="mt-1 text-2xl font-black">Inventory</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Monitor product stock, low stock alerts and warehouse availability.
          </p>
        </div>

        <Link to="/admin/inventory/adjustments" className="ms-btn-primary gap-2">
          <Edit size={17} />
          Adjust Stock
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total SKUs", "1,248"],
          ["In Stock", "1,102"],
          ["Low Stock", "86"],
          ["Out of Stock", "60"],
        ].map(([label, value]) => (
          <div key={label} className="ms-card p-5">
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder="Search stock by product, SKU, vendor..."
            />
          </div>

          <div className="flex gap-2">
            <Link to="/admin/inventory/low-stock" className="ms-btn-soft gap-2">
              <AlertTriangle size={17} />
              Low Stock
            </Link>

            <Link to="/admin/inventory/logs" className="ms-btn-soft gap-2">
              <PackageSearch size={17} />
              Stock Logs
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Product</th>
                <th className="px-5 py-3">SKU</th>
                <th className="px-5 py-3">Vendor</th>
                <th className="px-5 py-3">Warehouse</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Low Alert</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Boxes size={18} />
                      </div>
                      <p className="font-black">{item.product}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.sku}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.vendor}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.warehouse}</td>
                  <td className="px-5 py-4 text-sm font-black">{item.stock}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{item.lowStock}</td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        item.status === "In Stock"
                          ? "ms-badge-success"
                          : item.status === "Low Stock"
                          ? "ms-badge-warning"
                          : "ms-badge-danger"
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link to="/admin/inventory/adjustments" className="ms-btn-soft">
                      Adjust
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}