import { ArrowDownCircle, ArrowUpCircle, CreditCard, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import VendorPageHeader from "../components/VendorPageHeader";
import VendorStatCard from "../components/VendorStatCard";

export default function VendorWalletPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={t("vendorPanel.wallet.title")}
        description={t("vendorPanel.wallet.description")}
        action={
          <Link to="/vendor/payouts/create" className="ms-btn-primary">
            {t("vendorPanel.common.requestPayout")}
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <VendorStatCard title={t("vendorPanel.wallet.availableBalance")} value="$3,250" icon={WalletCards} tone="green" />
        <VendorStatCard title={t("vendorPanel.wallet.pendingClearance")} value="$1,120" icon={CreditCard} tone="orange" />
        <VendorStatCard title={t("vendorPanel.wallet.totalWithdrawn")} value="$9,800" icon={ArrowUpCircle} tone="blue" />
        <VendorStatCard title={t("vendorPanel.wallet.totalCredits")} value="$18,420" icon={ArrowDownCircle} />
      </div>

      <div className="rounded-2xl border border-panel-line bg-amazon-navy p-6 text-white shadow-sm">
        <p className="text-sm font-bold text-slate-300">
          {t("vendorPanel.wallet.currentWallet")}
        </p>
        <h2 className="mt-2 text-4xl font-black">$3,250.00</h2>
        <p className="mt-2 text-sm text-slate-400">
          {t("vendorPanel.wallet.currentWalletHelp")}
        </p>
      </div>
    </div>
  );
}