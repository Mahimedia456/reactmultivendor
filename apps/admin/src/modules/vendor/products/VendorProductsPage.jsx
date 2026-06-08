import { Link } from "react-router-dom";
import { Edit, Eye, Package, Plus, Search, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";
import VendorStatusBadge from "../components/VendorStatusBadge";

const products = [
  {
    id: 1,
    name: "Wireless Gaming Mouse",
    sku: "MS-MOUSE-001",
    categoryKey: "vendorPanel.products.electronics",
    price: "$49.00",
    stock: 42,
    status: "published",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    sku: "MS-WATCH-014",
    categoryKey: "vendorPanel.products.wearables",
    price: "$129.00",
    stock: 16,
    status: "published",
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    sku: "MS-BAG-221",
    categoryKey: "vendorPanel.products.bags",
    price: "$79.00",
    stock: 5,
    status: "pending",
  },
];

export default function VendorProductsPage() {
  const { t } = useTranslation();

  function handleDelete(product) {
    const confirmed = window.confirm(
      t("vendorPanel.products.deleteConfirm", { name: product.name })
    );

    if (!confirmed) return;

    console.log("delete product", product.id);
  }

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.products.title")}
        description={t("vendorPanel.products.description")}
        action={
          <Link
            to="/vendor/products/create"
            className="ms-btn-primary inline-flex items-center gap-2"
          >
            <Plus size={17} />
            {t("vendorPanel.products.addProduct")}
          </Link>
        }
      />

      <VendorTableCard
        title={t("vendorPanel.products.productList")}
        description={t("vendorPanel.products.productListDescription")}
        action={
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 dark:border-panel-darkLine">
            <Search size={17} className="text-slate-400" />
            <input
              className="bg-transparent text-sm font-semibold outline-none"
              placeholder={t("vendorPanel.products.searchProducts")}
            />
          </div>
        }
      >
        <table className="w-full min-w-[980px] text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.products.productName")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.sku")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.category")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.price")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.stockQuantity")}</th>
              <th className="px-5 py-4">{t("vendorPanel.common.status")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.common.actions")}</th>
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
                        {t("vendorPanel.products.vendorProduct")}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm font-bold text-slate-500">
                  {product.sku}
                </td>

                <td className="px-5 py-4 font-bold">{t(product.categoryKey)}</td>
                <td className="px-5 py-4 font-black">{product.price}</td>
                <td className="px-5 py-4 font-black">{product.stock}</td>

                <td className="px-5 py-4">
                  <VendorStatusBadge status={product.status} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      to={`/vendor/products/${product.id}`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
                      <Eye size={16} />
                    </Link>

                    <Link
                      to={`/vendor/products/${product.id}/edit`}
                      className="ms-btn-soft h-9 w-9 px-0"
                    >
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