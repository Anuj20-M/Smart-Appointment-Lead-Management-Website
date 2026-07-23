import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f7f9fc]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;