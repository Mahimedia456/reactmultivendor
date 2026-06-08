import { Link } from "react-router-dom";
import { ArrowLeft, Save, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateVendorPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/vendors" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          {t("vendorsPage.backToVendors")}
        </Link>
        <h1 className="text-2xl font-black">{t("vendorsPage.createVendor")}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">
          {t("vendorsPage.createDescription")}
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("vendorsPage.vendorAccount")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.ownerName")}</label>
                <input className="ms-input" placeholder="Aamir" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.email")}</label>
                <input className="ms-input" placeholder="vendor@example.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.phone")}</label>
                <input className="ms-input" placeholder="+92 300 0000000" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.password")}</label>
                <input className="ms-input" type="password" placeholder={t("vendorsPage.createPassword")} />
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
              <Store size={19} />
              {t("vendorsPage.storeProfile")}
            </h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.storeName")}</label>
                <input className="ms-input" placeholder="Aamir Fragrances" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.storeSlug")}</label>
                <input className="ms-input" placeholder="aamir-fragrances" />
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.address")}</label>
                <textarea className="ms-input h-24 py-3" placeholder={t("vendorsPage.storeAddress")} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.city")}</label>
                <input className="ms-input" placeholder="Karachi" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.country")}</label>
                <select className="ms-input">
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="mb-5 text-lg font-black">{t("vendorsPage.documentsKyc")}</h3>

            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.cnicTaxId")}</label>
                <input className="ms-input" placeholder="35202-XXXXXXX-X" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.businessRegistration")}</label>
                <input className="ms-input" placeholder={t("vendorsPage.registrationNumber")} />
              </div>

              <div className="lg:col-span-2 rounded-card border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-panel-darkLine dark:bg-white/5">
                <p className="text-sm font-bold">{t("vendorsPage.uploadVendorDocuments")}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {t("vendorsPage.documentsHelp")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("vendorsPage.adminControls")}</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.status")}</label>
                <select className="ms-input">
                  <option>{t("vendorsPage.active")}</option>
                  <option>{t("vendorsPage.pending")}</option>
                  <option>{t("vendorsPage.suspended")}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">{t("vendorsPage.commissionRate")}</label>
                <input className="ms-input" placeholder="10%" />
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">{t("vendorsPage.allowProductPublishing")}</span>
              </label>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">{t("vendorsPage.autoApproveProducts")}</span>
              </label>
            </div>
          </div>

          <div className="ms-card p-5">
            <h3 className="text-lg font-black">{t("vendorsPage.payoutDetails")}</h3>

            <div className="mt-5 space-y-4">
              <input className="ms-input" placeholder={t("vendorsPage.bankName")} />
              <input className="ms-input" placeholder={t("vendorsPage.accountTitle")} />
              <input className="ms-input" placeholder={t("vendorsPage.ibanAccountNo")} />
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} />
            {t("vendorsPage.saveVendor")}
          </button>
        </aside>
      </div>
    </div>
  );
}