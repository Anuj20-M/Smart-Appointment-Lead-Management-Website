// notification.jsx – patient‑side notification list
// Tailwind & design tokens from clinic-management/Desing.md are used
// Minimal mock data; replace with real API later

import { Bell } from "lucide-react";
import NotificationItem from "./NotificationItem";

const mockNotifications = [
  {
    id: "n1",
    category: "appointment",
    status: "confirmed",
    title: "Appointment Confirmed",
    message: "Your appointment with Dr. Sarah Johnson has been confirmed.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: "n2",
    category: "appointment",
    status: "cancelled",
    title: "Appointment Cancelled",
    message: "Your appointment scheduled for 24 July has been cancelled.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
];

// Map status to icon & badge colors

const Notification = () => {
  const notifications = mockNotifications;

  return (
    <section className="mx-auto max-w-5xl space-y-8 rounded-xl bg-background py-8">
      {/* Header */}
      <header className="space-y-2 pb-2">
        <h2 className="text-2xl font-bold text-on-surface">Notifications</h2>
        <p className="text-body-md text-on-surface-variant">
          Stay updated with your appointments and account activity.
        </p>
      </header>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl bg-surface-container-lowest p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <Bell className="mb-4 h-12 w-12 text-outline" />
          <p className="text-lg font-semibold text-on-surface">
            No notifications yet.
          </p>
          <p className="mt-2 max-w-sm text-body-md text-on-surface-variant">
            We'll notify you about appointment updates here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {notifications.map((n) => (
            <NotificationItem key={n.id} notification={n} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Notification;
