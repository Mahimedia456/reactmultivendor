import { Plus, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorTableCard from "../components/VendorTableCard";

const variants = [
  {
    id: 1,
    name: "Black / Standard",
    sku: "MS-MOUSE-BLK",
    price: "$49",
    stock: 20,
  },
  {
    id: 2,
    name: "White / Standard",
    sku: "MS-MOUSE-WHT",
    price: "$49",
    stock: 22,
  },
];

export default function VendorProductVariantsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.products.variantsTitle")}
        description={t("vendorPanel.products.variantsDescription")}
        action={
          <button className="ms-btn-primary inline-flex items-center gap-2">
            <Plus size={17} />
            {t("vendorPanel.products.addVariant")}
          </button>
        }
      />

      <VendorTableCard
        title={t("vendorPanel.products.variants")}
        description={t("vendorPanel.products.variantsTableDescription")}
      >
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-white/5">
            <tr>
              <th className="px-5 py-4">{t("vendorPanel.products.variant")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.sku")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.price")}</th>
              <th className="px-5 py-4">{t("vendorPanel.products.stockQuantity")}</th>
              <th className="px-5 py-4 text-right">{t("vendorPanel.products.delete")}</th>
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