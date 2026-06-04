import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

import LoginPage from "./modules/auth/LoginPage";
import ForgotPasswordPage from "./modules/auth/ForgotPasswordPage";
import ResetPasswordPage from "./modules/auth/ResetPasswordPage";

import DashboardPage from "./modules/dashboard/DashboardPage";

/* Admin Vendors */
import VendorsPage from "./modules/vendors/VendorsPage";
import VendorRequestsPage from "./modules/vendors/VendorRequestsPage";
import VendorDetailPage from "./modules/vendors/VendorDetailPage";
import CreateVendorPage from "./modules/vendors/CreateVendorPage";
import EditVendorPage from "./modules/vendors/EditVendorPage";
import VendorWalletPage from "./modules/vendors/VendorWalletPage";
import VendorDocumentsPage from "./modules/vendors/VendorDocumentsPage";

/* Admin Stores */
import StoresPage from "./modules/stores/StoresPage";
import CreateStorePage from "./modules/stores/CreateStorePage";
import StoreDetailPage from "./modules/stores/StoreDetailPage";
import EditStorePage from "./modules/stores/EditStorePage";

/* Admin Catalog */
import CategoriesPage from "./modules/categories/CategoriesPage";
import CreateCategoryPage from "./modules/categories/CreateCategoryPage";
import EditCategoryPage from "./modules/categories/EditCategoryPage";

import BrandsPage from "./modules/brands/BrandsPage";
import CreateBrandPage from "./modules/brands/CreateBrandPage";
import EditBrandPage from "./modules/brands/EditBrandPage";

import AttributesPage from "./modules/attributes/AttributesPage";
import CreateAttributePage from "./modules/attributes/CreateAttributePage";
import EditAttributePage from "./modules/attributes/EditAttributePage";

import ProductsPage from "./modules/products/ProductsPage";
import CreateProductPage from "./modules/products/CreateProductPage";
import EditProductPage from "./modules/products/EditProductPage";
import ProductVariantsPage from "./modules/products/ProductVariantsPage";

import ReviewsPage from "./modules/reviews/ReviewsPage";

/* Admin Inventory */
import InventoryPage from "./modules/inventory/InventoryPage";
import LowStockPage from "./modules/inventory/LowStockPage";
import StockLogsPage from "./modules/inventory/StockLogsPage";
import StockAdjustmentPage from "./modules/inventory/StockAdjustmentPage";
import WarehousesPage from "./modules/inventory/WarehousesPage";

/* Admin Orders */
import OrdersPage from "./modules/orders/OrdersPage";
import OrderDetailPage from "./modules/orders/OrderDetailPage";
import OrderFormPage from "./modules/orders/OrderFormPage";
import ReturnsPage from "./modules/orders/ReturnsPage";
import RefundsPage from "./modules/orders/RefundsPage";

/* Admin Transactions */
import TransactionsPage from "./modules/transactions/TransactionsPage";
import CreateTransactionPage from "./modules/transactions/CreateTransactionPage";
import TransactionDetailPage from "./modules/transactions/TransactionDetailPage";

/* Admin Shipping */
import ShippingPage from "./modules/shipping/ShippingPage";
import CreateShippingRulePage from "./modules/shipping/CreateShippingRulePage";
import EditShippingRulePage from "./modules/shipping/EditShippingRulePage";
import ShippingRuleDetailPage from "./modules/shipping/ShippingRuleDetailPage";
import CouriersPage from "./modules/shipping/CouriersPage";

/* Admin Customers */
import CustomersPage from "./modules/customers/CustomersPage";
import CreateCustomerPage from "./modules/customers/CreateCustomerPage";
import CustomerDetailPage from "./modules/customers/CustomerDetailPage";
import EditCustomerPage from "./modules/customers/EditCustomerPage";

/* Admin Finance */
import CommissionsPage from "./modules/finance/CommissionsPage";
import VendorWalletsPage from "./modules/finance/VendorWalletsPage";
import PayoutsPage from "./modules/finance/PayoutsPage";
import PayoutDetailPage from "./modules/finance/PayoutDetailPage";
import CreatePayoutPage from "./modules/finance/CreatePayoutPage";

