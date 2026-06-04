import { Link } from "react-router-dom";
import { Edit, ListChecks, Plus, Trash2 } from "lucide-react";

const attributes = [
  { id: 1, name: "Size", values: ["30ml", "50ml", "100ml"] },
  { id: 2, name: "Gender", values: ["Men", "Women", "Unisex"] },
  { id: 3, name: "Concentration", values: ["EDP", "EDT", "Parfum"] },
];

export default function AttributesPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">Catalog / Attributes</p>
          <h1 className="mt-1 text-2xl font-black">Attributes</h1>
        </div>

        <Link to="/admin/attributes/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          Add Attribute
        </Link>
      </div>

      <div className="grid gap-4">
        {attributes.map((attribute) => (
          <div key={attribute.id} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <ListChecks size={18} />
                </div>
                <div>
                  <h3 className="font-black">{attribute.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {attribute.values.map((value) => (
                      <span key={value} className="ms-badge">{value}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Link to={`/admin/attributes/${attribute.id}`} className="ms-btn-soft h-9 w-9 px-0">
                  <Edit size={15} />
                </Link>
                <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}