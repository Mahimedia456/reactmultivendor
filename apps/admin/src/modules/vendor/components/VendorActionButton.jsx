export default function VendorActionButton({ children, icon: Icon, variant = "soft", ...props }) {
  const classes =
    variant === "primary"
      ? "ms-btn-primary inline-flex items-center gap-2"
      : "ms-btn-soft inline-flex items-center gap-2";

  return (
    <button className={classes} {...props}>
      {Icon && <Icon size={17} />}
      {children}
    </button>
  );
}export default function VendorActionButton({ children, icon: Icon, variant = "soft", ...props }) {
  const classes =
    variant === "primary"
      ? "ms-btn-primary inline-flex items-center gap-2"
      : "ms-btn-soft inline-flex items-center gap-2";

  return (
    <button className={classes} {...props}>
      {Icon && <Icon size={17} />}
      {children}
    </button>
  );
}