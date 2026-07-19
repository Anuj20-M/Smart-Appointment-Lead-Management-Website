import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialization: "General Physician" },
    { id: 2, name: "Dr. Michael Smith", specialization: "Cardiologist" },
    { id: 3, name: "Dr. Emily Davis", specialization: "Pediatrician" },
  ];

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ];

  // Track selected time for UI feedback
  const [selectedTime, setSelectedTime] = useState("");

  const onSubmit = (data) => {
    // Show success toast immediately
    toast.success("Appointment booked successfully!", {
      position: "top-center",
    });

    // Reset form and time selection
    reset();
    setSelectedTime("");
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Book Appointment
              </h1>
              <p className="text-gray-600">
                Choose your preferred doctor, date, and time
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Doctor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("doctorId", {
                    required: "Select a doctor",
                    validate: (value) => {
                      if (!value) return "Select a doctor";
                      const validIds = doctors.map((d) => d.id);
                      return (
                        validIds.includes(Number(value)) ||
                        "Select a valid doctor"
                      );
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      Dr. {doctor.name} - {doctor.specialization}
                    </option>
                  ))}
                </select>
                {errors.doctorId && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.doctorId.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  {...register("date", {
                    required: "Select a date",
                    validate: (value) => {
                      if (!value) return "Select a date";
                      const selected = new Date(value);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return selected >= today || "Select today or future date";
                    },
                  })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.date.message}
                  </p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        {...register("time", {
                          required: "Select a time",
                        })}
                        className="hidden peer"
                        checked={selectedTime === time}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                      <span
                        className={`inline-flex items-center justify-center px-3 py-2 border rounded-md text-sm font-medium
                      ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }
                      transition-all duration-200
                      `}
                      >
                        {time}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.time.message}
                  </p>
                )}
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("reason", {
                    required: "Describe your reason",
                    minLength: {
                      value: 10,
                      message: "At least 10 characters",
                    },
                  })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.reason.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                >
                  {isSubmitting ? "Booking..." : "Confirm Appointment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
