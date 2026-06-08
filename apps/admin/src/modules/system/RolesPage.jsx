import { Link } from "react-router-dom";
import { Edit, Plus, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const roles = [
  ["systemPage.superAdmin", "systemPage.fullSystemAccess", "systemPage.modules12", "active"],
  ["systemPage.operations", "systemPage.ordersProductsInventory", "systemPage.modules7", "active"],
  ["systemPage.support", "systemPage.customersTicketsReviews", "systemPage.modules4", "active"],
  ["systemPage.finance", "systemPage.walletsPayoutsTransactions", "systemPage.modules5", "active"],
];

export default function RolesPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("systemPage.rolesBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("systemPage.rolesTitle")}
          </h1>
        </div>

        <Link to="/admin/roles/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("systemPage.createRole")}
        </Link>
      </div>

      <div className="grid gap-4">
        {roles.map(([nameKey, descKey, modulesKey, status]) => (
          <div key={nameKey} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-black">{t(nameKey)}</h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {t(descKey)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="ms-badge">{t(modulesKey)}</span>
                <span
                  className={
                    status === "active" ? "ms-badge-success" : "ms-badge-warning"
                  }
                >
                  {t(`status.${status}`)}
                </span>
                <button className="ms-btn-soft h-9 w-9 px-0">
                  <Edit size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}