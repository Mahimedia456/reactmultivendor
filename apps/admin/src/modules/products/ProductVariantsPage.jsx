import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const variants = [
  { id: 1, size: "50ml", sku: "ELYN-50", price: "4500", stock: "42" },
  { id: 2, size: "100ml", sku: "ELYN-100", price: "8200", stock: "18" },
];

export default function ProductVariantsPage() {
  const { id } = useParams();
  const { t } = useTranslation();

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

        <h1 className="text-2xl font-black">
          {t("productsPage.productVariants")}
        </h1>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("productsPage.productVariantText", { id })}
        </p>
      </div>

      <div className="ms-card p-5">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-black">
            {t("productsPage.variants")}
          </h3>

          <button className="ms-btn-primary gap-2">
            <Plus size={17} />
            {t("productsPage.addVariant")}
          </button>
        </div>

        <div className="space-y-4">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className="grid gap-4 rounded-card border border-panel-line p-4 dark:border-panel-darkLine lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
            >
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.size")}
                </label>
                <input className="ms-input" defaultValue={variant.size} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.sku")}
                </label>
                <input className="ms-input" defaultValue={variant.sku} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.price")}
                </label>
                <input className="ms-input" defaultValue={variant.price} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("productsPage.stock")}
                </label>
                <input className="ms-input" defaultValue={variant.stock} />
              </div>

              <div className="flex items-end">
                <button className="ms-btn-soft h-11 w-11 px-0 text-rose-700">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("productsPage.saveVariants")}
          </button>
        </div>
      </div>
    </div>
  );
}