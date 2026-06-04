import { ArrowLeft, CheckCircle2, FileText, Mail, MapPin, Phone, Save, Truck, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatusBadge from "../components/VendorStatusBadge";

const items = [
  { name: "Wireless Gaming Mouse", sku: "MS-MOUSE-001", qty: 2, price: "$49", total: "$98" },
  { name: "Leather Laptop Bag", sku: "MS-BAG-221", qty: 1, price: "$79", total: "$79" },
];

export default function VendorOrderDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={`Order #ORD-${id}`}
        description="View order details, customer information, shipping data and update fulfillment status."
        action={
          <div className="flex gap-2">
            <Link to="/vendor/orders" className="ms-btn-soft inline-flex items-center gap-2"><ArrowLeft size={17} /> Back</Link>
            <Link to={`/vendor/orders/${id}/invoice`} className="ms-btn-primary inline-flex items-center gap-2"><FileText size={17} /> Invoice</Link>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="border-b border-panel-line p-5 dark:border-panel-darkLine">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Order Items</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5">
                  <tr>
                    <th className="px-5 py-4">Product</th>
                    <th className="px-5 py-4">SKU</th>
                    <th className="px-5 py-4">Qty</th>
                    <th className="px-5 py-4">Price</th>
                    <th className="px-5 py-4 text-right">Total</th>
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
              <div className="flex justify-between text-sm"><span>Subtotal</span><strong>$177</strong></div>
              <div className="flex justify-between text-sm"><span>Shipping</span><strong>$12</strong></div>
              <div className="flex justify-between text-sm"><span>Commission</span><strong className="text-red-500">-$18</strong></div>
              <div className="flex justify-between border-t pt-3 text-lg font-black dark:border-panel-darkLine">
                <span>Vendor Earning</span><span>$171</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Update Order Status</h3>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black">Order Status</label>
                <select className="ms-input" defaultValue="processing">
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="packed">Packed</option>
                  <option value="shipped">Shipped</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-black">Tracking Number</label>
                <input className="ms-input" placeholder="TRK-10021" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-black">Vendor Note</label>
              <textarea className="ms-input min-h-28" placeholder="Add note for admin/customer..." />
            </div>

            <div className="mt-5 flex justify-end">
              <button className="ms-btn-primary inline-flex items-center gap-2"><Save size={17} /> Save Status</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">Order Summary</h3>
              <VendorStatusBadge status="Processing" />
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Payment</span><VendorStatusBadge status="Paid" /></div>
              <div className="flex justify-between"><span className="text-slate-500">Date</span><strong>2026-06-04</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Items</span><strong>3</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Total</span><strong>$189</strong></div>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Customer</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2"><User size={16} /> Ali Khan</p>
              <p className="flex items-center gap-2"><Mail size={16} /> ali@example.com</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +92 300 0000000</p>
              <p className="flex items-start gap-2"><MapPin size={16} /> House 12, Gulshan, Karachi</p>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Timeline</h3>
            <div className="mt-5 space-y-4">
              {["Order placed", "Payment confirmed", "Vendor processing"].map((step) => (
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
                  <p className="text-sm font-black">Ready to ship</p>
                  <p className="text-xs text-slate-500">Waiting vendor update</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}