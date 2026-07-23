// Patients Page – admin view
// Implements patient listing, search, and profile dialog using mock data.

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, Eye } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/admin/Appointment/StatusBadge";
import { recentPatients, appointments } from "@/data/AdminMockData";

// Helper to generate a fake email from a name (lazy placeholder)

const PatientsPage = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // Filter patients by name – case‑insensitive
  const filtered = useMemo(
    () =>
      recentPatients.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  // Find appointments for the selected patient (simple match on name)
  const patientAppts = useMemo(
    () =>
      selected ? appointments.filter((a) => a.patient === selected.name) : [],
    [selected],
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Patients</h1>

        <p className="text-muted-foreground">
          View registered patients and their Recent Appointments.
        </p>
      </header>
      {/* className="max-w-sm rounded border px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary" */}

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

        <Input
          className="pl-9"
          placeholder="Search patient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-150 text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-2 font-medium">Patient</th>
              <th className="p-2 font-medium">Age</th>
              <th className="p-2 font-medium">Phone</th>
              <th className="p-2 font-medium">Email</th>
              <th className="p-2 font-medium">Last Visit</th>
              <th className="p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? (
              filtered.map((p) => (
                <tr
                  key={p.id}
                  className="border-t last:border-b hover:bg-muted/40 transition-colors"
                >
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                        {p.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <span className="font-medium">{p.name}</span>
                    </div>
                  </td>
                  <td className="p-2">{p.age}</td>
                  <td className="p-2">{p.phone}</td>
                  <td className="p-2 text-gray-600">{p.email}</td>
                  <td className="p-2">{p.lastVisit}</td>
                  <td className="p-2">
                    <Dialog
                      open={selected?.id === p.id}
                      onOpenChange={(open) => {
                        if (!open) setSelected(null);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelected(p)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>{p.name} – Profile</DialogTitle>
                          <DialogDescription>
                            Patient details and Recent Appointments.
                          </DialogDescription>
                        </DialogHeader>

                        {/* Avatar & basic info */}
                        <div className="flex items-center gap-4 py-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-semibold">
                            {p.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium">{p.name}</p>
                            <p className="text-sm text-gray-600">{p.email}</p>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <p className="text-muted-foreground">Email</p>
                          <p>{p.email}</p>

                          <p className="text-muted-foreground">Phone</p>
                          <p>{p.phone}</p>

                          <p className="text-muted-foreground">Age</p>
                          <p>{p.age}</p>

                          <p className="text-muted-foreground">Gender</p>
                          <p>{p.gender}</p>
                        </div>

                        {/* Recent Appointments */}
                        <h3 className="mt-4 text-base font-medium">
                          Recent Appointments
                        </h3>
                        {patientAppts.length ? (
                          <table className="w-full mt-2 text-left text-sm">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="p-1">Date</th>
                                <th className="p-1">Doctor</th>
                                <th className="p-1">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {patientAppts.map((a) => (
                                <tr key={a.id} className="border-t">
                                  <td className="p-1">{a.date}</td>
                                  <td className="p-1">{a.doctor}</td>
                                  <td className="p-1">
                                    <StatusBadge status={a.status} />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <p className="text-gray-500 text-sm mt-2">
                            No appointments found.
                          </p>
                        )}

                        <DialogClose asChild>
                          <Button variant="outline" className="mt-4 w-full">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No patients match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PatientsPage;
