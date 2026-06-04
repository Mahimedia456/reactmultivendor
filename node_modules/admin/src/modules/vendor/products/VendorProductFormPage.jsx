import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorProductFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    console.log(isEdit ? "update product" : "create product", payload);
  }

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? "Edit Product" : "Add Product"}
        description="Create or update product information, pricing, stock, category and publishing status."
        action={
          <Link to="/vendor/products" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        }
      />

      <form onSubmit={handleSubmit} className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Basic Information
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">Product Name</label>
                <input
                  name="name"
                  className="ms-input"
                  defaultValue={isEdit ? "Wireless Gaming Mouse" : ""}
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">SKU</label>
                <input
                  name="sku"
                  className="ms-input"
                  defaultValue={isEdit ? "MS-MOUSE-001" : ""}
                  placeholder="SKU"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Barcode</label>
                <input name="barcode" className="ms-input" placeholder="Barcode / GTIN" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Category</label>
                <select name="category" className="ms-input">
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Living</option>
                  <option>Beauty</option>
                  <option>Grocery</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Brand</label>
                <select name="brand" className="ms-input">
                  <option>Mahi Store</option>
                  <option>Apple</option>
                  <option>Samsung</option>
                  <option>Generic</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">Short Description</label>
                <textarea
                  name="short_description"
                  className="ms-input min-h-24"
                  placeholder="Short product summary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">Full Description</label>
                <textarea
                  name="description"
                  className="ms-input min-h-44"
                  placeholder="Full product description"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Pricing & Inventory
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-black">Regular Price</label>
                <input name="regular_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Sale Price</label>
                <input name="sale_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Cost Price</label>
                <input name="cost_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Stock Quantity</label>
                <input name="stock" className="ms-input" placeholder="0" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Low Stock Alert</label>
                <input name="low_stock_threshold" className="ms-input" placeholder="5" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Weight</label>
                <input name="weight" className="ms-input" placeholder="0.5 KG" />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              Publish
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-black">Status</label>
                <select name="status" className="ms-input">
                  <option>Draft</option>
                  <option>Pending</option>
                  <option>Published</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Visibility</label>
                <select name="visibility" className="ms-input">
                  <option>Visible</option>
                  <option>Hidden</option>
                </select>
              </div>

              <button type="submit" className="ms-btn-primary flex w-full items-center justify-center gap-2">
                <Save size={17} />
                {isEdit ? "Update Product" : "Create Product"}
              </button>
            </div>
          </div>

          {isEdit && (
            <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                Product Tools
              </h3>

              <div className="mt-4 grid gap-3">
                <Link to={`/vendor/products/${id}/images`} className="ms-btn-soft">
                  Manage Images
                </Link>
                <Link to={`/vendor/products/${id}/variants`} className="ms-btn-soft">
                  Manage Variants
                </Link>
                <Link to={`/vendor/products/${id}/seo`} className="ms-btn-soft">
                  SEO Settings
                </Link>
              </div>
            </div>
          )}
        </aside>
      </form>
    </div>
  );
}