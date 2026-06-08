import { Link } from "react-router-dom";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ResetPasswordPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
        {t("auth.resetInfo")}
      </div>

      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold">
            {t("auth.newPassword")}
          </label>
          <div className="relative">
            <input
              className="ms-input pl-11"
              type="password"
              placeholder={t("auth.newPassword")}
            />
            <LockKeyhole
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            {t("auth.confirmPassword")}
          </label>
          <div className="relative">
            <input
              className="ms-input pl-11"
              type="password"
              placeholder={t("auth.confirmPassword")}
            />
            <LockKeyhole
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        <button type="button" className="ms-btn-primary w-full">
          {t("auth.updatePassword")}
        </button>

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
        >
          <ArrowLeft size={16} />
          {t("auth.backToLogin")}
        </Link>
      </form>
    </div>
  );
}