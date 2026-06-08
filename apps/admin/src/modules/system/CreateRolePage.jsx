import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

const modules = [
  "systemPage.dashboard",
  "systemPage.vendors",
  "systemPage.stores",
  "systemPage.products",
  "systemPage.inventory",
  "systemPage.orders",
  "systemPage.transactions",
  "systemPage.shipping",
  "systemPage.customers",
  "systemPage.finance",
  "systemPage.marketing",
  "systemPage.reports",
  "systemPage.users",
  "systemPage.settingsTitle",
];

export default function CreateRolePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/roles"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("systemPage.backToRoles")}
        </Link>
        <h1 className="text-2xl font-black">{t("systemPage.createRole")}</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("systemPage.roleName")}
            </label>
            <input className="ms-input" placeholder="Operations Manager" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              {t("common.status")}
            </label>
            <select className="ms-input">
              <option>{t("status.active")}</option>
              <option>{t("status.inactive")}</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">
              {t("common.description")}
            </label>
            <textarea
              className="ms-input h-24 py-3"
              placeholder={t("systemPage.roleDescription")}
            />
          </div>
        </div>
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">
          {t("systemPage.modulePermissions")}
        </h3>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("systemPage.module")}</th>
                <th className="px-5 py-3">{t("systemPage.view")}</th>
                <th className="px-5 py-3">{t("systemPage.create")}</th>
                <th className="px-5 py-3">{t("systemPage.edit")}</th>
                <th className="px-5 py-3">{t("systemPage.delete")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {modules.map((moduleKey) => (
                <tr key={moduleKey}>
                  <td className="px-5 py-4 font-black">{t(moduleKey)}</td>
                  {["view", "create", "edit", "delete"].map((perm) => (
                    <td key={perm} className="px-5 py-4">
                      <input type="checkbox" defaultChecked={perm === "view"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            {t("systemPage.saveRole")}
          </button>
        </div>
      </div>
    </div>
  );
}