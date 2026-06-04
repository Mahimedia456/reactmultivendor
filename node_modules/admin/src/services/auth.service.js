import { saveAuthSession, clearAuthSession } from "../store/auth.store";

export async function loginUser({ email, password }) {
  // Temporary mock login until Express API auth is ready.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const role = email.toLowerCase().includes("vendor") ? "vendor" : "admin";

  const session = {
    access_token: "local_mock_token",
    user: {
      id: role === "admin" ? 1 : 2,
      name: role === "admin" ? "Aamir Admin" : "Vendor Store",
      email,
      role,
    },
  };

  saveAuthSession(session);
  return session;
}

export function logoutUser() {
  clearAuthSession();
}