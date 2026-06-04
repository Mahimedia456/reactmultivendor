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
    label: "Overview",
    items: [
      { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Marketplace",
    items: [
      { label: "Vendors", path: "/admin/vendors", icon: Store },
      { label: "Vendor Requests", path: "/admin/vendor-requests", icon: Building2 },
      { label: "Stores", path: "/admin/stores", icon: Home },
    ],
  },
  {
    label: "Catalog",
    items: [
      { label: "Products", path: "/admin/products", icon: Package },
      { label: "Categories", path: "/admin/categories", icon: Boxes },
      { label: "Brands", path: "/admin/brands", icon: Tags },
      { label: "Attributes", path: "/admin/attributes", icon: PackageSearch },
      { label: "Reviews", path: "/admin/reviews", icon: Star },
    ],
  },
  {
    label: "Inventory",
    items: [
      { label: "Stock Overview", path: "/admin/inventory", icon: PackageSearch },
      { label: "Stock Adjustment", path: "/admin/inventory/adjustments", icon: Boxes },
      { label: "Low Stock", path: "/admin/inventory/low-stock", icon: AlertTriangle },
      { label: "Stock Logs", path: "/admin/inventory/logs", icon: FileText },
      { label: "Warehouses", path: "/admin/warehouses", icon: Warehouse },
    ],
  },
  {
    label: "Sales",
    items: [
      { label: "Orders", path: "/admin/orders", icon: ShoppingCart },
      { label: "Returns", path: "/admin/returns", icon: RotateCcw },
      { label: "Refunds", path: "/admin/refunds", icon: CreditCard },
      { label: "Transactions", path: "/admin/transactions", icon: CreditCard },
      { label: "Shipping", path: "/admin/shipping", icon: Truck },
      { label: "Couriers", path: "/admin/couriers", icon: Truck },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Commissions", path: "/admin/commissions", icon: ReceiptText },
      { label: "Vendor Wallets", path: "/admin/vendor-wallets", icon: WalletCards },
      { label: "Payouts", path: "/admin/payouts", icon: CreditCard },
    ],
  },
  {
    label: "Customers",
    items: [
      { label: "Customers", path: "/admin/customers", icon: Users },
    ],
  },
  {
    label: "Marketing",
    items: [
      { label: "Coupons", path: "/admin/coupons", icon: Tags },
      { label: "Banners", path: "/admin/banners", icon: Image },
      { label: "Flash Sales", path: "/admin/flash-sales", icon: Zap },
      { label: "Announcements", path: "/admin/announcements", icon: Megaphone },
      { label: "Notifications", path: "/admin/notifications", icon: Bell },
      { label: "Email Campaigns", path: "/admin/email-campaigns", icon: Mail },
    ],
  },
  {
    label: "Reports",
    items: [
      { label: "Sales Reports", path: "/admin/reports/sales", icon: BarChart3 },
      { label: "Vendor Reports", path: "/admin/reports/vendors", icon: Store },
      { label: "Product Reports", path: "/admin/reports/products", icon: Package },
      { label: "Customer Reports", path: "/admin/reports/customers", icon: Users },
    ],
  },
  {
    label: "CMS",
    items: [
      { label: "CMS Pages", path: "/admin/cms-pages", icon: FileText },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Admin Users", path: "/admin/users", icon: UserCog },
      { label: "Roles", path: "/admin/roles", icon: ShieldCheck },
      { label: "Settings", path: "/admin/settings", icon: Settings },
    ],
  },
];

export const vendorNavigation = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", path: "/vendor/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Store",
    items: [
      { label: "Store Profile", path: "/vendor/store", icon: Store },
    ],
  },
  {
    label: "Catalog",
    items: [
      { label: "Products", path: "/vendor/products", icon: Package },
      { label: "Add Product", path: "/vendor/products/create", icon: Plus },
      { label: "Categories", path: "/vendor/categories", icon: Boxes },
      { label: "Brands", path: "/vendor/brands", icon: Tags },
      { label: "Attributes", path: "/vendor/attributes", icon: PackageSearch },
    ],
  },
  {
    label: "Inventory",
    items: [
      { label: "Stock Overview", path: "/vendor/inventory", icon: PackageSearch },
      { label: "Stock Adjustment", path: "/vendor/inventory/adjustments", icon: Boxes },
      { label: "Low Stock", path: "/vendor/inventory/low-stock", icon: AlertTriangle },
      { label: "Stock Logs", path: "/vendor/inventory/logs", icon: FileText },
    ],
  },
  {
    label: "Sales",
    items: [
      { label: "Orders", path: "/vendor/orders", icon: ShoppingCart },
      { label: "Returns", path: "/vendor/returns", icon: RotateCcw },
      { label: "Reviews", path: "/vendor/reviews", icon: Star },
      { label: "Customers", path: "/vendor/customers", icon: Users },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Earnings", path: "/vendor/earnings", icon: BarChart3 },
      { label: "Wallet", path: "/vendor/wallet", icon: WalletCards },
      { label: "Transactions", path: "/vendor/transactions", icon: CreditCard },
      { label: "Payouts", path: "/vendor/payouts", icon: ReceiptText },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Shipping", path: "/vendor/shipping", icon: Truck },
      { label: "Coupons", path: "/vendor/coupons", icon: Tags },
      { label: "Notifications", path: "/vendor/notifications", icon: Bell },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", path: "/vendor/settings", icon: Settings },
    ],
  },
];