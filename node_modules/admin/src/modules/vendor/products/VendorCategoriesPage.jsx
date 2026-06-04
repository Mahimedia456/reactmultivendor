import { Edit, Eye, Plus, Search, Trash2, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const categories = [
  { id: 1, name: "Electronics", slug: "electronics", products: 42, parent: "Main", status: "Active" },
  { id: 2, name: "Fashion", slug: "fashion", products: 28, parent: "Main", status: "Active" },
  { id: 3, name: "Accessories", slug: "accessories", products: 15, parent: "Electronics", status: "Draft" },
];

export default function VendorCategoriesPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Vendor Categories"
        description="Create and manage your own product categories."
        action={
          <Link to="/vendor/categories/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} /> Add Category
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        <VendorStatCard title="Total Categories" value="18" icon={Boxes} />
        <VendorStatCard title="Active" value="14" icon={Boxes} tone="green" />
        <VendorStatCard title="Draft" value="4" icon={Boxes} tone="orange" />
      </div>

      <VendorTableCard
        title="Category List"
        description="Vendor-owned product categories"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input className="bg-transparent text-sm font-semibold outline-none" placeholder="Search categories..." />
          </div>
        }
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Slug</th>
              <th className="px-5 py-4">Parent</th>
              <th className="px-5 py-4">Products</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {categories.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.name}</td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.slug}</td>
                <td className="px-5 py-4 font-bold">{item.parent}</td>
                <td className="px-5 py-4 font-black">{item.products}</td>
                <td className="px-5 py-4"><VendorStatusBadge status={item.status} /></td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0"><Eye size={16} /></button>
                    <Link to={`/vendor/categories/${item.id}/edit`} className="ms-btn-soft h-9 w-9 px-0"><Edit size={16} /></Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}