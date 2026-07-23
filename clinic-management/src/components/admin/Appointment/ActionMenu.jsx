// src/components/admin/ActionMenu.jsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default function ActionMenu({
  onView,
  onConfirm,
  onComplete,
  onCancel,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1 hover:bg-muted rounded">
          <MoreHorizontal size={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onSelect={onView}>View Details</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onConfirm}>
          Confirm Appointment
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={onComplete}>
          Mark as Completed
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={onCancel}>
          Cancel Appointment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
