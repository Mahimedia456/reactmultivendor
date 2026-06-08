import { Check, Eye, Store, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import VendorStatusBadge from "./components/VendorStatusBadge";

const requests = [
  {
    id: 11,
    store: "Fashion Hub",
    owner: "Sara",
    email: "sara@fashionhub.com",
    categoryKey: "vendorsPage.fashion",
    documentsKey: "vendorsPage.submitted",
    status: "pending",
  },
  {
    id: 12,
    store: "Pet World",
    owner: "Hamza",
    email: "hamza@petworld.com",
    categoryKey: "vendorsPage.petSupplies",
    documentsKey: "vendorsPage.missingTaxDocument",
    status: "pending",
  },
];

export default function VendorRequestsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">
          {t("vendorsPage.requestsBreadcrumb")}
        </p>
        <h1 className="mt-1 text-2xl font-black">
          {t("vendorsPage.vendorApprovalRequests")}
        </h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("vendorsPage.store")}</th>
              <th className="px-5 py-3">{t("vendorsPage.owner")}</th>
              <th className="px-5 py-3">{t("vendorsPage.category")}</th>
              <th className="px-5 py-3">{t("vendorsPage.documents")}</th>
              <th className="px-5 py-3">{t("vendorsPage.status")}</th>
              <th className="px-5 py-3 text-right">{t("common.actions")}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {requests.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Store size={18} />
                    </div>
                    <div>
                      <p className="font-black">{item.store}</p>
                      <p className="text-xs font-semibold text-slate-500">{item.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm font-semibold">{item.owner}</td>
                <td className="px-5 py-4 text-sm font-semibold">{t(item.categoryKey)}</td>
                <td className="px-5 py-4 text-sm font-semibold">{t(item.documentsKey)}</td>
                <td className="px-5 py-4">
                  <VendorStatusBadge status={item.status} />
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="ms-btn-soft h-9 w-9 px-0">
                      <Eye size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                      <Check size={16} />
                    </button>
                    <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                      <X size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}