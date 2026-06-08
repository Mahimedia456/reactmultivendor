import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ShippingRuleDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const details = [
    ["shippingPage.ruleId", id],
    ["shippingPage.ruleName", "Karachi Standard Delivery"],
    ["shippingPage.zone", "Karachi"],
    ["shippingPage.methodLabel", t("shippingPage.standardDelivery")],
    ["shippingPage.baseRate", "Rs 250"],
    ["shippingPage.freeShippingAbove", "Rs 10,000"],
    ["shippingPage.codAllowed", t("shippingPage.yes")],
    ["common.status", t("status.active")],
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-4">
        <div>
          <Link
            to="/admin/shipping"
            className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} />
            {t("shippingPage.backToShipping")}
          </Link>

          <h1 className="text-2xl font-black">
            {t("shippingPage.shippingRuleDetail")}
          </h1>
        </div>

        <Link to={`/admin/shipping/${id}/edit`} className="ms-btn-primary gap-2">
          <Edit size={17} />
          {t("shippingPage.editRule")}
        </Link>
      </div>

      <div className="ms-card p-5">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-black">
          <Truck size={19} />
          {t("shippingPage.ruleInformation")}
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {details.map(([labelKey, value]) => (
            <div
              key={labelKey}
              className="rounded-lg border border-panel-line p-4 dark:border-panel-darkLine"
            >
              <p className="text-xs font-black uppercase text-slate-400">
                {t(labelKey)}
              </p>
              <p className="mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}