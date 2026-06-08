import { ArrowLeft, Download, Printer } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";

const items = [
  { name: "Wireless Gaming Mouse", sku: "MS-MOUSE-001", qty: 2, price: "$49", total: "$98" },
  { name: "Leather Laptop Bag", sku: "MS-BAG-221", qty: 1, price: "$79", total: "$79" },
];

export default function VendorOrderInvoicePage() {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.orders.invoiceTitle", { id })}
        description={t("vendorPanel.orders.invoiceDescription")}
        action={
          <div className="flex gap-2">
            <Link to={`/vendor/orders/${id}`} className="ms-btn-soft inline-flex items-center gap-2">
              <ArrowLeft size={17} />
              {t("vendorPanel.common.back")}
            </Link>
            <button onClick={() => window.print()} className="ms-btn-primary inline-flex items-center gap-2">
              <Printer size={17} />
              {t("vendorPanel.orders.print")}
            </button>
            <button className="ms-btn-soft inline-flex items-center gap-2">
              <Download size={17} />
              {t("vendorPanel.orders.pdf")}
            </button>
          </div>
        }
      />

      <div className="rounded-2xl border border-panel-line bg-white p-8 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
        <div className="flex flex-col justify-between gap-6 border-b border-panel-line pb-6 dark:border-panel-darkLine md:flex-row">
          <div>
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">Mahi Store</h2>
            <p className="mt-2 text-sm text-slate-500">{t("vendorPanel.orders.marketplace")}</p>
            <p className="mt-1 text-sm text-slate-500">Karachi, Pakistan</p>
          </div>

          <div className="text-left md:text-right">
            <h3 className="text-xl font-black text-slate-950 dark:text-white">{t("vendorPanel.orders.invoice")}</h3>
            <p className="mt-2 text-sm font-bold text-slate-500">{t("vendorPanel.orders.invoice")}: #INV-{id}</p>
            <p className="text-sm font-bold text-slate-500">{t("vendorPanel.orders.order")}: #ORD-{id}</p>
            <p className="text-sm font-bold text-slate-500">{t("vendorPanel.common.date")}: 2026-06-04</p>
          </div>
        </div>

        <div className="grid gap-6 border-b border-panel-line py-6 dark:border-panel-darkLine md:grid-cols-2">
          <div>
            <h4 className="font-black text-slate-950 dark:text-white">{t("vendorPanel.orders.billTo")}</h4>
            <p className="mt-2 text-sm text-slate-500">Ali Khan</p>
            <p className="text-sm text-slate-500">ali@example.com</p>
            <p className="text-sm text-slate-500">House 12, Gulshan, Karachi</p>
          </div>

          <div>
            <h4 className="font-black text-slate-950 dark:text-white">{t("vendorPanel.orders.vendor")}</h4>
            <p className="mt-2 text-sm text-slate-500">Mahi Vendor Store</p>
            <p className="text-sm text-slate-500">vendor@mahistore.com</p>
            <p className="text-sm text-slate-500">Karachi, Pakistan</p>
          </div>
        </div>

        <div className="overflow-x-auto py-6">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
              <tr>
                <th className="px-5 py-4">{t("vendorPanel.orders.product")}</th>
                <th className="px-5 py-4">{t("vendorPanel.orders.sku")}</th>
                <th className="px-5 py-4">{t("vendorPanel.orders.qty")}</th>
                <th className="px-5 py-4">{t("vendorPanel.orders.price")}</th>
                <th className="px-5 py-4 text-right">{t("vendorPanel.orders.total")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {items.map((item) => (
                <tr key={item.sku}>
                  <td className="px-5 py-4 font-black">{item.name}</td>
                  <td className="px-5 py-4 text-sm text-slate-500">{item.sku}</td>
                  <td className="px-5 py-4">{item.qty}</td>
                  <td className="px-5 py-4">{item.price}</td>
                  <td className="px-5 py-4 text-right font-black">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ml-auto max-w-sm space-y-3">
          <div className="flex justify-between"><span>{t("vendorPanel.orders.subtotal")}</span><strong>$177</strong></div>
          <div className="flex justify-between"><span>{t("vendorPanel.orders.shipping")}</span><strong>$12</strong></div>
          <div className="flex justify-between"><span>{t("vendorPanel.orders.commission")}</span><strong className="text-red-500">-$18</strong></div>
          <div className="flex justify-between border-t pt-3 text-xl font-black dark:border-panel-darkLine">
            <span>{t("vendorPanel.orders.vendorEarning")}</span><span>$171</span>
          </div>
        </div>
      </div>
    </div>
  );
}