/* Admin Marketing */
import CouponsPage from "./modules/marketing/CouponsPage";
import CreateCouponPage from "./modules/marketing/CreateCouponPage";
import CouponDetailPage from "./modules/marketing/CouponDetailPage";
import BannersPage from "./modules/marketing/BannersPage";
import CreateBannerPage from "./modules/marketing/CreateBannerPage";
import FlashSalesPage from "./modules/marketing/FlashSalesPage";
import CreateFlashSalePage from "./modules/marketing/CreateFlashSalePage";
import AnnouncementsPage from "./modules/marketing/AnnouncementsPage";
import CreateAnnouncementPage from "./modules/marketing/CreateAnnouncementPage";
import NotificationsPage from "./modules/marketing/NotificationsPage";
import EmailCampaignsPage from "./modules/marketing/EmailCampaignsPage";
import CreateCampaignPage from "./modules/marketing/CreateCampaignPage";

/* Admin Reports */
import SalesReportsPage from "./modules/reports/SalesReportsPage";
import VendorReportsPage from "./modules/reports/VendorReportsPage";
import ProductReportsPage from "./modules/reports/ProductReportsPage";
import CustomerReportsPage from "./modules/reports/CustomerReportsPage";

/* Admin System */
import AdminUsersPage from "./modules/system/AdminUsersPage";
import CreateAdminUserPage from "./modules/system/CreateAdminUserPage";
import RolesPage from "./modules/system/RolesPage";
import CreateRolePage from "./modules/system/CreateRolePage";
import SettingsPage from "./modules/system/SettingsPage";

/* Vendor Base */
import VendorDashboardPage from "./modules/vendor/VendorDashboardPage";
import VendorStorePage from "./modules/vendor/VendorStorePage";

/* Vendor Products */
import VendorProductsPage from "./modules/vendor/products/VendorProductsPage";
import VendorProductFormPage from "./modules/vendor/products/VendorProductFormPage";
import VendorProductVariantsPage from "./modules/vendor/products/VendorProductVariantsPage";
import VendorProductImagesPage from "./modules/vendor/products/VendorProductImagesPage";
import VendorProductSeoPage from "./modules/vendor/products/VendorProductSeoPage";
import VendorAttributesPage from "./modules/vendor/products/VendorAttributesPage";
import VendorAttributeFormPage from "./modules/vendor/products/VendorAttributeFormPage";
import VendorProductDetailPage from "./modules/vendor/products/VendorProductDetailPage";
import VendorCategoriesPage from "./modules/vendor/products/VendorCategoriesPage";
import VendorCategoryFormPage from "./modules/vendor/products/VendorCategoryFormPage";
import VendorBrandsPage from "./modules/vendor/products/VendorBrandsPage";
import VendorBrandFormPage from "./modules/vendor/products/VendorBrandFormPage";
/* Vendor Inventory */
import VendorInventoryPage from "./modules/vendor/inventory/VendorInventoryPage";
import VendorStockAdjustmentPage from "./modules/vendor/inventory/VendorStockAdjustmentPage";
import VendorLowStockPage from "./modules/vendor/inventory/VendorLowStockPage";
import VendorStockLogsPage from "./modules/vendor/inventory/VendorStockLogsPage";

/* Vendor Orders */
import VendorOrdersPage from "./modules/vendor/orders/VendorOrdersPage";
import VendorOrderDetailPage from "./modules/vendor/orders/VendorOrderDetailPage";
import VendorOrderInvoicePage from "./modules/vendor/orders/VendorOrderInvoicePage";
import VendorReturnsPage from "./modules/vendor/orders/VendorReturnsPage";
import VendorReturnDetailPage from "./modules/vendor/orders/VendorReturnDetailPage";
import VendorReviewsPage from "./modules/vendor/orders/VendorReviewsPage";

/* Vendor Customers */
import VendorCustomersPage from "./modules/vendor/customers/VendorCustomersPage";
import VendorCustomerDetailPage from "./modules/vendor/customers/VendorCustomerDetailPage";

/* Vendor Finance */
import VendorEarningsPage from "./modules/vendor/finance/VendorEarningsPage";
import VendorFinanceWalletPage from "./modules/vendor/finance/VendorWalletPage";
import VendorTransactionsPage from "./modules/vendor/finance/VendorTransactionsPage";
import VendorPayoutsPage from "./modules/vendor/finance/VendorPayoutsPage";
import VendorPayoutRequestPage from "./modules/vendor/finance/VendorPayoutRequestPage";
import VendorPayoutDetailPage from "./modules/vendor/finance/VendorPayoutDetailPage";

