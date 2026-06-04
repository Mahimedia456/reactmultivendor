import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";

const modules = [
  "Dashboard",
  "Vendors",
  "Stores",
  "Products",
  "Inventory",
  "Orders",
  "Transactions",
  "Shipping",
  "Customers",
  "Finance",
  "Marketing",
  "Reports",
  "Users",
  "Settings",
];

export default function CreateRolePage() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/admin/roles" className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-700">
          <ArrowLeft size={16} />
          Back to roles
        </Link>
        <h1 className="text-2xl font-black">Create Role</h1>
      </div>

      <div className="ms-card p-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold">Role Name</label>
            <input className="ms-input" placeholder="Operations Manager" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold">Status</label>
            <select className="ms-input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <label className="mb-2 block text-sm font-bold">Description</label>
            <textarea className="ms-input h-24 py-3" placeholder="Role description" />
          </div>
        </div>
      </div>

      <div className="ms-card p-5">
        <h3 className="text-lg font-black">Module Permissions</h3>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="ms-table-head">
              <tr>
                <th className="px-5 py-3">Module</th>
                <th className="px-5 py-3">View</th>
                <th className="px-5 py-3">Create</th>
                <th className="px-5 py-3">Edit</th>
                <th className="px-5 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-panel-line dark:divide-panel-darkLine">
              {modules.map((module) => (
                <tr key={module}>
                  <td className="px-5 py-4 font-black">{module}</td>
                  {["view", "create", "edit", "delete"].map((perm) => (
                    <td key={perm} className="px-5 py-4">
                      <input type="checkbox" defaultChecked={perm === "view"} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="ms-btn-primary gap-2">
            <Save size={17} />
            Save Role
          </button>
        </div>
      </div>
    </div>
  );
}