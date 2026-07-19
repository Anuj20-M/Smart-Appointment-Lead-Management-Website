import { useForm } from "react-hook-form";
import { Hospital } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthContext from "../../context-API/AuthContext";

const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Update user profile with form data
    const updatedUser = {
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dob,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      emergencyContact: data.emergencyContact,
      address: data.address
    };

    // Update the user in AuthContext
    setUser(updatedUser);

    // Show success toast
    toast.success("Profile updated successfully!", {
      position: "top-center",
      duration: 2000
    });

    // Navigate to home page
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <Hospital className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-blue-600">
            Smart Clinic
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-800">
            Complete Your Profile
          </h2>

          <p className="mt-2 text-slate-500 text-center max-w-lg">
            Please provide your information before booking your appointment.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <InputField
              label="First Name"
              error={errors.firstName}
              register={register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters"
                }
              })}
            />

            {/* Last Name */}
            <InputField
              label="Last Name"
              error={errors.lastName}
              register={register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters"
                }
              })}
            />

            {/* Email */}
            <InputField
              label="Email"
              type="email"
              readOnly
              error={errors.email}
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address"
                }
              })}
              defaultValue={user?.email || ""}
            />

            {/* Phone */}
            <InputField
              label="Phone Number"
              type="tel"
              error={errors.phone}
              register={register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits"
                }
              })}
            />

            {/* DOB */}
            <InputField
              label="Date of Birth"
              type="date"
              error={errors.dob}
              register={register("dob", {
                required: "Date of birth is required"
              })}
            />

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Gender
              </label>

              <select
                {...register("gender", {})}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              {errors.gender && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Blood Group */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Blood Group
              </label>

              <select
                {...register("bloodGroup", {})}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

              {errors.bloodGroup && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.bloodGroup.message}
                </p>
              )}
            </div>

            {/* Emergency Contact */}
            <InputField
              label="Emergency Contact"
              type="tel"
              error={errors.emergencyContact}
              register={register("emergencyContact", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be exactly 10 digits"
                }
              })}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Address
            </label>

            <textarea
              rows="4"
              {...register("address", {})}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />

            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200 shadow-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const InputField = ({ label, type = "text", register, error, defaultValue }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-slate-700">
      {label}
    </label>

    <input
      type={type}
      {...register}
      defaultValue={defaultValue}
      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
    />

    {error && (
      <p className="mt-1 text-sm text-red-500">
        {error.message}
      </p>
    )}
  </div>
);

export default CompleteProfile;