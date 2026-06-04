import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "../store/auth.store";

export default function RoleRoute({ allowedRoles = [] }) {
  const role = getUserRole();

  if (!allowedRoles.includes(role)) {
    if (role === "vendor") return <Navigate to="/vendor/dashboard" replace />;
    if (role === "admin") return <Navigate to="/admin/dashboard" replace />;

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}