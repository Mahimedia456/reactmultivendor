export default function VendorStatusBadge({ status }) {
  const styles = {
    active: "ms-badge-success",
    pending: "ms-badge-warning",
    suspended: "ms-badge-danger",
    rejected: "ms-badge-danger",
  };

  const label = {
    active: "Active",
    pending: "Pending",
    suspended: "Suspended",
    rejected: "Rejected",
  };

  return <span className={styles[status] || "ms-badge"}>{label[status] || status}</span>;
}