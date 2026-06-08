import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, FileText, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const docs = [
  ["vendorsPage.cnicFront", "vendorsPage.submitted", "vendorsPage.approved", "success"],
  ["vendorsPage.businessRegistration", "vendorsPage.submitted", "vendorsPage.pending", "warning"],
  ["vendorsPage.taxCertificate", "vendorsPage.missing", "vendorsPage.required", "danger"],
];

export default function VendorDocumentsPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const badgeClass = {
    success: "ms-badge-success",
    warning: "ms-badge-warning",
    danger: "ms-badge-danger",
  };

  return (
    <div className="space-y-5">
      <div>
        <Link to={`/admin/vendors/${id}`} className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("vendorsPage.backToVendor")}
        </Link>
        <h1 className="text-2xl font-black">{t("vendorsPage.vendorDocuments")}</h1>
      </div>

      <div className="grid gap-4">
        {docs.map(([nameKey, statusKey, reviewKey, type]) => (
          <div key={nameKey} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-black">{t(nameKey)}</h3>
                  <p className="text-sm font-semibold text-slate-500">{t(statusKey)}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className={badgeClass[type]}>{t(reviewKey)}</span>
                <button className="ms-btn-soft h-9 w-9 px-0 text-emerald-700">
                  <Check size={15} />
                </button>
                <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                  <X size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}