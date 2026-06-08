import { Link } from "react-router-dom";
import { Eye, Search, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";

const wallets = [
  ["1", "Aamir Fragrances", "Aamir", "Rs 92,000", "Rs 18,500", "Rs 640,000", "Rs 420,000"],
  ["2", "Urban Deals", "Usman", "Rs 154,800", "Rs 42,000", "Rs 1,420,000", "Rs 900,000"],
  ["3", "Tech Point", "Ali Khan", "Rs 31,500", "Rs 6,200", "Rs 310,000", "Rs 180,000"],
];

export default function VendorWalletsPage() {
  const { t } = useTranslation();

  const stats = [
    ["finance.totalBalance", "Rs 2.4M"],
    ["finance.pendingClearance", "Rs 386k"],
    ["finance.paidOut", "Rs 8.8M"],
    ["finance.payoutRequestsCount", "18"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">{t("finance.vendorWalletsBreadcrumb")}</p>
        <h1 className="mt-1 text-2xl font-black">{t("finance.vendorWallets")}</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <WalletCards size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">{t(labelKey)}</p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm font-medium outline-none" placeholder={t("finance.searchVendorWallet")} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("finance.store")}</th>
                <th className="px-5 py-3">{t("finance.owner")}</th>
                <th className="px-5 py-3">{t("finance.available")}</th>
                <th className="px-5 py-3">{t("finance.pending")}</th>
                <th className="px-5 py-3">{t("finance.totalEarned")}</th>
                <th className="px-5 py-3">{t("finance.withdrawn")}</th>
                <th className="px-5 py-3 text-right">{t("common.action")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {wallets.map(([id, store, owner, available, pending, earned, withdrawn]) => (
                <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4 font-black">{store}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{owner}</td>
                  <td className="px-5 py-4 text-sm font-black">{available}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{pending}</td>
                  <td className="px-5 py-4 text-sm font-black">{earned}</td>
                  <td className="px-5 py-4 text-sm font-semibold">{withdrawn}</td>
                  <td className="px-5 py-4 text-right">
                    <Link to={`/admin/vendors/${id}/wallet`} className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}