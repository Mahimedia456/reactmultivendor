import { ShieldCheck, Truck, BadgePercent, Store } from "lucide-react";

const benefits = [
  {
    title: "Verified Sellers",
    text: "Shop from reviewed marketplace vendors.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    text: "Delivery rules ready for admin setup.",
    icon: Truck,
  },
  {
    title: "Vendor Deals",
    text: "Discounts and offers from stores.",
    icon: BadgePercent,
  },
  {
    title: "Multi Store",
    text: "One cart for multiple vendors.",
    icon: Store,
  },
];

export default function VendorBenefits() {
  return (
    <section className="bg-white text-black">
      <div className="site-container grid gap-px border-y border-black/10 py-0 md:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="border-black/10 p-6 md:border-r last:border-r-0">
              <Icon size={22} strokeWidth={1.6} />
              <h3 className="product-card-title mt-4 text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[20px] text-black/55">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}