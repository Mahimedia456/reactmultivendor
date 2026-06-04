export function getInitialTheme() {
  const saved = localStorage.getItem("mahi-store-theme");

  if (saved === "dark" || saved === "light") {
    return saved;
  }

  return "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("mahi-store-theme", theme);
}