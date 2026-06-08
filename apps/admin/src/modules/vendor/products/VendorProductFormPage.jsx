import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

export default function VendorProductFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { t } = useTranslation();

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    console.log(isEdit ? "update product" : "create product", payload);
  }

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? t("vendorPanel.products.editProduct") : t("vendorPanel.products.addProduct")}
        description={t("vendorPanel.products.formDescription")}
        action={
          <Link to="/vendor/products" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            {t("vendorPanel.products.backToProducts")}
          </Link>
        }
      />

      <form onSubmit={handleSubmit} className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.products.basicInformation")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.productName")}
                </label>
                <input
                  name="name"
                  className="ms-input"
                  defaultValue={isEdit ? "Wireless Gaming Mouse" : ""}
                  placeholder={t("vendorPanel.products.enterProductName")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.sku")}
                </label>
                <input
                  name="sku"
                  className="ms-input"
                  defaultValue={isEdit ? "MS-MOUSE-001" : ""}
                  placeholder={t("vendorPanel.products.sku")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.barcode")}
                </label>
                <input
                  name="barcode"
                  className="ms-input"
                  placeholder={t("vendorPanel.products.barcodePlaceholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.category")}
                </label>
                <select name="category" className="ms-input">
                  <option>{t("vendorPanel.products.electronics")}</option>
                  <option>{t("vendorPanel.products.fashion")}</option>
                  <option>{t("vendorPanel.products.homeLiving")}</option>
                  <option>{t("vendorPanel.products.beauty")}</option>
                  <option>{t("vendorPanel.products.grocery")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.brand")}
                </label>
                <select name="brand" className="ms-input">
                  <option>Mahi Store</option>
                  <option>{t("vendorPanel.products.apple")}</option>
                  <option>{t("vendorPanel.products.samsung")}</option>
                  <option>{t("vendorPanel.products.generic")}</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.shortDescription")}
                </label>
                <textarea
                  name="short_description"
                  className="ms-input min-h-24"
                  placeholder={t("vendorPanel.products.shortDescriptionPlaceholder")}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.fullDescription")}
                </label>
                <textarea
                  name="description"
                  className="ms-input min-h-44"
                  placeholder={t("vendorPanel.products.fullDescriptionPlaceholder")}
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.products.pricingInventory")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.regularPrice")}
                </label>
                <input name="regular_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.salePrice")}
                </label>
                <input name="sale_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.costPrice")}
                </label>
                <input name="cost_price" className="ms-input" placeholder="0.00" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.stockQuantity")}
                </label>
                <input name="stock" className="ms-input" placeholder="0" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.lowStockAlert")}
                </label>
                <input name="low_stock_threshold" className="ms-input" placeholder="5" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.weight")}
                </label>
                <input name="weight" className="ms-input" placeholder="0.5 KG" />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.products.publish")}
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.common.status")}
                </label>
                <select name="status" className="ms-input">
                  <option value="draft">{t("vendorCommon.statuses.draft")}</option>
                  <option value="pending">{t("vendorCommon.statuses.pending")}</option>
                  <option value="published">{t("vendorCommon.statuses.published")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">
                  {t("vendorPanel.products.visibility")}
                </label>
                <select name="visibility" className="ms-input">
                  <option value="visible">{t("vendorPanel.products.visible")}</option>
                  <option value="hidden">{t("vendorPanel.products.hidden")}</option>
                </select>
              </div>

              <button type="submit" className="ms-btn-primary flex w-full items-center justify-center gap-2">
                <Save size={17} />
                {isEdit ? t("vendorPanel.products.updateProduct") : t("vendorPanel.products.createProduct")}
              </button>
            </div>
          </div>

          {isEdit && (
            <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                {t("vendorPanel.products.productTools")}
              </h3>

              <div className="mt-4 grid gap-3">
                <Link to={`/vendor/products/${id}/images`} className="ms-btn-soft">
                  {t("vendorPanel.products.manageImages")}
                </Link>
                <Link to={`/vendor/products/${id}/variants`} className="ms-btn-soft">
                  {t("vendorPanel.products.manageVariants")}
                </Link>
                <Link to={`/vendor/products/${id}/seo`} className="ms-btn-soft">
                  {t("vendorPanel.products.seoSettings")}
                </Link>
              </div>
            </div>
          )}
        </aside>
      </form>
    </div>
  );
}