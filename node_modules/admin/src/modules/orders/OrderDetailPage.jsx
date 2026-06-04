import { ArrowLeft, CreditCard, Package, ShoppingCart, Truck, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import OrderStatusBadge from "./components/OrderStatusBadge";

export default function OrderDetailPage() {
  const { id } = useParams();

  const items = [
    ["Elyndor Perfume 50ml", "ELYN-50", "1", "Rs 4,500"],
    ["Floral Charm 50ml", "FLOR-50", "1", "Rs 2,200"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <Link to="/admin/orders" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
            <ArrowLeft size={16} />
            Back to orders
          </Link>
          <h1 className="text-2xl font-black">Order MS-{id}</h1>
          <p className="mt-1 text-sm font-semibold text-slate-500">Created today • Aamir Fragrances</p>
        </div>

        <OrderStatusBadge status="Processing" />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Order Value", "Rs 6,700", CreditCard],
          ["Items", "2", Package],
          ["Customer", "Ahmed Raza", User],
          ["Delivery", "Standard", Truck],
        ].map(([label, value, Icon]) => (
          <div key={label} className="ms-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Icon size={18} />
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">{label}</p>
            <h3 className="mt-1 text-xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Order Items</h3>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="ms-table-head">
                  <tr>
                    <th className="px-5 py-3">Product</th>
                    <th className="px-5 py-3">SKU</th>
                    <th className="px-5 py-3">Qty</th>
                    <th className="px-5 py-3 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
                  {items.map(([product, sku, qty, price]) => (
                    <tr key={sku}>
                      <td className="px-5 py-4 font-black">
                        <div className="flex items-center gap-3">
                          <ShoppingCart size={18} className="text-brand-700" />
                          {product}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold">{sku}</td>
                      <td className="px-5 py-4 text-sm font-semibold">{qty}</td>
                      <td className="px-5 py-4 text-right text-sm font-black">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Order Timeline</h3>

            <div className="mt-5 space-y-4">
              {[
                ["Order Created", "Customer placed order", "Today 10:25 AM"],
                ["Payment Method Selected", "COD selected", "Today 10:26 AM"],
                ["Vendor Notified", "Aamir Fragrances received order", "Today 10:27 AM"],
              ].map(([title, text, time]) => (
                <div key={title} className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine">
                  <p className="font-black">{title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{text}</p>
                  <p className="mt-2 text-xs font-bold text-slate-400">{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Update Status</h3>

            <div className="mt-5 space-y-4">
              <select className="ms-input">
                <option>Pending</option>
                <option>Processing</option>
                <option>Packed</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>

              <button className="ms-btn-primary w-full">Update Order</button>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Customer</h3>
            <p className="mt-4 font-black">Ahmed Raza</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">ahmed@example.com</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">+92 300 0000000</p>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Shipping Address</h3>
            <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
              House 24, Street 8, DHA Phase 6, Karachi, Pakistan
            </p>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Payment</h3>
            <p className="mt-4 text-sm font-semibold">Method: COD</p>
            <p className="mt-2 text-sm font-semibold">Status: Pending Collection</p>
            <p className="mt-2 text-xl font-black">Rs 6,700</p>
          </div>
        </aside>
      </div>
    </div>
  );
}