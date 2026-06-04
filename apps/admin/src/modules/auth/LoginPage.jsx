import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";
import { loginUser } from "../../services/auth.service";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "admin@mahistore.com",
    password: "password123",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const session = await loginUser(form);

      if (session.user.role === "vendor") {
        navigate("/vendor/dashboard", { replace: true });
      } else {
        navigate("/admin/dashboard", { replace: true });
      }
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error ? (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300">
          {error}
        </div>
      ) : null}

      <div>
        <label className="mb-2 block text-sm font-bold">Email address</label>
        <input
          className="ms-input"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="admin@mahistore.com"
          required
        />
        <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Vendor test: vendor@mahistore.com
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="block text-sm font-bold">Password</label>
          <Link
            to="/forgot-password"
            className="text-sm font-bold text-brand-700 hover:text-brand-800 dark:text-brand-300"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <input
            className="ms-input pr-11"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter password"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      <button disabled={loading} className="ms-btn-primary w-full gap-2">
        {loading ? <Loader2 className="animate-spin" size={17} /> : null}
        Sign in
        {!loading ? <ArrowRight size={17} /> : null}
      </button>
    </form>
  );
}