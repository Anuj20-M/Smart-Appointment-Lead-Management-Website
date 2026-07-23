// src/components/admin/StatusBadge.jsx

import { Badge } from "../../ui/badge"; // re‑use the shadcn badge

// map status → Tailwind color classes (use the AdminDesign tokens where they exist)
const STATUS_COLORS = {
  Pending: "bg-amber-100 text-amber-800",
  Confirmed: "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const StatusBadge = ({ status }) => {
  const classes = STATUS_COLORS[status] ?? "bg-gray-100 text-gray-800";
  return <Badge className={`px-2 py-0.5 rounded ${classes}`}>{status}</Badge>;
};
export default StatusBadge;
