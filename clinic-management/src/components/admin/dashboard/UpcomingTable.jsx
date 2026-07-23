// Dashboard Page – admin view
// Implements the required sections using mock data from AdminMockData.js

import { upcomingAppointments } from "../../../data/AdminMockData";

const UpcomingTable = () => (
  <div className="overflow-x-auto rounded-lg border">
    <table className="w-full min-w-150 text-left text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 font-medium">Patient</th>
          <th className="p-2 font-medium">Doctor</th>
          <th className="p-2 font-medium">Time</th>
          <th className="p-2 font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {upcomingAppointments.map((appt) => (
          <tr key={appt.id} className="border-t last:border-b">
            <td className="p-2">{appt.patient}</td>
            <td className="p-2">{appt.doctor}</td>
            <td className="p-2">{appt.time}</td>
            <td className="p-2">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium
                  ${appt.status === "Confirmed" ? "bg-emerald-100 text-emerald-800" : "bg-yellow-100 text-yellow-800"}`}
              >
                {appt.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UpcomingTable;
