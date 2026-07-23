// Dashboard Page – admin view
// Implements the required sections using mock data from AdminMockData.js

import { Users, CalendarDays, Clock3, CheckCircle2 } from "lucide-react";
import { dashboardStats } from "../../data/AdminMockData";
import StatCard from "../../components/admin/StatCard";

import UpcomingTable from "../../components/admin/UpcomingTable";

import QuickActions from "../../components/admin/QuickActions";

const Dashboard = () => {
  return (
    <div className="space-y-6 font-inter">
      {/* Heading */}
      <header className="px-4 py-2">
        <h1 className="text-2xl font-semibold">
          Welcome back, Receptionist 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here's an overview of today's clinic activity.
        </p>
      </header>

      {/* Statistics cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            Icon={
              stat.icon === "Users"
                ? Users
                : stat.icon === "CalendarDays"
                  ? CalendarDays
                  : stat.icon === "Clock3"
                    ? Clock3
                    : CheckCircle2
            }
          />
        ))}
      </section>

      {/* Upcoming appointments */}
      <section className="px-4">
        <h2 className="text-xl font-medium mb-2">Upcoming Appointments</h2>
        <UpcomingTable />
      </section>

      {/* Quick actions */}
      <section className="px-4">
        <h2 className="text-xl font-medium mb-2">Quick Actions</h2>
        <QuickActions />
      </section>
    </div>
  );
};

export default Dashboard;
