import { useState, useContext } from "react";
import { EyeOff, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context-API/AuthContext";

const LogInForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  //Showing Password
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useForm({
    mode: "onChange",
  });

  const onLoginSubmit = async (data) => {
    const success = await login(data.email, data.password);
    if (success) {
      navigate("/");
    }
    console.log("Logged in successfully", success);
  };

  return (
    <>
      <form
        className="space-y-5"
        onSubmit={loginForm.handleSubmit(onLoginSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            {...loginForm.register("email", {
              required: "Email id required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3
                   focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                   outline-none transition"
          />
          {loginForm.formState.errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {loginForm.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 mb-2"
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
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-11 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {loginForm.formState.errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {loginForm.formState.errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            loginForm.formState.isSubmitting || !loginForm.formState.isValid
          }
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white
                 transition hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LogInForm;
