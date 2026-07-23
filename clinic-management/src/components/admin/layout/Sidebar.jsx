import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Stethoscope,
  History,
  LogOut,
  Hospital,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Navigation data – keep in sync with your routing config
const menuItems = [
  { title: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Appointments", path: "/admin/appointments", icon: CalendarDays },
  { title: "Patients", path: "/admin/patients", icon: Users },
  { title: "Doctors", path: "/admin/doctors", icon: Stethoscope },
  { title: "History", path: "/admin/history", icon: History },
];

/**
 * AdminSidebar – responsive three‑section layout.
 *   • Brand (logo + title) sticks to the top.
 *   • Navigation – links with active state.
 *   • User section – mock avatar, username, logout button.
 *
 * Visible on medium screens and up (`md:flex`). Hidden on smaller screens—
 * you can later wrap it in a Drawer for mobile.
 */
import { useState, useEffect } from "react";

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("adminSidebarCollapsed");
    return saved === "true";
  });

  // Persist collapsed state
  useEffect(() => {
    localStorage.setItem("adminSidebarCollapsed", collapsed);
  }, [collapsed]);
  return (
    <aside
      className={`hidden md:flex flex-col h-screen ${collapsed ? "w-20" : "w-64"} bg-white border-r p-4`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between gap-2 mb-8">
        <div className="flex items-center gap-2">
          <Hospital size={24} className="text-blue-600" />
          {!collapsed && (
            <span className="text-xl font-bold text-blue-600">
              Smart Clinic
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-200"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg p-2 transition-all duration-200
               ${isActive ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50"}`
            }
          >
            <item.icon size={20} className="text-current" />
            {!collapsed && <span className="font-medium">{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User section – sticks to bottom */}
      <div className="mt-auto flex flex-col items-start space-y-2">
        {/* Mock avatar + name */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-300" />
          {/* Show name only when expanded */}
          {!collapsed && (
            <span className="font-medium text-slate-700">Admin</span>
          )}
        </div>
        {/* Logout button – placeholder, no handler yet */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-2 text-slate-700 hover:bg-blue-50 transition-all duration-200"
        >
          <LogOut size={18} />
          {/* Show label only when expanded */}
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}
