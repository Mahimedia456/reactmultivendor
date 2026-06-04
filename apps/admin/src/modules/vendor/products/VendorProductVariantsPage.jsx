import { Plus, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const variants = [
  { id: 1, name: "Black / Standard", sku: "MS-MOUSE-BLK", price: "$49", stock: 20 },
  { id: 2, name: "White / Standard", sku: "MS-MOUSE-WHT", price: "$49", stock: 22 },
];

export default function VendorProductVariantsPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Product Variants"
        description="Manage variant options like color, size, SKU, price and stock."
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Add Variant
          </button>
        }
      />

      <VendorTableCard title="Variants" description="Variant combinations for this product.">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Variant</th>
              <th className="px-5 py-4">SKU</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Stock</th>
              <th className="px-5 py-4 text-right">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {variants.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 font-black">{item.name}</td>
                <td className="px-5 py-4">{item.sku}</td>
                <td className="px-5 py-4">{item.price}</td>
                <td className="px-5 py-4">{item.stock}</td>
                <td className="px-5 py-4 text-right">
                  <button className="ms-btn-soft h-9 w-9 px-0 text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </VendorTableCard>
    </div>
  );
}