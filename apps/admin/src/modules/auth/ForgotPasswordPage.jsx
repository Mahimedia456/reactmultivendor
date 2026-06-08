import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ForgotPasswordPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-6 rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm font-semibold text-brand-900 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300">
        {t("auth.forgotInfo")}
      </div>

      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold">
            {t("auth.emailAddress")}
          </label>
          <div className="relative">
            <input
              className="ms-input pl-11"
              type="email"
              placeholder={t("auth.emailPlaceholder")}
            />
            <Mail
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        <button type="button" className="ms-btn-primary w-full">
          {t("auth.sendResetInstructions")}
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