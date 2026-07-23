import { useState, useContext } from "react";
import { Eye, EyeOff, Hospital } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context-API/AuthContext";

/**
 * Admin login page – uses the same validation and "show password" UI as the public
 * LogInForm component. On successful login it redirects to the admin dashboard
 * (`/admin/dashboard`).
 *
 * Design follows the AdminDesign system: light background, white card, primary
 * button color #2563EB, 8px rounded corners on inputs/buttons, and 24px
 * spacing between elements.
 */
const AdminLogInPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Show/hide password toggle (lucide‑react icons)
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await login({
      username: data.username,
      password: data.password,
      role: "admin",
    });
    // No error handling needed for the mock login – navigate on success
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Hospital size={30} className="text-[#2563eb]" />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#191c1e]">
            Smart Clinic
          </h1>

          <p className="mt-2 text-sm text-[#6b7280]">Receptionist Portal</p>
        </div>

        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-[#191c1e]"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              {...loginForm.register("username", {
                required: "Username is required",
              })}
              className="h-12 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
            />

            {loginForm.formState.errors.username && (
              <p className="mt-2 text-sm text-[#ba1a1a]">
                {loginForm.formState.errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#191c1e]"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                {...loginForm.register("password", {
                  required: "Password is required",
                })}
                className="h-12 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 pr-12 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#2563eb]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {loginForm.formState.errors.password && (
              <p className="mt-2 text-sm text-[#ba1a1a]">
                {loginForm.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={
              loginForm.formState.isSubmitting || !loginForm.formState.isValid
            }
            className="flex h-12 w-full items-center justify-center rounded-lg bg-[#2563eb] text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loginForm.formState.isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogInPage;
