import { Link } from "react-router-dom";
import { Edit, Plus, Search, ShieldCheck, Trash2, UserCog } from "lucide-react";
import { useTranslation } from "react-i18next";

const users = [
  ["1", "Aamir", "aamir@mahimediasolutions.com", "systemPage.superAdmin", "active"],
  ["2", "Operations Manager", "ops@mahistore.com", "systemPage.operations", "active"],
  ["3", "Support Agent", "support@mahistore.com", "systemPage.support", "inactive"],
];

export default function AdminUsersPage() {
  const { t } = useTranslation();

  const stats = [
    ["systemPage.totalAdmins", "12"],
    ["status.active", "10"],
    ["status.inactive", "2"],
    ["systemPage.roles", "6"],
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            {t("systemPage.usersBreadcrumb")}
          </p>
          <h1 className="mt-1 text-2xl font-black">
            {t("systemPage.adminUsers")}
          </h1>
        </div>

        <Link to="/admin/users/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("systemPage.addAdminUser")}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([labelKey, value]) => (
          <div key={labelKey} className="ms-card p-5">
            <UserCog size={20} className="text-brand-700" />
            <p className="mt-4 text-sm font-bold text-slate-500">
              {t(labelKey)}
            </p>
            <h3 className="mt-1 text-2xl font-black">{value}</h3>
          </div>
        ))}
      </div>

      <div className="ms-card">
        <div className="border-b border-panel-line p-4 dark:border-panel-darkLine">
          <div className="flex max-w-md items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-panel-darkLine dark:bg-panel-darkCard">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full bg-transparent text-sm font-medium outline-none"
              placeholder={t("systemPage.searchAdminUsers")}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">{t("systemPage.user")}</th>
                <th className="px-5 py-3">{t("systemPage.email")}</th>
                <th className="px-5 py-3">{t("systemPage.role")}</th>
                <th className="px-5 py-3">{t("common.status")}</th>
                <th className="px-5 py-3 text-right">{t("common.actions")}</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {users.map(([id, name, email, roleKey, status]) => (
                <tr key={id} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <ShieldCheck size={18} />
                      </div>
                      <p className="font-black">{name}</p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold">{email}</td>
                  <td className="px-5 py-4 text-sm font-black">{t(roleKey)}</td>

                  <td className="px-5 py-4">
                    <span
                      className={
                        status === "active" ? "ms-badge-success" : "ms-badge-warning"
                      }
                    >
                      {t(`status.${status}`)}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/users/${id}/edit`}
                        className="ms-btn-soft h-9 w-9 px-0"
                      >
                        <Edit size={15} />
                      </Link>
                      <button className="ms-btn-soft h-9 w-9 px-0 text-rose-700">
                        <Trash2 size={15} />
                      </button>
                    </div>
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