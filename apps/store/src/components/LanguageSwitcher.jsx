import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === "de" ? "en" : "de")}
      className="product-card-title border border-current px-3 py-2"
    >
      {i18n.language === "de" ? "EN" : "DE"}
    </button>
  );
}