/* Vendor Settings */
import VendorShippingPage from "./modules/vendor/settings/VendorShippingPage";
import VendorCouponsPage from "./modules/vendor/settings/VendorCouponsPage";
import VendorNotificationsPage from "./modules/vendor/settings/VendorNotificationsPage";
import VendorSettingsPage from "./modules/vendor/settings/VendorSettingsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />

            <Route path="/admin/vendors" element={<VendorsPage />} />
            <Route path="/admin/vendors/create" element={<CreateVendorPage />} />
            <Route path="/admin/vendor-requests" element={<VendorRequestsPage />} />
            <Route path="/admin/vendors/:id" element={<VendorDetailPage />} />
            <Route path="/admin/vendors/:id/edit" element={<EditVendorPage />} />
            <Route path="/admin/vendors/:id/wallet" element={<VendorWalletPage />} />
            <Route path="/admin/vendors/:id/documents" element={<VendorDocumentsPage />} />

            <Route path="/admin/stores" element={<StoresPage />} />
            <Route path="/admin/stores/create" element={<CreateStorePage />} />
            <Route path="/admin/stores/:id" element={<StoreDetailPage />} />
            <Route path="/admin/stores/:id/edit" element={<EditStorePage />} />

            <Route path="/admin/products" element={<ProductsPage />} />
            <Route path="/admin/products/create" element={<CreateProductPage />} />
            <Route path="/admin/products/:id" element={<EditProductPage />} />
            <Route path="/admin/products/:id/variants" element={<ProductVariantsPage />} />

            <Route path="/admin/categories" element={<CategoriesPage />} />
            <Route path="/admin/categories/create" element={<CreateCategoryPage />} />
            <Route path="/admin/categories/:id" element={<EditCategoryPage />} />

            <Route path="/admin/brands" element={<BrandsPage />} />
            <Route path="/admin/brands/create" element={<CreateBrandPage />} />
            <Route path="/admin/brands/:id" element={<EditBrandPage />} />

            <Route path="/admin/attributes" element={<AttributesPage />} />
            <Route path="/admin/attributes/create" element={<CreateAttributePage />} />
            <Route path="/admin/attributes/:id" element={<EditAttributePage />} />

            <Route path="/admin/reviews" element={<ReviewsPage />} />

            <Route path="/admin/inventory" element={<InventoryPage />} />
            <Route path="/admin/inventory/low-stock" element={<LowStockPage />} />
            <Route path="/admin/inventory/logs" element={<StockLogsPage />} />
            <Route path="/admin/inventory/adjustments" element={<StockAdjustmentPage />} />
            <Route path="/admin/warehouses" element={<WarehousesPage />} />

            <Route path="/admin/orders" element={<OrdersPage />} />
            <Route path="/admin/orders/create" element={<OrderFormPage mode="create" />} />
            <Route path="/admin/orders/:id" element={<OrderDetailPage />} />
            <Route path="/admin/orders/:id/edit" element={<OrderFormPage mode="edit" />} />
            <Route path="/admin/returns" element={<ReturnsPage />} />
            <Route path="/admin/refunds" element={<RefundsPage />} />

            <Route path="/admin/transactions" element={<TransactionsPage />} />
            <Route path="/admin/transactions/create" element={<CreateTransactionPage />} />
            <Route path="/admin/transactions/:id" element={<TransactionDetailPage />} />

            <Route path="/admin/shipping" element={<ShippingPage />} />
            <Route path="/admin/shipping/create" element={<CreateShippingRulePage />} />
            <Route path="/admin/shipping/:id" element={<ShippingRuleDetailPage />} />
            <Route path="/admin/shipping/:id/edit" element={<EditShippingRulePage />} />
            <Route path="/admin/couriers" element={<CouriersPage />} />

            <Route path="/admin/commissions" element={<CommissionsPage />} />
            <Route path="/admin/vendor-wallets" element={<VendorWalletsPage />} />
            <Route path="/admin/payouts" element={<PayoutsPage />} />
            <Route path="/admin/payouts/create" element={<CreatePayoutPage />} />
            <Route path="/admin/payouts/:id" element={<PayoutDetailPage />} />

            <Route path="/admin/customers" element={<CustomersPage />} />
            <Route path="/admin/customers/create" element={<CreateCustomerPage />} />
            <Route path="/admin/customers/:id" element={<CustomerDetailPage />} />
            <Route path="/admin/customers/:id/edit" element={<EditCustomerPage />} />

            <Route path="/admin/coupons" element={<CouponsPage />} />
            <Route path="/admin/coupons/create" element={<CreateCouponPage />} />
            <Route path="/admin/coupons/:id" element={<CouponDetailPage />} />

            <Route path="/admin/banners" element={<BannersPage />} />
            <Route path="/admin/banners/create" element={<CreateBannerPage />} />

            <Route path="/admin/flash-sales" element={<FlashSalesPage />} />
            <Route path="/admin/flash-sales/create" element={<CreateFlashSalePage />} />

            <Route path="/admin/announcements" element={<AnnouncementsPage />} />
            <Route path="/admin/announcements/create" element={<CreateAnnouncementPage />} />

            <Route path="/admin/notifications" element={<NotificationsPage />} />

            <Route path="/admin/email-campaigns" element={<EmailCampaignsPage />} />
            <Route path="/admin/email-campaigns/create" element={<CreateCampaignPage />} />

            <Route path="/admin/reports/sales" element={<SalesReportsPage />} />
            <Route path="/admin/reports/vendors" element={<VendorReportsPage />} />
            <Route path="/admin/reports/products" element={<ProductReportsPage />} />
            <Route path="/admin/reports/customers" element={<CustomerReportsPage />} />

            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/users/create" element={<CreateAdminUserPage />} />
            <Route path="/admin/users/:id/edit" element={<CreateAdminUserPage />} />

            <Route path="/admin/roles" element={<RolesPage />} />
            <Route path="/admin/roles/create" element={<CreateRolePage />} />
            <Route path="/admin/roles/:id/edit" element={<CreateRolePage />} />

            <Route path="/admin/settings" element={<SettingsPage />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["vendor"]} />}>
            <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
            <Route path="/vendor/store" element={<VendorStorePage />} />

