import { useState, useContext } from "react";
import { Hospital } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context-API/AuthContext";
import LogInForm from "../../components/public/LogInForm";
import RegistertionForm from "../../components/public/registerForm";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const [isLogin, setIsLogin] = useState(mode !== "register");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginForm = useForm({
    mode: "onChange",
  });
  const registerForm = useForm({
    mode: "onChange",
  });
  if (user) {
    navigate("/");
  }

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

        {isLogin ? <LogInForm /> : <RegistertionForm />}

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
