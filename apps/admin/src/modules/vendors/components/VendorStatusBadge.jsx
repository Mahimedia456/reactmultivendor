import { useTranslation } from "react-i18next";

export default function VendorStatusBadge({ status }) {
  const { t } = useTranslation();

  const styles = {
    active: "ms-badge-success",
    pending: "ms-badge-warning",
    suspended: "ms-badge-danger",
    rejected: "ms-badge-danger",
  };

  return (
    <span className={styles[status] || "ms-badge"}>
      {t(`vendorsPage.${status}`, status)}
    </span>
  );
}