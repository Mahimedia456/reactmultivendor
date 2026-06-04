import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorProductSeoPage() {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="Product SEO"
        description="Manage SEO title, slug, meta description and search keywords."
        action={<button className="ms-btn-primary">Save SEO</button>}
      />

      <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-black">SEO Title</label>
            <input className="ms-input" placeholder="SEO title" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Product Slug</label>
            <input className="ms-input" placeholder="wireless-gaming-mouse" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Meta Description</label>
            <textarea className="ms-input min-h-32" placeholder="Meta description" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-black">Keywords</label>
            <input className="ms-input" placeholder="gaming mouse, wireless mouse" />
          </div>
        </div>
      </div>
    </div>
  );
}