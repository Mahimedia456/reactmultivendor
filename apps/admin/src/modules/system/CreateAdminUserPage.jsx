import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

export default function CreateAdminUserPage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/users" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to admin users
        </Link>
        <h1 className="text-2xl font-black">Create Admin User</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="ms-card p-5">
          <h3 className="mb-5 text-lg font-black">User Information</h3>

          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold">Full Name</label>
              <input className="ms-input" placeholder="Aamir" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Email</label>
              <input className="ms-input" placeholder="admin@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Phone</label>
              <input className="ms-input" placeholder="+92 300 0000000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Password</label>
              <input className="ms-input" type="password" placeholder="Create password" />
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="ms-card p-5">
            <h3 className="text-lg font-black">Access</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold">Role</label>
                <select className="ms-input">
                  <option>Super Admin</option>
                  <option>Operations</option>
                  <option>Support</option>
                  <option>Finance</option>
                  <option>Catalog Manager</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Status</label>
                <select className="ms-input">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <label className="flex items-center gap-3 rounded-lg border border-panel-line p-3 dark:border-panel-darkLine">
                <input type="checkbox" />
                <span className="text-sm font-bold">Send login email</span>
              </label>
            </div>
          </div>

          <button className="ms-btn-primary w-full gap-2">
            <Save size={17} />
            Save User
          </button>
        </aside>
      </div>
    </div>
  );
}