import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { getAuthSession } from "../../store/auth.store";

const products = [
  { id: 1, name: "Elyndor Perfume 50ml", price: 4500 },
  { id: 2, name: "Floral Charm 50ml", price: 2200 },
];

export default function OrderFormPage({ mode = "create" }) {
  const { id } = useParams();
  const session = getAuthSession();
  const role = session?.user?.role || "admin";
  const isAdmin = role === "admin";

  return (
    <div className="space-y-5">
      <div>
        <Link
          to={isAdmin ? "/admin/orders" : "/vendor/orders"}
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          Back to orders
        </Link>

        <h1 className="text-2xl font-black">
          {mode === "edit" ? `Edit Order MS-${id}` : "Create Order"}
        </h1>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          {isAdmin
            ? "Admin can select vendor manually."
            : "Vendor will be assigned automatically from current account."}
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">Customer Information</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">Customer Name</label>
                <input className="ms-input" placeholder="Ahmed Raza" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Customer Email</label>
                <input className="ms-input" placeholder="customer@example.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Phone</label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Order Channel</label>
                <select className="ms-input">
                  <option>Admin Created</option>
                  <option>Website</option>
                  <option>WhatsApp</option>
                  <option>Walk-in</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-black">Order Items</h3>
              <button className="ms-btn-soft gap-2">
                <Plus size={16} />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2].map((row, index) => (
                <div
                  key={row}
                  className="grid gap-4 rounded-card border border-panel-line p-4 dark:border-panel-darkLine lg:grid-cols-[1.4fr_120px_150px_auto]"
                >
                  <div>
                    <label className="mb-2 block text-sm font-bold">Product</label>
                    <select className="ms-input">
                      {products.map((product) => (
                        <option key={product.id}>{product.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">Qty</label>
                    <input className="ms-input" defaultValue={index === 0 ? 1 : 2} />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">Price</label>
                    <input
                      className="ms-input"
                      defaultValue={index === 0 ? "4500" : "2200"}
                    />
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
            <h3 className="mb-5 text-lg font-black">Address</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">Shipping Address</label>
                <textarea
                  className="ms-input h-24 py-3"
                  placeholder="House, street, area..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">City</label>
                <input className="ms-input" placeholder="Karachi" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Country</label>
                <select className="ms-input">
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Order Settings</h3>

            <div className="mt-5 space-y-4">
              {isAdmin ? (
                <div>
                  <label className="mb-2 block text-sm font-bold">Vendor</label>
                  <select className="ms-input">
                    <option>Aamir Fragrances</option>
                    <option>Urban Deals</option>
                    <option>Tech Point</option>
                  </select>
                </div>
              ) : (
                <div className="rounded-lg border border-panel-line bg-slate-50 p-4 dark:border-panel-darkLine dark:bg-white/5">
                  <p className="text-xs font-black uppercase text-slate-400">Vendor</p>
                  <p className="mt-1 text-sm font-bold">
                    {session?.user?.name || "Current Vendor"}
                  </p>
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold">Order Status</label>
                <select className="ms-input">
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Packed</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Payment Method</label>
                <select className="ms-input">
                  <option>COD</option>
                  <option>Bank Transfer</option>
                  <option>Card</option>
                  <option>Wallet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Payment Status</label>
                <select className="ms-input">
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Failed</option>
                  <option>Refunded</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Shipping Method</label>
                <select className="ms-input">
                  <option>Standard Delivery</option>
                  <option>Express Delivery</option>
                  <option>Courier Pickup</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Order Summary</h3>

            <div className="mt-5 space-y-3 text-sm font-semibold">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span>Rs 8,900</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Shipping</span>
                <span>Rs 250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Discount</span>
                <span>- Rs 500</span>
              </div>
              <div className="border-t border-panel-line pt-3 text-lg font-black dark:border-panel-darkLine">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>Rs 8,650</span>
                </div>
              </div>
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} />
            {mode === "edit" ? "Update Order" : "Create Order"}
          </button>
        </aside>
      </div>
    </div>
  );
}