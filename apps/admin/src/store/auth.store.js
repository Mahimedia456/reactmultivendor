const AUTH_KEY = "mahi_store_auth";

export function getAuthSession() {
  try {
    const saved = localStorage.getItem(AUTH_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function saveAuthSession(session) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return Boolean(getAuthSession()?.access_token);
}

export function getUserRole() {
  return getAuthSession()?.user?.role || null;
}