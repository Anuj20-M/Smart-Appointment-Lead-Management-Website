import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  CircleOff,
  MoreHorizontal,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";
import { doctors as mockDoctors } from "@/data/AdminMockData";

// Helper: days of week
const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let nextId = 0;

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState(mockDoctors);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDoctor, setEditDoctor] = useState(null); // null => add mode
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = useMemo(
    () =>
      doctors.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, doctors],
  );

  // Form handling – reuse for add & edit
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      specialization: "",
      phone: "",
      email: "",
      workingDays: [],
      startTime: "",
      endTime: "",
      status: "Active",
    },
  });

    const onSubmit = (data) => {
    if (editDoctor) {
      // edit existing
      setDoctors((prev) =>
        prev.map((d) => (d.id === editDoctor.id ? { ...d, ...data } : d)),
      );
    } else {
      // add new – generate simple id
      const newDoc = {
        id: nextId++,
        ...data,
      };
      setDoctors((prev) => [...prev, newDoc]);
    }
    setDialogOpen(false);
    setEditDoctor(null);
    reset();
  };

  const openAdd = () => {
    reset({
      name: "",
      specialization: "",
      phone: "",
      email: "",
      workingDays: [],
      startTime: "",
      endTime: "",
      status: "Active",
    });
    setEditDoctor(null);
    setDialogOpen(true);
  };

  const openEdit = (doc) => {
    setEditDoctor(doc);
    reset({
      name: doc.name || "",
      specialization: doc.specialization || "",
      phone: doc.phone || "",
      email: doc.email || "",
      workingDays: doc.workingDays || [],
      startTime: doc.startTime || "",
      endTime: doc.endTime || "",
      status: doc.status || "Active",
    });
    setDialogOpen(true);
  };

  const toggleStatus = (doc) => {
    setDoctors((prev) =>
      prev.map((d) =>
        d.id === doc.id
          ? { ...d, status: d.status === "Active" ? "Inactive" : "Active" }
          : d,
      ),
    );
  };

  const confirmDelete = (doc) => {
    setDeleteTarget(doc);
  };

  const performDelete = () => {
    if (deleteTarget) {
      setDoctors((prev) => prev.filter((d) => d.id !== deleteTarget.id));
      setDeleteTarget(null);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Doctors</h1>
        <p className="text-muted-foreground">
          Manage clinic doctors and their schedules.
        </p>
      </header>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <Button variant="default" onClick={openAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Doctor
        </Button>
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-150 text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-2 font-medium">Doctor</th>
              <th className="p-2 font-medium">Specialization</th>
              <th className="p-2 font-medium">Working Days</th>
              <th className="p-2 font-medium">Available Time</th>
              <th className="p-2 font-medium">Status</th>
              <th className="p-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? (
              filtered.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t last:border-b hover:bg-muted/40 transition-colors"
                >
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                        {doc.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium">{doc.name}</span>
                    </div>
                  </td>
                  <td className="p-2">{doc.specialization}</td>
                  <td className="p-2">{doc.workingDays?.join(", ") || "-"}</td>
                  <td className="p-2">
                    {doc.startTime && doc.endTime
                      ? `${doc.startTime} - ${doc.endTime}`
                      : "-"}
                  </td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-0.5 rounded ${doc.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {" "}
                      {doc.status}{" "}
                    </span>
                  </td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onSelect={() => openEdit(doc)}>
                          <Edit className="mr-2 h-3 w-3" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => toggleStatus(doc)}>
                          {doc.status === "Active" ? (
                            <CircleOff className="mr-2 h-3 w-3" />
                          ) : (
                            <Check className="mr-2 h-3 w-3" />
                          )}
                          {doc.status === "Active" ? "Deactivate" : "Activate"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => confirmDelete(doc)}>
                          <Trash2 className="mr-2 h-3 w-3" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No doctors match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Dialog */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setEditDoctor(null);
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editDoctor ? "Edit Doctor" : "Add Doctor"}
            </DialogTitle>
            <DialogDescription>
              {editDoctor
                ? "Modify doctor details."
                : "Enter new doctor information."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Doctor Name
                </label>
                <Input
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Specialization
                </label>
                <Input
                  {...register("specialization", {
                    required: "Specialization is required",
                  })}
                />
                {errors.specialization && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.specialization.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input {...register("phone")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start Time
                </label>
                <Input
                  {...register("startTime")}
                  placeholder="09:00 AM"
                  type="time"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End Time
                </label>
                <Input
                  {...register("endTime")}
                  placeholder="05:00 PM"
                  type="time"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Working Days
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {ALL_DAYS.map((day) => (
                  <Controller
                    key={day}
                    name="workingDays"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value?.includes(day)}
                          onCheckedChange={(checked) => {
                            const newVal = checked
                              ? [...(field.value || []), day]
                              : (field.value || []).filter((d) => d !== day);
                            field.onChange(newVal);
                          }}
                        />
                        <span className="text-sm">{day}</span>
                      </label>
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">{editDoctor ? "Save" : "Add"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Doctor</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {deleteTarget?.name}? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={performDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Doctors;
