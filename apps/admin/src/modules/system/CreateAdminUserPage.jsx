import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateAdminUserPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link
          to="/admin/users"
          className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
        >
          <ArrowLeft size={16} />
          {t("systemPage.backToAdminUsers")}
        </Link>
        <h1 className="text-2xl font-black">
          {t("systemPage.createAdminUser")}
        </h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="ms-card p-5">
          <h3 className="mb-5 text-lg font-black">
            {t("systemPage.userInformation")}
          </h3>

          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold">
                {t("systemPage.fullName")}
              </label>
              <input className="ms-input" placeholder="Aamir" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                {t("systemPage.email")}
              </label>
              <input className="ms-input" placeholder="admin@example.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                {t("systemPage.phone")}
              </label>
              <input className="ms-input" placeholder="+92 300 0000000" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                {t("systemPage.password")}
              </label>
              <input
                className="ms-input"
                type="password"
                placeholder={t("systemPage.createPassword")}
              />
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("systemPage.access")}</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  {t("systemPage.role")}
                </label>
                <select className="ms-input">
                  <option>{t("systemPage.superAdmin")}</option>
                  <option>{t("systemPage.operations")}</option>
                  <option>{t("systemPage.support")}</option>
                  <option>{t("systemPage.finance")}</option>
                  <option>{t("systemPage.catalogManager")}</option>
                </select>
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

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">
                  {t("systemPage.sendLoginEmail")}
                </span>
              </label>
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} />
            {t("systemPage.saveUser")}
          </button>
        </aside>
      </div>
    </div>
  );
}