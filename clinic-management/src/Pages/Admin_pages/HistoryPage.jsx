// HistoryPage.jsx – read‑only view of past appointments (Completed & Cancelled)

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

import StatusBadge from "../../components/admin/Appointment/StatusBadge";
import { appointments as mockAppointments } from "../../data/AdminMockData";

// Unique doctors list for filter (prepend "All")
const doctors = [
  "All",
  ...Array.from(new Set(mockAppointments.map((a) => a.doctor))),
];

const HistoryPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All"); // All | Completed | Cancelled
  const [doctor, setDoctor] = useState("All");

  // Only keep Completed or Cancelled appointments
  const historyAppointments = useMemo(
    () =>
      mockAppointments.filter(
        (a) => a.status === "Completed" || a.status === "Cancelled",
      ),
    [],
  );

  // Client‑side filter (case‑insensitive)
  const filtered = useMemo(() => {
    return historyAppointments.filter((a) => {
      const matchesPatient = a.patient
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesStatus =
        status === "All" || a.status.toLowerCase() === status.toLowerCase();
      const matchesDoctor =
        doctor === "All" || a.doctor.toLowerCase() === doctor.toLowerCase();
      return matchesPatient && matchesStatus && matchesDoctor;
    });
  }, [search, status, doctor, historyAppointments]);

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setDoctor("All");
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          History
        </h1>
        <p className="text-slate-500 text-sm">
          View completed and cancelled appointments.
        </p>
      </header>

      {/* Filters */}
      <Card className="border-0 shadow-sm rounded-xl bg-white">
        <CardContent className="grid grid-cols-1 gap-4 py-1 px-4 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] items-center">
          {/* Search input */}
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

          {/* Status filter */}
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full lg:w-44 h-11 rounded-lg border-slate-200">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {["All", "Completed", "Cancelled"].map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Doctor filter */}
          <Select value={doctor} onValueChange={setDoctor}>
            <SelectTrigger className="w-full lg:w-44 h-11 rounded-lg border-slate-200">
              <SelectValue placeholder="Doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Reset button */}
          <Button
            variant="outline"
            className="w-full lg:w-auto h-11 rounded-lg border-slate-300 hover:bg-slate-100"
            onClick={resetFilters}
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
                  Status
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
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-16 text-center">
                    <div className="space-y-2">
                      <p className="text-2xl" aria-label="calendar">
                        📅
                      </p>
                      <p className="text-lg font-medium text-slate-700">
                        No history found.
                      </p>
                      <p className="text-sm text-slate-500">
                        Try changing your search or filters.
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

export default HistoryPage;
