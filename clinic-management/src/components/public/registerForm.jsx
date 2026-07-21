import { useState, useContext } from "react";
import { EyeOff, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context-API/AuthContext";

const RegistertionForm = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  //Showing Password

  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfrimPassword, setShowConfrimPassword] = useState(false);

  const registerForm = useForm({
    mode: "onChange",
  });

  const onRegisterSubmit = async (data) => {
    const success = await register(data);
    if (success) {
      navigate("/");
    }
    console.log("Registered successfully");
  };

  return (
    <>
      <form
        className="space-y-5"
        onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            {...registerForm.register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "At least 2 characters" },
            })}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3
                   focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                   outline-none transition"
          />
          {registerForm.formState.errors.fullName && (
            <p className="text-sm text-red-500 mt-1">
              {registerForm.formState.errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="registerEmail"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email
          </label>

          <input
            id="registerEmail"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            {...registerForm.register("email", {
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
          {registerForm.formState.errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {registerForm.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="registerPassword"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="registerPassword"
              type={showRegisterPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Create a password"
              {...registerForm.register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "At least 8 characters",
                },
              })}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3
                   focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                   outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowRegisterPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              tabIndex={-1}
              aria-label={
                showRegisterPassword ? "Hide password" : "Show password"
              }
            >
              {showRegisterPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {registerForm.formState.errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {registerForm.formState.errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Confirm Password
          </label>
          <div className=" relative">
            <input
              id="confirmPassword"
              type={showConfrimPassword ? "text" : "password"}
              placeholder="Confirm your password"
              {...registerForm.register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === registerForm.getValues("password") ||
                  "Passwords do not match",
              })}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3
                   focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                   outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowConfrimPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              tabIndex={-1}
              aria-label={
                showConfrimPassword ? "Hide password" : "Show password"
              }
            >
              {showConfrimPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {registerForm.formState.errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {registerForm.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            registerForm.formState.isSubmitting ||
            !registerForm.formState.isValid
          }
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegistertionForm;
