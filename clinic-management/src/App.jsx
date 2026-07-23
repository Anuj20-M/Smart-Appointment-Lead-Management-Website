import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/public_pages/Home";
import Auth from "./Pages/public_pages/Auth";

import CompleteProfile from "./Pages/patient_pages/CompleteProfilePage";
import BookAppointmentPage from "./Pages/patient_pages/BookAppointmentPage";
import MyAppointmentsPage from "./Pages/patient_pages/MyAppointmentsPage";
import MyProfilePage from "./Pages/patient_pages/MyProfilePage";
import NotificationPage from "./Pages/patient_pages/NotificationPage";

import Dashboard from "./Pages/Admin_pages/DashboardPage";
import AdminLogInPage from "./Pages/Admin_pages/adminLogInPage";
import Appointments from "./Pages/Admin_pages/AppointmentsPage";
import Patients from "./Pages/Admin_pages/PatientsPage";
import Doctors from "./Pages/Admin_pages/DoctorsPage";
import History from "./Pages/Admin_pages/HistoryPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./components/admin/layout/Layout";

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
              <MyProfilePage />
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
              <NotificationPage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogInPage />} />
        {/* Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/appointments" element={<Appointments />} />
          <Route path="/admin/patients" element={<Patients />} />
          <Route path="/admin/doctors" element={<Doctors />} />
          <Route path="/admin/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
