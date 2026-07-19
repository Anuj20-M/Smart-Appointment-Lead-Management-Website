import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/public_pages/Home";
import Auth from "./Pages/public_pages/Auth";

import CompleteProfile from "./Pages/patient_pages/CompleteProfile";
import BookAppointment from "./Pages/patient_pages/BookAppointment";
import MyAppointments from "./Pages/patient_pages/MyAppointments";
import MyProfile from "./Pages/patient_pages/MyProfile";

import Dashboard from "./Pages/Admin_pages/Dashboard";
import Appointments from "./Pages/Admin_pages/Appointments";
import Patients from "./Pages/Admin_pages/Patients";
import Doctors from "./Pages/Admin_pages/Doctors";
import History from "./Pages/Admin_pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Patient */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/completeProfile" element={<CompleteProfile />} />

        <Route
          path="/BookAppointment"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route path="/Profile" element={<MyProfile />} />
        <Route path="/appointments" element={<MyAppointments />} />

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
