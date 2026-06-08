import { useTranslation } from "react-i18next";

export default function ReturnsPage() {
  const { t } = useTranslation();

  const rows = [
    ["RET-1001", "MS-1001", "Ahmed Raza", "ordersPage.damagedItem", "pending"],
    ["RET-1002", "MS-1008", "Sara Khan", "ordersPage.wrongSize", "approved"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-slate-500">{t("ordersPage.returnsBreadcrumb")}</p>
        <h1 className="mt-1 text-2xl font-black">{t("ordersPage.returnsTitle")}</h1>
      </div>

      <div className="ms-card overflow-hidden">
        <table className="w-full min-w-[850px] text-left">
          <thead className="ms-table-head">
            <tr>
              <th className="px-5 py-3">{t("ordersPage.returnId")}</th>
              <th className="px-5 py-3">{t("ordersPage.order")}</th>
              <th className="px-5 py-3">{t("ordersPage.customer")}</th>
              <th className="px-5 py-3">{t("ordersPage.reason")}</th>
              <th className="px-5 py-3">{t("common.status")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
            {rows.map(([id, order, customer, reasonKey, status]) => (
              <tr key={id}>
                <td className="px-5 py-4 font-black">{id}</td>
                <td className="px-5 py-4 text-sm font-semibold">{order}</td>
                <td className="px-5 py-4 text-sm font-semibold">{customer}</td>
                <td className="px-5 py-4 text-sm font-semibold">{t(reasonKey)}</td>
                <td className="px-5 py-4">
                  <span className={status === "approved" ? "ms-badge-success" : "ms-badge-warning"}>
                    {t(`status.${status}`)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
