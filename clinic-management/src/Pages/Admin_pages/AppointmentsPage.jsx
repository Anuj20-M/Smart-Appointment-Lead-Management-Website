// clinic-management/src/Pages/Admin_pages/AppointmentsPage.jsx
import { useState, useMemo } from "react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import StatusBadge from "../../components/admin/StatusBadge";
import ActionMenu from "../../components/admin/ActionMenu";
import { appointments as mockAppointments } from "../../data/AdminMockData";

const doctors = ["All", "Dr. Sarah", "Dr. David", "Dr. Emily"];
const statuses = ["All", "Pending", "Confirmed", "Completed", "Cancelled"];
const dates = ["All", "Today", "Tomorrow", "Upcoming"];

const AppointmentsPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [doctor, setDoctor] = useState("All");
  const [date, setDate] = useState("All");

  // simple client‑side filter
  const filtered = useMemo(() => {
    return mockAppointments.filter((a) => {
      const matchesPatient = a.patient
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesStatus =
        status === "All" || a.status.toLowerCase() === status.toLowerCase();
      const matchesDoctor =
        doctor === "All" || a.doctor.toLowerCase() === doctor.toLowerCase();
      const matchesDate = (() => {
        if (date === "All") return true;
        const today = new Date().toISOString().slice(0, 10);
        const tomorrow = new Date(Date.now() + 86400000)
          .toISOString()
          .slice(0, 10);
        const appointmentDate =
          typeof a.date === "string"
            ? a.date
            : new Date(a.date).toISOString().slice(0, 10);
        if (date === "Today") return appointmentDate === today;
        if (date === "Tomorrow") return appointmentDate === tomorrow;
        // "Upcoming" = any date >= today
        return appointmentDate >= today;
      })();

      return matchesPatient && matchesStatus && matchesDoctor && matchesDate;
    });
  }, [search, status, doctor, date]);

  // placeholder action handlers – replace with API calls later
  const handleView = (id) => console.log("view", id);
  const handleConfirm = (id) => console.log("confirm", id);
  const handleComplete = (id) => console.log("complete", id);
  const handleCancel = (id) => console.log("cancel", id);

  return (
    <div className="min-h-screen bg-[#f7f9fc] p-6 lg:p-8 space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Appointments
        </h1>

        <p className="text-slate-500 text-sm">
          Manage, confirm and monitor clinic appointments.
        </p>
      </header>

      {/* Filters Card */}
      <Card className="border-0 shadow-sm rounded-xl bg-white">
        <CardContent className="grid grid-cols-1 gap-4 py-1 px-4 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto_auto] items-center">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              placeholder="Search patient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 pl-10 rounded-lg border-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full lg:w-44 h-11 rounded-lg border-slate-200">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={doctor} onValueChange={setDoctor}>
            <SelectTrigger className="w-full lg:w-44 h-11 rounded-lg border-slate-200">
              <SelectValue placeholder="Doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={date} onValueChange={setDate}>
            <SelectTrigger className="w-full lg:w-44 h-11 rounded-lg border-slate-200">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              {dates.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="w-full lg:w-auto h-11 rounded-lg border-slate-300 hover:bg-slate-100"
            onClick={() => {
              setSearch("");
              setStatus("All");
              setDoctor("All");
              setDate("All");
            }}
          >
            Reset
          </Button>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Patient
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Doctor
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Reason
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <span className="font-medium text-slate-900">
                      {a.patient}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-slate-700">{a.doctor}</span>
                  </td>
                  <td className="px-6 py-5 text-slate-700">{a.date}</td>
                  <td className="px-6 py-5 text-slate-700">{a.time}</td>
                  <td className="px-6 py-5 max-w-55 truncate">{a.reason}</td>
                  <td className="px-6 py-5 text-slate-700">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="px-6 py-5 text-center text-slate-700">
                    <ActionMenu
                      onView={() => handleView(a.id)}
                      onConfirm={() => handleConfirm(a.id)}
                      onComplete={() => handleComplete(a.id)}
                      onCancel={() => handleCancel(a.id)}
                    />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-slate-700">
                        No appointments found
                      </p>
                      <p className="text-sm text-slate-500">
                        Try adjusting your search or filters.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
export default AppointmentsPage;
