import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Barcode,
  Box,
  FileText,
  ImagePlus,
  Package,
  Save,
  Search,
  Settings2,
  Truck,
} from "lucide-react";

const tabs = [
  ["General", FileText],
  ["Images", ImagePlus],
  ["Pricing", Box],
  ["Inventory", Barcode],
  ["Attributes", Settings2],
  ["Shipping", Truck],
  ["SEO", Search],
];

export default function CreateProductPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/products"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>
        <h1 className="text-2xl font-black">Add Product</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          Create product with pricing, stock, vendor and marketplace settings.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div className="space-y-5">
          <div className="ms-card p-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(([label, Icon], index) => (
                <button
                  key={label}
                  className={index === 0 ? "ms-btn-primary h-10 gap-2" : "ms-btn-soft gap-2"}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">General Information</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Product Name</label>
                <input className="ms-input" placeholder="Elyndor Perfume 50ml" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Slug</label>
                <input className="ms-input" placeholder="elyndor-perfume-50ml" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Product Type</label>
                <select className="ms-input">
                  <option>Simple Product</option>
                  <option>Variable Product</option>
                  <option>Digital Product</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Category</label>
                <select className="ms-input">
                  <option>Men Fragrance</option>
                  <option>Women Fragrance</option>
                  <option>Electronics</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Brand</label>
                <select className="ms-input">
                  <option>Scents By Aamir</option>
                  <option>Mahi Store Basics</option>
                  <option>Tech World</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Short Description</label>
                <textarea className="ms-input h-24 py-3" placeholder="Short product summary" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Description</label>
                <textarea className="ms-input h-36 py-3" placeholder="Full product description" />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Images</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Featured Image</label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">Upload main image</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">PNG, JPG, WEBP</p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Gallery</label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">Upload gallery images</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">Multiple images allowed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Pricing & Inventory</h3>

            <div className="grid gap-5 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold">Cost Price</label>
                <input className="ms-input" placeholder="2500" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Sale Price</label>
                <input className="ms-input" placeholder="4500" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Compare Price</label>
                <input className="ms-input" placeholder="5000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">SKU</label>
                <input className="ms-input" placeholder="ELYN-50" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Barcode</label>
                <input className="ms-input" placeholder="123456789" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Stock Qty</label>
                <input className="ms-input" placeholder="42" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Low Stock Alert</label>
                <input className="ms-input" placeholder="10" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Tax Class</label>
                <select className="ms-input">
                  <option>Standard</option>
                  <option>Zero Tax</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Track Stock</label>
                <select className="ms-input">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Attributes & SEO</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Size</label>
                <select className="ms-input">
                  <option>50ml</option>
                  <option>100ml</option>
                  <option>200ml</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Gender</label>
                <select className="ms-input">
                  <option>Men</option>
                  <option>Women</option>
                  <option>Unisex</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">SEO Title</label>
                <input className="ms-input" placeholder="Buy Elyndor Perfume Online" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">SEO Keywords</label>
                <input className="ms-input" placeholder="elyndor, perfume, fragrance" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">SEO Description</label>
                <textarea className="ms-input h-24 py-3" placeholder="Meta description" />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Publish</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">Status</label>
                <select className="ms-input">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Pending Approval</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Visibility</label>
                <select className="ms-input">
                  <option>Public</option>
                  <option>Hidden</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Featured Product</span>
              </label>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="ms-btn-soft flex-1">Save Draft</button>
              <button className="ms-btn-primary flex-1 gap-2">
                <Save size={16} />
                Publish
              </button>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Vendor Assignment</h3>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold">Vendor</label>
              <select className="ms-input">
                <option>Aamir Fragrances</option>
                <option>Urban Deals</option>
                <option>Tech Point</option>
              </select>
            </div>

            <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">
              Admin can assign this product to any vendor. Vendor will only see assigned products.
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Shipping</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">Weight</label>
                <input className="ms-input" placeholder="0.5 kg" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Delivery Class</label>
                <select className="ms-input">
                  <option>Standard</option>
                  <option>Fragile</option>
                  <option>Heavy</option>
                </select>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}