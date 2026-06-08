import { useTranslation } from "react-i18next";

export default function OrderStatusBadge({ status }) {
  const { t } = useTranslation();

  const normalized = String(status || "").toLowerCase();

  const classes = {
    pending: "ms-badge-warning",
    processing: "ms-badge",
    packed: "ms-badge",
    shipped: "ms-badge-success",
    delivered: "ms-badge-success",
    cancelled: "ms-badge-danger",
    returned: "ms-badge-warning",
    refunded: "ms-badge-danger",
  };

  return (
    <span className={classes[normalized] || "ms-badge"}>
      {t(`status.${normalized}`, status)}
    </span>
  );
}
