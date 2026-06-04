import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";
import VendorTableCard from "../components/VendorTableCard";

const attributes = [
  {
    id: 1,
    name: "Color",
    slug: "color",
    type: "Select",
    values: ["Black", "White", "Red", "Blue"],
    status: "Active",
  },
  {
    id: 2,
    name: "Size",
    slug: "size",
    type: "Select",
    values: ["S", "M", "L", "XL"],
    status: "Active",
  },
  {
    id: 3,
    name: "Material",
    slug: "material",
    type: "Text",
    values: ["Cotton", "Leather", "Plastic"],
    status: "Draft",
  },
];

export default function VendorAttributesPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Product Attributes"
        description="Create and manage product attributes for variants such as color, size, material and storage."
        action={
          <Link to="/vendor/attributes/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Add Attribute
          </Link>
        }
      />

      <VendorTableCard
        title="Attributes"
        description="Vendor product attribute list"
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder="Search attributes..."
            />
          </div>
        }
      >
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Attribute</th>
              <th className="px-5 py-4">Slug</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Values</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {attributes.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4">
                  <p className="font-black text-slate-950 dark:text-white">{item.name}</p>
                  <p className="text-xs font-semibold text-slate-400">Used for product variants</p>
                </td>
                <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.slug}</td>
                <td className="px-5 py-4 font-bold">{item.type}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    {item.values.map((value) => (
                      <span
                        key={value}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <Link to={`/vendor/attributes/${item.id}/edit`} className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </Link>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                      <Trash2 size={16} />
                    </button>
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