import { Link } from "react-router-dom";
import { Edit, FolderTree, Plus, Search, Trash2 } from "lucide-react";

const categories = [
  { id: 1, name: "Perfumes", parent: "Main", products: 156, status: "Active" },
  { id: 2, name: "Men Fragrance", parent: "Perfumes", products: 72, status: "Active" },
  { id: 3, name: "Women Fragrance", parent: "Perfumes", products: 61, status: "Active" },
  { id: 4, name: "Electronics", parent: "Main", products: 230, status: "Inactive" },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Catalog / Categories</p>
          <h1 className="mt-1 text-2xl font-black">Categories</h1>
        </div>

        <Link to="/admin/categories/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Add Category
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Categories", "48"],
          ["Active", "42"],
          ["Inactive", "6"],
          ["Products Linked", "1,248"],
        ].map(([label, value]) => (
          <div className="ms-card p-5" key={label}>
            <p className="text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder="Search categories..." />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Parent</th>
                <th className="px-5 py-3">Products</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <FolderTree size={18} />
                      </div>
                      <p className="font-black">{category.name}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">{category.parent}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{category.products}</td>
                  <td className="px-5 py-4">
                    <span className={category.status === "Active" ? "ms-badge-success" : "ms-badge-warning"}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link to={`/admin/categories/${category.id}`} className="ms-btn-soft h-9 w-9 px-0">
                        <Edit size={15} />
                      </Link>
                      <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                        <Trash2 size={15} />
                      </button>
                    </div>
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