import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getAuthSession } from "../../store/auth.store";

const products = [
  { id: 1, name: "Elyndor Perfume 50ml", price: 4500 },
  { id: 2, name: "Floral Charm 50ml", price: 2200 },
];

export default function OrderFormPage({ mode = "create" }) {
  const { id } = useParams();
  const { t } = useTranslation();
  const session = getAuthSession();
  const role = session?.user?.role || "admin";
  const isAdmin = role === "admin";

  return (
    <div className="space-y-5">
      <div>
        <Link to={isAdmin ? "/admin/orders" : "/vendor/orders"} className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("ordersPage.backToOrders")}
        </Link>

        <h1 className="text-2xl font-black">
          {mode === "edit" ? `${t("ordersPage.editOrder")} MS-${id}` : t("ordersPage.createOrder")}
        </h1>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          {isAdmin ? t("ordersPage.adminCanSelectVendor") : t("ordersPage.vendorAssignedAutomatically")}
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("ordersPage.customerInformation")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.customerName")}</label>
                <input className="ms-input" placeholder="Ahmed Raza" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.customerEmail")}</label>
                <input className="ms-input" placeholder="customer@example.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("common.phone")}</label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.orderChannel")}</label>
                <select className="ms-input">
                  <option>{t("ordersPage.adminCreated")}</option>
                  <option>{t("ordersPage.website")}</option>
                  <option>{t("ordersPage.whatsapp")}</option>
                  <option>{t("ordersPage.walkIn")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-black">{t("ordersPage.orderItems")}</h3>
              <button className="ms-btn-soft gap-2">
                <Plus size={16} />
                {t("ordersPage.addItem")}
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2].map((row, index) => (
                <div key={row} className="grid gap-4 rounded-card border border-panel-line p-4 dark:border-panel-darkLine lg:grid-cols-[1.4fr_120px_150px_auto]">
                  <div>
                    <label className="mb-2 block text-sm font-bold">{t("ordersPage.product")}</label>
                    <select className="ms-input">
                      {products.map((product) => (
                        <option key={product.id}>{product.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">{t("ordersPage.qty")}</label>
                    <input className="ms-input" defaultValue={index === 0 ? 1 : 2} />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">{t("ordersPage.price")}</label>
                    <input className="ms-input" defaultValue={index === 0 ? "4500" : "2200"} />
                  </div>

                  <div className="flex items-end">
                    <button className="ms-btn-soft h-11 w-11 px-0 text-rose-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("ordersPage.address")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.shippingAddress")}</label>
                <textarea className="ms-input h-24 py-3" placeholder={t("ordersPage.houseStreetArea")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.city")}</label>
                <input className="ms-input" placeholder="Karachi" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.country")}</label>
                <select className="ms-input">
                  <option>{t("ordersPage.pakistan")}</option>
                  <option>{t("ordersPage.unitedArabEmirates")}</option>
                  <option>{t("ordersPage.unitedKingdom")}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.orderSettings")}</h3>

            <div className="mt-5 space-y-4">
              {isAdmin ? (
                <div>
                  <label className="mb-2 block text-sm font-bold">{t("ordersPage.vendor")}</label>
                  <select className="ms-input">
                    <option>Aamir Fragrances</option>
                    <option>Urban Deals</option>
                    <option>Tech Point</option>
                  </select>
                </div>
              ) : (
                <div className="rounded-lg border border-panel-line bg-slate-50 p-4 dark:border-panel-darkLine dark:bg-white/5">
                  <p className="text-xs font-black uppercase text-slate-400">{t("ordersPage.vendor")}</p>
                  <p className="mt-1 text-sm font-bold">{session?.user?.name || t("ordersPage.currentVendor")}</p>
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.orderStatus")}</label>
                <select className="ms-input">
                  <option>{t("status.pending")}</option>
                  <option>{t("status.processing")}</option>
                  <option>{t("status.packed")}</option>
                  <option>{t("status.shipped")}</option>
                  <option>{t("status.delivered")}</option>
                  <option>{t("status.cancelled")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.paymentMethod")}</label>
                <select className="ms-input">
                  <option>{t("ordersPage.cod")}</option>
                  <option>{t("ordersPage.bankTransfer")}</option>
                  <option>{t("ordersPage.card")}</option>
                  <option>{t("ordersPage.wallet")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.paymentStatus")}</label>
                <select className="ms-input">
                  <option>{t("status.pending")}</option>
                  <option>{t("status.paid")}</option>
                  <option>{t("status.failed")}</option>
                  <option>{t("status.refunded")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("ordersPage.shippingMethod")}</label>
                <select className="ms-input">
                  <option>{t("ordersPage.standardDelivery")}</option>
                  <option>{t("ordersPage.expressDelivery")}</option>
                  <option>{t("ordersPage.courierPickup")}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("ordersPage.orderSummary")}</h3>

            <div className="mt-5 space-y-3 text-sm font-semibold">
              <div className="flex justify-between">
                <span className="text-slate-500">{t("ordersPage.subtotal")}</span>
                <span>Rs 8,900</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t("ordersPage.shipping")}</span>
                <span>Rs 250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t("ordersPage.discount")}</span>
                <span>- Rs 500</span>
              </div>
              <div className="border-t border-panel-line pt-3 text-lg font-black dark:border-panel-darkLine">
                <div className="flex justify-between">
                  <span>{t("ordersPage.total")}</span>
                  <span>Rs 8,650</span>
                </div>
              </div>
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} />
            {mode === "edit" ? t("ordersPage.updateOrder") : t("ordersPage.createOrder")}
          </button>
        </aside>
      </div>
    </div>
  );
}
