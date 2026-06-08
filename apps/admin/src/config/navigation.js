import {
  AlertTriangle,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  CreditCard,
  FileText,
  Home,
  Image,
  LayoutDashboard,
  Mail,
  Megaphone,
  Package,
  PackageSearch,
  Plus,
  ReceiptText,
  RotateCcw,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  Store,
  Tags,
  Truck,
  UserCog,
  Users,
  WalletCards,
  Warehouse,
  Zap,
} from "lucide-react";

export const adminNavigation = [
  {
    labelKey: "nav.overview",
    items: [{ labelKey: "nav.dashboard", path: "/admin/dashboard", icon: LayoutDashboard }],
  },
  {
    labelKey: "nav.marketplace",
    items: [
      { labelKey: "nav.vendors", path: "/admin/vendors", icon: Store },
      { labelKey: "nav.vendorRequests", path: "/admin/vendor-requests", icon: Building2 },
      { labelKey: "nav.stores", path: "/admin/stores", icon: Home },
    ],
  },
  {
    labelKey: "nav.catalog",
    items: [
      { labelKey: "nav.products", path: "/admin/products", icon: Package },
      { labelKey: "nav.categories", path: "/admin/categories", icon: Boxes },
      { labelKey: "nav.brands", path: "/admin/brands", icon: Tags },
      { labelKey: "nav.attributes", path: "/admin/attributes", icon: PackageSearch },
      { labelKey: "nav.reviews", path: "/admin/reviews", icon: Star },
    ],
  },
  {
    labelKey: "nav.inventory",
    items: [
      { labelKey: "nav.stockOverview", path: "/admin/inventory", icon: PackageSearch },
      { labelKey: "nav.stockAdjustment", path: "/admin/inventory/adjustments", icon: Boxes },
      { labelKey: "nav.lowStock", path: "/admin/inventory/low-stock", icon: AlertTriangle },
      { labelKey: "nav.stockLogs", path: "/admin/inventory/logs", icon: FileText },
      { labelKey: "nav.warehouses", path: "/admin/warehouses", icon: Warehouse },
    ],
  },
  {
    labelKey: "nav.sales",
    items: [
      { labelKey: "nav.orders", path: "/admin/orders", icon: ShoppingCart },
      { labelKey: "nav.returns", path: "/admin/returns", icon: RotateCcw },
      { labelKey: "nav.refunds", path: "/admin/refunds", icon: CreditCard },
      { labelKey: "nav.transactions", path: "/admin/transactions", icon: CreditCard },
      { labelKey: "nav.shipping", path: "/admin/shipping", icon: Truck },
      { labelKey: "nav.couriers", path: "/admin/couriers", icon: Truck },
    ],
  },
  {
    labelKey: "nav.finance",
    items: [
      { labelKey: "nav.commissions", path: "/admin/commissions", icon: ReceiptText },
      { labelKey: "nav.vendorWallets", path: "/admin/vendor-wallets", icon: WalletCards },
      { labelKey: "nav.payouts", path: "/admin/payouts", icon: CreditCard },
    ],
  },
  {
    labelKey: "nav.customers",
    items: [{ labelKey: "nav.customers", path: "/admin/customers", icon: Users }],
  },
  {
    labelKey: "nav.marketing",
    items: [
      { labelKey: "nav.coupons", path: "/admin/coupons", icon: Tags },
      { labelKey: "nav.banners", path: "/admin/banners", icon: Image },
      { labelKey: "nav.flashSales", path: "/admin/flash-sales", icon: Zap },
      { labelKey: "nav.announcements", path: "/admin/announcements", icon: Megaphone },
      { labelKey: "nav.notifications", path: "/admin/notifications", icon: Bell },
      { labelKey: "nav.emailCampaigns", path: "/admin/email-campaigns", icon: Mail },
    ],
  },
  {
    labelKey: "nav.reports",
    items: [
      { labelKey: "nav.salesReports", path: "/admin/reports/sales", icon: BarChart3 },
      { labelKey: "nav.vendorReports", path: "/admin/reports/vendors", icon: Store },
      { labelKey: "nav.productReports", path: "/admin/reports/products", icon: Package },
      { labelKey: "nav.customerReports", path: "/admin/reports/customers", icon: Users },
    ],
  },
  {
    labelKey: "nav.cms",
    items: [{ labelKey: "nav.cmsPages", path: "/admin/cms-pages", icon: FileText }],
  },
  {
    labelKey: "nav.system",
    items: [
      { labelKey: "nav.adminUsers", path: "/admin/users", icon: UserCog },
      { labelKey: "nav.roles", path: "/admin/roles", icon: ShieldCheck },
      { labelKey: "nav.settings", path: "/admin/settings", icon: Settings },
    ],
  },
];

export const vendorNavigation = [
  {
    labelKey: "nav.overview",
    items: [{ labelKey: "nav.dashboard", path: "/vendor/dashboard", icon: LayoutDashboard }],
  },
  {
    labelKey: "nav.store",
    items: [{ labelKey: "nav.storeProfile", path: "/vendor/store", icon: Store }],
  },
  {
    labelKey: "nav.catalog",
    items: [
      { labelKey: "nav.products", path: "/vendor/products", icon: Package },
      { labelKey: "nav.addProduct", path: "/vendor/products/create", icon: Plus },
      { labelKey: "nav.categories", path: "/vendor/categories", icon: Boxes },
      { labelKey: "nav.brands", path: "/vendor/brands", icon: Tags },
      { labelKey: "nav.attributes", path: "/vendor/attributes", icon: PackageSearch },
    ],
  },
  {
    labelKey: "nav.inventory",
    items: [
      { labelKey: "nav.stockOverview", path: "/vendor/inventory", icon: PackageSearch },
      { labelKey: "nav.stockAdjustment", path: "/vendor/inventory/adjustments", icon: Boxes },
      { labelKey: "nav.lowStock", path: "/vendor/inventory/low-stock", icon: AlertTriangle },
      { labelKey: "nav.stockLogs", path: "/vendor/inventory/logs", icon: FileText },
    ],
  },
  {
    labelKey: "nav.sales",
    items: [
      { labelKey: "nav.orders", path: "/vendor/orders", icon: ShoppingCart },
      { labelKey: "nav.returns", path: "/vendor/returns", icon: RotateCcw },
      { labelKey: "nav.reviews", path: "/vendor/reviews", icon: Star },
      { labelKey: "nav.customers", path: "/vendor/customers", icon: Users },
    ],
  },
  {
    labelKey: "nav.finance",
    items: [
      { labelKey: "nav.earnings", path: "/vendor/earnings", icon: BarChart3 },
      { labelKey: "nav.wallet", path: "/vendor/wallet", icon: WalletCards },
      { labelKey: "nav.transactions", path: "/vendor/transactions", icon: CreditCard },
      { labelKey: "nav.payouts", path: "/vendor/payouts", icon: ReceiptText },
    ],
  },
  {
    labelKey: "nav.tools",
    items: [
      { labelKey: "nav.shipping", path: "/vendor/shipping", icon: Truck },
      { labelKey: "nav.coupons", path: "/vendor/coupons", icon: Tags },
      { labelKey: "nav.notifications", path: "/vendor/notifications", icon: Bell },
    ],
  },
  {
    labelKey: "nav.system",
    items: [{ labelKey: "nav.settings", path: "/vendor/settings", icon: Settings }],
  },
];