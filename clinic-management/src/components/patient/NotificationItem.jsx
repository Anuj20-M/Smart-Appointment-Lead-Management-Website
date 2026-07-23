// notification.jsx – patient‑side notification list
// Tailwind & design tokens from clinic-management/Desing.md are used
// Minimal mock data; replace with real API later

import { CheckCircle, XCircle, Clock, Bell } from "lucide-react";
// Simple relative‑time formatter (no external deps)
const formatRelative = (date) => {
  const diff = Date.now() - date.getTime();
  const seconds = Math.round(diff / 1000);
  const units = [
    { limit: 60, value: seconds, name: "second" },
    { limit: 60 * 60, value: Math.round(seconds / 60), name: "minute" },
    { limit: 24 * 60 * 60, value: Math.round(seconds / 3600), name: "hour" },
    {
      limit: 30 * 24 * 60 * 60,
      value: Math.round(seconds / 86400),
      name: "day",
    },
    { limit: Infinity, value: Math.round(seconds / 2592000), name: "month" },
  ];
  for (const { limit, value, name } of units) {
    if (value < limit) {
      const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
      return rtf.format(-value, name);
    }
  }
  return "";
};

// Mock notifications – replace with real data later


// Map status to icon & badge colors
const statusMap = {
  confirmed: {
    icon: CheckCircle,
    color: "bg-tertiary/10 text-tertiary",
  },
  cancelled: {
    icon: XCircle,
    color: "bg-error-container text-error",
  },
  pending: {
    icon: Clock,
    color: "bg-primary/10 text-primary",
  },
  general: {
    icon: Bell,
    color: "bg-secondary-container text-secondary",
  },
};

const NotificationItem = ({ notification }) => {
  const { icon: Icon, color } =
    statusMap[notification.status] || statusMap.general;
  return (
    <div className="group flex items-start gap-5 rounded-xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${color}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-lg font-semibold text-on-surface">
            {notification.title}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium    capitalize ${color}`}
          >
            {notification.status}
          </span>
        </div>
        <p className="text-body-md text-on-surface-variant mt-2 leading-7">
          {notification.message}
        </p>
        <time className="mt-4 block text-caption text-outline">
          {formatRelative(notification.timestamp)}
        </time>
      </div>
    </div>
  );
};

export default NotificationItem;
