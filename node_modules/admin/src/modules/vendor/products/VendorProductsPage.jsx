import { Link } from "react-router-dom";
import { Edit, Eye, Package, Plus, Search, Trash2 } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";
import VendorStatusBadge from "../components/VendorStatusBadge";

const products = [
  {
    id: 1,
    name: "Wireless Gaming Mouse",
    sku: "MS-MOUSE-001",
    category: "Electronics",
    price: "$49.00",
    stock: 42,
    status: "Published",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    sku: "MS-WATCH-014",
    category: "Wearables",
    price: "$129.00",
    stock: 16,
    status: "Published",
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    sku: "MS-BAG-221",
    category: "Bags",
    price: "$79.00",
    stock: 5,
    status: "Pending",
  },
];

export default function VendorProductsPage() {
  function handleDelete(product) {
    const confirmed = window.confirm(`Delete ${product.name}?`);
    if (!confirmed) return;

    console.log("delete product", product.id);
  }

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Products"
        description="Add, edit, view and manage all products for your vendor store."
        action={
          <Link to="/vendor/products/create" className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            Add Product
          </Link>
        }
      />

      <VendorTableCard
        title="Product List"
        description="All vendor products with stock and publish status."
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder="Search products..."
            />
          </div>
        }
      >
        <table className="w-full min-w-[980px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">SKU</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Stock</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5">
                      <Package size={19} />
                    </div>
                    <div>
                      <p className="font-black text-slate-950 dark:text-white">
                        {product.name}
                      </p>
                      <p className="text-xs font-semibold text-slate-400">
                        Vendor product
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {product.sku}
                </td>

                <td className="px-5 py-4 font-bold">{product.category}</td>
                <td className="px-5 py-4 font-black">{product.price}</td>
                <td className="px-5 py-4 font-black">{product.stock}</td>

                <td className="px-5 py-4">
                  <VendorStatusBadge status={product.status} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link to={`/vendor/products/${product.id}`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </Link>

                    <Link to={`/vendor/products/${product.id}/edit`} className="ms-btn-soft h-9 w-9 px-0">
                      <Edit size={16} />
                    </Link>

                    <button
                      onClick={() => handleDelete(product)}
                      className="ms-btn-soft h-9 w-9 px-0 text-red-500"
                    >
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