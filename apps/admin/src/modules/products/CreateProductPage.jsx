import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Barcode,
  Box,
  FileText,
  ImagePlus,
  Save,
  Search,
  Settings2,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateProductPage() {
  const { t } = useTranslation();

  const tabs = [
    [t("productsPage.general"), FileText],
    [t("productsPage.images"), ImagePlus],
    [t("productsPage.pricing"), Box],
    [t("productsPage.inventory"), Barcode],
    [t("nav.attributes"), Settings2],
    [t("productsPage.shipping"), Truck],
    [t("productsPage.seo"), Search],
  ];

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/products"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("productsPage.backToProducts")}
        </Link>

        <h1 className="text-2xl font-black">{t("productsPage.addProduct")}</h1>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("productsPage.createText")}
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_330px]">
        <div className="space-y-5">
          <div className="ms-card p-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(([label, Icon], index) => (
                <button
                  key={label}
                  className={
                    index === 0 ? "ms-btn-primary h-10 gap-2" : "ms-btn-soft gap-2"
                  }
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("productsPage.generalInformation")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.productName")}
                </label>
                <input className="ms-input" placeholder="Elyndor Perfume 50ml" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("common.slug")}
                </label>
                <input className="ms-input" placeholder="elyndor-perfume-50ml" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.productType")}
                </label>
                <select className="ms-input">
                  <option>{t("productsPage.simpleProduct")}</option>
                  <option>{t("productsPage.variableProduct")}</option>
                  <option>{t("productsPage.digitalProduct")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.category")}
                </label>
                <select className="ms-input">
                  <option>{t("categories.menFragrance")}</option>
                  <option>{t("categories.womenFragrance")}</option>
                  <option>{t("categories.electronics")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.brand")}
                </label>
                <select className="ms-input">
                  <option>Scents By Aamir</option>
                  <option>Mahi Store Basics</option>
                  <option>Tech World</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.shortDescription")}
                </label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder={t("productsPage.shortProductSummary")}
                />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("common.description")}
                </label>
                <textarea
                  className="ms-input h-36 py-3"
                  placeholder={t("productsPage.fullProductDescription")}
                />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("productsPage.images")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.featuredImage")}
                </label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">
                    {t("productsPage.uploadMainImage")}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    PNG, JPG, WEBP
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.gallery")}
                </label>
                <div className="rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                  <ImagePlus className="mx-auto text-slate-400" size={32} />
                  <p className="mt-3 text-sm font-bold">
                    {t("productsPage.uploadGalleryImages")}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {t("productsPage.multipleImagesAllowed")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("productsPage.pricingInventory")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.costPrice")}
                </label>
                <input className="ms-input" placeholder="2500" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.salePrice")}
                </label>
                <input className="ms-input" placeholder="4500" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.comparePrice")}
                </label>
                <input className="ms-input" placeholder="5000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.sku")}
                </label>
                <input className="ms-input" placeholder="ELYN-50" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.barcode")}
                </label>
                <input className="ms-input" placeholder="123456789" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.stockQty")}
                </label>
                <input className="ms-input" placeholder="42" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.lowStockAlert")}
                </label>
                <input className="ms-input" placeholder="10" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.taxClass")}
                </label>
                <select className="ms-input">
                  <option>{t("productsPage.standard")}</option>
                  <option>{t("productsPage.zeroTax")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.trackStock")}
                </label>
                <select className="ms-input">
                  <option>{t("productsPage.yes")}</option>
                  <option>{t("productsPage.no")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">
              {t("productsPage.attributesSeo")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.size")}
                </label>
                <select className="ms-input">
                  <option>50ml</option>
                  <option>100ml</option>
                  <option>200ml</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("attributes.gender")}
                </label>
                <select className="ms-input">
                  <option>{t("attributes.men")}</option>
                  <option>{t("attributes.women")}</option>
                  <option>{t("attributes.unisex")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.seoTitle")}
                </label>
                <input
                  className="ms-input"
                  placeholder={t("productsPage.buyElyndorPlaceholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.seoKeywords")}
                </label>
                <input
                  className="ms-input"
                  placeholder={t("productsPage.seoKeywordsPlaceholder")}
                />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.seoDescription")}
                </label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder={t("productsPage.metaDescription")}
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("productsPage.publish")}</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("common.status")}
                </label>
                <select className="ms-input">
                  <option>{t("status.active")}</option>
                  <option>{t("status.draft")}</option>
                  <option>{t("productsPage.pendingApproval")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.visibility")}
                </label>
                <select className="ms-input">
                  <option>{t("productsPage.public")}</option>
                  <option>{t("productsPage.hidden")}</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">
                  {t("productsPage.featuredProduct")}
                </span>
              </label>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="ms-btn-soft flex-1">
                {t("productsPage.saveDraft")}
              </button>
              <button className="ms-btn-primary flex-1 gap-2">
                <Save size={16} />
                {t("productsPage.publish")}
              </button>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("productsPage.vendorAssignment")}
            </h3>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold">
                {t("productsPage.vendor")}
              </label>
              <select className="ms-input">
                <option>Aamir Fragrances</option>
                <option>Urban Deals</option>
                <option>Tech Point</option>
              </select>
            </div>

            <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">
              {t("productsPage.vendorAssignmentNote")}
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">
              {t("productsPage.shipping")}
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.weight")}
                </label>
                <input className="ms-input" placeholder="0.5 kg" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.deliveryClass")}
                </label>
                <select className="ms-input">
                  <option>{t("productsPage.standard")}</option>
                  <option>{t("productsPage.fragile")}</option>
                  <option>{t("productsPage.heavy")}</option>
                </select>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}