import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import { getAuthSession } from "../store/auth.store";

export default function AdminLayout() {
  const session = getAuthSession();
  const role = session?.user?.role || "admin";

  return (
    <div className="ms-page min-h-screen">
      <Sidebar role={role} />

      <main className="min-h-screen lg:pl-[292px]">
        <Topbar role={role} user={session?.user} />

        <div className="p-5 lg:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}