export default function OrderStatusBadge({ status }) {
  const classes = {
    Pending: "ms-badge-warning",
    Processing: "ms-badge",
    Packed: "ms-badge",
    Shipped: "ms-badge-success",
    Delivered: "ms-badge-success",
    Cancelled: "ms-badge-danger",
    Returned: "ms-badge-warning",
    Refunded: "ms-badge-danger",
  };

  return <span className={classes[status] || "ms-badge"}>{status}</span>;
}