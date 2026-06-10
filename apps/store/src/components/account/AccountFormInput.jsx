export default function AccountFormInput({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block product-card-title text-black/70">
        {label}
      </span>

      <input
        {...props}
        className="h-12 w-full border border-black/10 bg-black/[0.03] px-4 text-[13px] outline-none transition focus:border-black"
      />
    </label>
  );
}