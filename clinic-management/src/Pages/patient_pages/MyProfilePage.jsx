import { useContext } from "react";

import Navbar from "../../components/public/Navbar";
import AuthContext from "../../context-API/AuthContext";

import Profile from "@/components/patient/profile";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-slate-600">Loading profile…</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">
      <Navbar />
      <Profile />
    </section>
  );
};

export default MyProfile;
