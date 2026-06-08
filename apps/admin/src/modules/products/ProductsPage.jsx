import { Link } from "react-router-dom";
import {
  Edit,
  Eye,
  Filter,
  MoreVertical,
  Package,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: 1,
    name: "Elyndor Perfume 50ml",
    sku: "ELYN-50",
    vendor: "Aamir Fragrances",
    categoryKey: "categories.menFragrance",
    brand: "Scents By Aamir",
    stock: 42,
    price: "Rs 4,500",
    status: "active",
  },
  {
    id: 2,
    name: "Floral Charm 50ml",
    sku: "FLOR-50",
    vendor: "Aamir Fragrances",
    categoryKey: "categories.womenFragrance",
    brand: "Scents By Aamir",
    stock: 18,
    price: "Rs 2,200",
    status: "active",
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    sku: "TECH-WEP",
    vendor: "Tech Point",
    categoryKey: "categories.electronics",
    brand: "Tech World",
    stock: 0,
    price: "Rs 7,900",
    status: "draft",
  },
];

export default function ProductsPage() {
  const { t } = useTranslation();

  const stats = [
    ["productsPage.totalProducts", "1,248"],
    ["status.active", "1,102"],
    ["status.draft", "86"],
    ["productsPage.outOfStock", "60"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("productsPage.breadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("productsPage.title")}
          </h1>
        </div>

        <Link to="/admin/products/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("productsPage.addProduct")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div className="ms-card p-5" key={labelKey}>
            <p className="text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-2 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="flex flex-col gap-3 border-b border-panel-line p-4 dark:border-panel-darkLine lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-md flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("productsPage.searchPlaceholder")}
            />
          </div>

          <div className="flex gap-2">
            <select className="ms-input h-10 w-40">
              <option>{t("productsPage.allStatus")}</option>
              <option>{t("status.active")}</option>
              <option>{t("status.draft")}</option>
              <option>{t("productsPage.outOfStock")}</option>
            </select>

            <button className="ms-btn-soft gap-2">
              <Filter size={17} />
              {t("productsPage.filters")}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1150px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("productsPage.product")}</th>
                <th className="px-5 py-3">{t("productsPage.sku")}</th>
                <th className="px-5 py-3">{t("productsPage.vendor")}</th>
                <th className="px-5 py-3">{t("productsPage.category")}</th>
                <th className="px-5 py-3">{t("productsPage.brand")}</th>
                <th className="px-5 py-3">{t("productsPage.stock")}</th>
                <th className="px-5 py-3">{t("productsPage.price")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">
                  {t("common.actions")}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                        <Package size={19} />
                      </div>
                      <div>
                        <p className="font-black">{product.name}</p>
                        <p className="text-xs font-semibold text-slate-500">
                          {t("productsPage.productId")}: #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">
                    {product.sku}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">
                    {product.vendor}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">
                    {t(product.categoryKey)}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold">
                    {product.brand}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        product.stock === 0
                          ? "ms-badge-danger"
                          : product.stock < 20
                          ? "ms-badge-warning"
                          : "ms-badge-success"
                      }
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-black">
                    {product.price}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        product.status === "active"
                          ? "ms-badge-success"
                          : "ms-badge-warning"
                      }
                    >
                      {t(`status.${product.status}`)}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/products/${product.id}`}
                        className="ms-btn-soft h-9 w-9 px-0"
                      >
                        <Edit size={15} />
                      </Link>

                      <Link
                        to={`/admin/products/${product.id}/variants`}
                        className="ms-btn-soft h-9 w-9 px-0"
                      >
                        <Eye size={15} />
                      </Link>

                      <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                        <Trash2 size={15} />
                      </button>

                      <button className="ms-btn-soft h-9 w-9 px-0">
                        <MoreVertical size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}