<Route path="/vendor/products" element={<VendorProductsPage />} />
<Route path="/vendor/products/create" element={<VendorProductFormPage />} />
<Route path="/vendor/products/:id" element={<VendorProductDetailPage />} />
<Route path="/vendor/products/:id/edit" element={<VendorProductFormPage />} />
<Route path="/vendor/products/:id/images" element={<VendorProductImagesPage />} />
<Route path="/vendor/products/:id/variants" element={<VendorProductVariantsPage />} />
<Route path="/vendor/products/:id/seo" element={<VendorProductSeoPage />} />
<Route path="/vendor/categories" element={<VendorCategoriesPage />} />
<Route path="/vendor/categories/create" element={<VendorCategoryFormPage />} />
<Route path="/vendor/categories/:id/edit" element={<VendorCategoryFormPage />} />

<Route path="/vendor/brands" element={<VendorBrandsPage />} />
<Route path="/vendor/brands/create" element={<VendorBrandFormPage />} />
<Route path="/vendor/brands/:id/edit" element={<VendorBrandFormPage />} />

            <Route path="/vendor/attributes" element={<VendorAttributesPage />} />
            <Route path="/vendor/attributes/create" element={<VendorAttributeFormPage />} />
            <Route path="/vendor/attributes/:id/edit" element={<VendorAttributeFormPage />} />

            <Route path="/vendor/inventory" element={<VendorInventoryPage />} />
            <Route path="/vendor/inventory/adjustments" element={<VendorStockAdjustmentPage />} />
            <Route path="/vendor/inventory/low-stock" element={<VendorLowStockPage />} />
            <Route path="/vendor/inventory/logs" element={<VendorStockLogsPage />} />

            <Route path="/vendor/orders" element={<VendorOrdersPage />} />
            <Route path="/vendor/orders/:id" element={<VendorOrderDetailPage />} />
            <Route path="/vendor/orders/:id/invoice" element={<VendorOrderInvoicePage />} />

            <Route path="/vendor/returns" element={<VendorReturnsPage />} />
            <Route path="/vendor/returns/:id" element={<VendorReturnDetailPage />} />
            <Route path="/vendor/reviews" element={<VendorReviewsPage />} />

            <Route path="/vendor/customers" element={<VendorCustomersPage />} />
            <Route path="/vendor/customers/:id" element={<VendorCustomerDetailPage />} />

            <Route path="/vendor/earnings" element={<VendorEarningsPage />} />
<Route path="/vendor/wallet" element={<VendorFinanceWalletPage />} />
            <Route path="/vendor/transactions" element={<VendorTransactionsPage />} />

            <Route path="/vendor/payouts" element={<VendorPayoutsPage />} />
            <Route path="/vendor/payouts/create" element={<VendorPayoutRequestPage />} />
            <Route path="/vendor/payouts/:id" element={<VendorPayoutDetailPage />} />

            <Route path="/vendor/shipping" element={<VendorShippingPage />} />
            <Route path="/vendor/coupons" element={<VendorCouponsPage />} />
            <Route path="/vendor/notifications" element={<VendorNotificationsPage />} />
            <Route path="/vendor/settings" element={<VendorSettingsPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}