import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VendorPageHeader from "../components/VendorPageHeader";

const defaultValues = ["Black", "White", "Red"];

export default function VendorAttributeFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <div className="space-y-6">
      <VendorPageHeader
        title={isEdit ? "Edit Attribute" : "Create Attribute"}
        description="Add product attributes and values for vendor product variants."
        action={
          <Link to="/vendor/attributes" className="ms-btn-soft inline-flex items-center gap-2">
            <ArrowLeft size={17} />
            Back
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-panel-line bg-white p-6 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            Attribute Information
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black">Attribute Name</label>
              <input className="ms-input" defaultValue={isEdit ? "Color" : ""} placeholder="Color" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Slug</label>
              <input className="ms-input" defaultValue={isEdit ? "color" : ""} placeholder="color" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Input Type</label>
              <select className="ms-input" defaultValue="select">
                <option value="select">Select</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="color">Color Picker</option>
                <option value="button">Button</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black">Status</label>
              <select className="ms-input" defaultValue="active">
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <label className="block text-sm font-black">Attribute Values</label>
              <button className="ms-btn-soft inline-flex items-center gap-2">
                <Plus size={16} />
                Add Value
              </button>
            </div>

            <div className="space-y-3">
              {(isEdit ? defaultValues : [""]).map((value, index) => (
                <div key={index} className="flex gap-3">
                  <input className="ms-input" defaultValue={value} placeholder="Value name" />
                  <button className="ms-btn-soft h-11 w-11 px-0 text-red-500">
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Link to="/vendor/attributes" className="ms-btn-soft">Cancel</Link>
            <button className="ms-btn-primary inline-flex items-center gap-2">
              <Save size={17} />
              {isEdit ? "Update Attribute" : "Create Attribute"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-panel-line bg-white p-5 shadow-sm dark:border-panel-darkLine dark:bg-panel-darkCard">
          <h3 className="text-lg font-black text-slate-950 dark:text-white">
            Usage Notes
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Attributes are used to generate product variants. Example: Color + Size can create Black/S, Black/M, Red/L.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-white/5">
            <p className="text-sm font-black">Recommended attributes</p>
            <p className="mt-2 text-sm text-slate-500">Color, Size, Material, Storage, Weight, Model.</p>
          </div>
        </div>
      </div>
    </div>
  );
}