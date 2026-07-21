// Notification.jsx – displays a list of informational notifications
// Tailwind & design tokens from clinic-management/Desing.md are used
// Mock data is provided; replace with real API data when available


// Simple relative‑time formatter (no external deps)
function formatRelative(date) {
  const diff = Date.now() - date.getTime();
  const seconds = Math.round(diff / 1000);
  const units = [
    { limit: 60, value: seconds, name: "second" },
    { limit: 60 * 60, value: Math.round(seconds / 60), name: "minute" },
    { limit: 24 * 60 * 60, value: Math.round(seconds / 3600), name: "hour" },
    { limit: 30 * 24 * 60 * 60, value: Math.round(seconds / 86400), name: "day" },
    { limit: Infinity, value: Math.round(seconds / 2592000), name: "month" },
  ];
  for (const { limit, value, name } of units) {
    if (value < limit) {
      const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
      return rtf.format(-value, name);
    }
  }
  return "";
}

// Mock notifications – replace with real data later
const mockNotifications = [
  {
    id: "n1",
    type: "confirmed",
    title: "Appointment Confirmed",
    message: "Your appointment with Dr. Sarah Johnson has been confirmed.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: "n2",
    type: "cancelled",
    title: "Appointment Cancelled",
    message: "Your appointment scheduled for 24 July has been cancelled.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
];

// Small presentational component for a single notification
function NotificationItem({ notification }) {
  const stripeColor =
    notification.type === "confirmed" ? "bg-primary" : "bg-error";
  return (
    <div className="flex items-start space-x-3 bg-white rounded-lg shadow-sm p-4">
      <div className={`${stripeColor} w-1 rounded`}></div>
      <div className="flex-1">
        <h3 className="text-body-lg font-semibold text-on-surface">
          {notification.title}
        </h3>
        <p className="text-body-md text-on-surface-variant mt-1">
          {notification.message}
        </p>
        <time className="text-caption text-on-surface-variant mt-2 block">
          {formatRelative(notification.timestamp)}
        </time>
      </div>
    </div>
  );
}

export default function Notification() {
  // In production replace mockNotifications with fetched data
  const notifications = mockNotifications;

  return (
    <section className="space-y-4">
      {notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} />
      ))}
    </section>
  );
}
