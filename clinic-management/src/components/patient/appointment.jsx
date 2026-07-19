import { useState } from "react";
import { Calendar, Clock, CircleX } from "lucide-react";
import { toast } from "sonner";

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Mock data as specified in requirements
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Jenkins",
      specialization: "General Practitioner",
      image: "https://i.pravatar.cc/150?img=32",
      date: "Oct 24, 2024",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. David Chen",
      specialization: "Internal Medicine",
      image: "https://i.pravatar.cc/150?img=12",
      date: "Nov 05, 2024",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. David Chen",
      specialization: "Internal Medicine",
      image: "https://i.pravatar.cc/150?img=12",
      date: "Nov 05, 2024",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: 4,
      doctor: "Dr. Emily Wilson",
      specialization: "Cardiologist",
      image: "https://i.pravatar.cc/150?img=44",
      date: "Sep 12, 2024",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: 5,
      doctor: "Dr. Michael Brown",
      specialization: "Dermatologist",
      image: "https://i.pravatar.cc/150?img=15",
      date: "Aug 18, 2024",
      time: "9:00 AM",
      status: "Cancelled",
    },
  ];

  // Filter appointments based on active tab and status
  // Upcoming: Pending or Confirmed | History: Completed or Cancelled
  const filteredAppointments = appointments.filter((appointment) => {
    const isUpcoming =
      appointment.status === "Pending" || appointment.status === "Confirmed";
    return activeTab === "upcoming" ? isUpcoming : !isUpcoming;
  });

  // Helper function to get status badge class
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Handle cancel appointment with sonner toast
  const handleCancel = () => {
    // In a real app, this would make an API call
    // For now, we'll show a success toast
    toast.success("Appointment cancelled successfully!", {
      position: "bottom-right",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-100 rounded-3xl mt-10">
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">My Appointments</h1>
          <p className="mt-1 text-slate-600">
            Manage your upcoming visits and view history.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center border-slate-200 ">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white px-4 py-2 rounded-full"
                : "text-slate-500 hover:text-blue-600 px-4 py-2 rounded-full"
            }
            transition-colors duration-200`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`${
              activeTab === "history"
                ? "bg-blue-600 text-white px-4 py-2 rounded-full"
                : "text-slate-500 hover:text-blue-600 px-4 py-2 rounded-full"
            }
            transition-colors duration-200`}
          >
            History
          </button>
        </div>
      </div>

      {/* Appointments List or Empty State */}
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="mx-auto h-12 w-12 text-slate-400 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            No {activeTab === "upcoming" ? "Upcoming" : "Past"} Appointments
          </h2>
          <p className="text-slate-600 mb-6">
            You don't have any appointments yet.
          </p>
          <a
            href="/BookAppointment"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl shadow border border-slate-100"
            >
              <div className="flex items-start p-3">
                {/* Left Side */}
                <div className="shrink-0">
                  <img
                    src={appointment.image}
                    alt={`${appointment.doctor}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Right Side Content */}
                <div className="flex-1 ml-4">
                  <div className="mb-1">
                    <h3 className="font-semibold text-slate-900">
                      {appointment.doctor}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {appointment.specialization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    {/* Date Chip */}
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>{appointment.date}</span>
                    </div>

                    {/* Time Chip */}
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-sm">
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(appointment.status)}`}
                  >
                    {appointment.status}
                  </div>
                </div>

                {activeTab === "upcoming" && (
                  <div className="shrink-0 mt-2">
                    <button
                      onClick={handleCancel}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded hover:bg-red-50"
                    >
                      <CircleX className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
