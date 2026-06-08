import { Link } from "react-router-dom";
import { Image, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const banners = [
  ["marketingPage.summerSaleHero", "marketingPage.homepageHero", "marketingPage.desktopMobile", "active"],
  ["marketingPage.perfumeCollection", "marketingPage.categoryPage", "marketingPage.desktop", "active"],
  ["marketingPage.vendorPromo", "marketingPage.vendorStore", "marketingPage.mobile", "inactive"],
];

export default function BannersPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{t("marketingPage.bannersBreadcrumb")}</p>
          <h1 className="mt-1 text-2xl font-black">{t("marketingPage.banners")}</h1>
        </div>

        <Link to="/admin/banners/create" className="ms-btn-primary gap-2">
          <Plus size={17} />
          {t("marketingPage.createBanner")}
        </Link>
      </div>

      <div className="grid gap-4">
        {banners.map(([titleKey, positionKey, platformKey, status]) => (
          <div key={titleKey} className="ms-card p-5">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Image size={20} />
                </div>
                <div>
                  <h3 className="font-black">{t(titleKey)}</h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {t(positionKey)} • {t(platformKey)}
                  </p>
                </div>
              </div>

              <span className={status === "active" ? "ms-badge-success" : "ms-badge-warning"}>
                {t(`status.${status}`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}