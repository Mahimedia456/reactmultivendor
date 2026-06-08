import { ArrowLeft, CheckCircle2, FileText, Mail, MapPin, Phone, Save, Truck, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

const items = [
  { name: "Wireless Gaming Mouse", sku: "MS-MOUSE-001", qty: 2, price: "$49", total: "$98" },
  { name: "Leather Laptop Bag", sku: "MS-BAG-221", qty: 1, price: "$79", total: "$79" },
];

export default function VendorOrderDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const timeline = [
    t("vendorPanel.orders.orderPlaced"),
    t("vendorPanel.orders.paymentConfirmed"),
    t("vendorPanel.orders.vendorProcessing"),
  ];

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.orders.detailTitle", { id })}
        description={t("vendorPanel.orders.detailDescription")}
        action={
          <div className="flex gap-2">
            <Link to="/vendor/orders" className="ms-btn-soft inline-flex items-center gap-2">
              <ArrowLeft size={17} />
              {t("vendorPanel.common.back")}
            </Link>
            <Link to={`/vendor/orders/${id}/invoice`} className="ms-btn-primary inline-flex items-center gap-2">
              <FileText size={17} />
              {t("vendorPanel.orders.invoice")}
            </Link>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="border-b border-panel-line p-5 dark:border-panel-darkLine">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                {t("vendorPanel.orders.orderItems")}
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
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
                      <td className="px-5 py-4 font-black text-slate-950 dark:text-white">{item.name}</td>
                      <td className="px-5 py-4 text-sm font-bold text-slate-500">{item.sku}</td>
                      <td className="px-5 py-4">{item.qty}</td>
                      <td className="px-5 py-4">{item.price}</td>
                      <td className="px-5 py-4 text-right font-black">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ml-auto w-full max-w-sm space-y-3 border-t border-panel-line p-5 dark:border-panel-darkLine">
              <div className="flex justify-between text-sm"><span>{t("vendorPanel.orders.subtotal")}</span><strong>$177</strong></div>
              <div className="flex justify-between text-sm"><span>{t("vendorPanel.orders.shipping")}</span><strong>$12</strong></div>
              <div className="flex justify-between text-sm"><span>{t("vendorPanel.orders.commission")}</span><strong className="text-red-500">-$18</strong></div>
              <div className="flex justify-between border-t pt-3 text-lg font-black dark:border-panel-darkLine">
                <span>{t("vendorPanel.orders.vendorEarning")}</span><span>$171</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">
              {t("vendorPanel.orders.updateStatus")}
            </h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black">{t("vendorPanel.orders.orderStatus")}</label>
                <select className="ms-input" defaultValue="processing">
                  <option value="pending">{t("vendorPanel.orders.pending")}</option>
                  <option value="processing">{t("vendorPanel.orders.processing")}</option>
                  <option value="packed">{t("vendorPanel.orders.packed")}</option>
                  <option value="shipped">{t("vendorPanel.orders.shipped")}</option>
                  <option value="completed">{t("vendorPanel.orders.completed")}</option>
                  <option value="cancelled">{t("vendorPanel.orders.cancelled")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">{t("vendorPanel.orders.trackingNumber")}</label>
                <input className="ms-input" placeholder="TRK-10021" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-black">{t("vendorPanel.orders.vendorNote")}</label>
              <textarea className="ms-input min-h-28" placeholder={t("vendorPanel.orders.vendorNotePlaceholder")} />
            </div>

            <div className="mt-5 flex justify-end">
              <button className="ms-btn-primary inline-flex items-center gap-2">
                <Save size={17} />
                {t("vendorPanel.orders.saveStatus")}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                {t("vendorPanel.orders.orderSummary")}
              </h3>
              <VendorStatusBadge status="processing" />
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">{t("vendorPanel.orders.payment")}</span><VendorStatusBadge status="paid" /></div>
              <div className="flex justify-between"><span className="text-slate-500">{t("vendorPanel.common.date")}</span><strong>2026-06-04</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">{t("vendorPanel.orders.items")}</span><strong>3</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">{t("vendorPanel.orders.total")}</span><strong>$189</strong></div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">{t("vendorPanel.orders.customer")}</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2"><User size={16} /> Ali Khan</p>
              <p className="flex items-center gap-2"><Mail size={16} /> ali@example.com</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +92 300 0000000</p>
              <p className="flex items-start gap-2"><MapPin size={16} /> House 12, Gulshan, Karachi</p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">{t("vendorPanel.orders.timeline")}</h3>
            <div className="mt-5 space-y-4">
              {timeline.map((step) => (
                <div key={step} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <div>
                    <p className="text-sm font-black">{step}</p>
                    <p className="text-xs text-slate-500">2026-06-04 12:30 PM</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Truck size={18} className="text-blue-500" />
                <div>
                  <p className="text-sm font-black">{t("vendorPanel.orders.readyToShip")}</p>
                  <p className="text-xs text-slate-500">{t("vendorPanel.orders.waitingVendorUpdate")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}