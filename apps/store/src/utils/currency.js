export function formatMoney(value) {
  const number = Number(value || 0);
  if (!Number.isFinite(number) || number <= 0) return "Price On Request";
  return `Rs. ${number.toLocaleString("en-PK")}`;
}