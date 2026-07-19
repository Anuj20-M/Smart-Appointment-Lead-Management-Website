import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/public_pages/Home";
import Auth from "./Pages/public_pages/Auth";

import CompleteProfile from "./Pages/patient_pages/CompleteProfilePage";
import BookAppointmentPage from "./Pages/patient_pages/BookAppointmentPage";
import MyAppointmentsPage from "./Pages/patient_pages/MyAppointmentsPage";
import MyProfile from "./Pages/patient_pages/MyProfile";
import Notification from "./Pages/patient_pages/Notification";

import Dashboard from "./Pages/Admin_pages/Dashboard";
import Appointments from "./Pages/Admin_pages/Appointments";
import Patients from "./Pages/Admin_pages/Patients";
import Doctors from "./Pages/Admin_pages/Doctors";
import History from "./Pages/Admin_pages/History";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* Patient */}
        <Route
          path="/completeProfile"
          element={
            <ProtectedRoute>
              <CompleteProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookAppointment"
          element={
            <ProtectedRoute>
              <BookAppointmentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <MyAppointmentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/doctors" element={<Doctors />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
