import { useState, useContext } from "react";
import { Hospital, EyeOff, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams,useNavigate } from "react-router-dom";
import AuthContext from "../../context-API/AuthContext";


const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [isLogin, setIsLogin] = useState(mode !== "register");
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  //Showing Password
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfrimPassword, setShowConfrimPassword] = useState(false);

  const loginForm = useForm({
    mode: "onChange",
  });
  const registerForm = useForm({
    mode: "onChange",
  });
  if (user) {
    navigate("/");
  }

  const onLoginSubmit = async (data) => {
    const success = await login(data.email, data.password);
    if (success) {
      navigate("/");
    }
    console.log("Logged in successfully", success);
  };

  const onRegisterSubmit = async (data) => {
    const success = await register(data);
    if (success) {
      navigate("/");
    }
    console.log("Registered successfully");
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center gap-2 text-blue-600">
            <span className="text-3xl">
              <Hospital size={32} />
            </span>

            <h2 className="text-2xl font-bold ">Smart Clinic</h2>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center text-slate-900 mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-center text-slate-500 mb-8">
          {isLogin
            ? "Login to manage your appointments."
            : "Create your account to book appointments."}
        </p>

        {isLogin ? (
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
        ) : (
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
                  {showRegisterPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
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
                  {showConfrimPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
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
        )}

        <div className="mt-8 text-center text-sm text-slate-600">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  loginForm.reset();
                  registerForm.reset();
                }}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  

                  setIsLogin(true);
                  loginForm.reset();
                  registerForm.reset();
                }}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
