// AdminHeader.jsx – reusable header for admin pages
// Uses shadcn/ui components and AdminSidebar for mobile drawer

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";


// Route → title mapping
const titleMap = {
  "/admin/dashboard": "Dashboard",
  "/admin/appointments": "Appointments",
  "/admin/patients": "Patients",
  "/admin/doctors": "Doctors",
  "/admin/history": "History",
};

export default function AdminHeader() {
  const { pathname } = useLocation();
  const pageTitle = titleMap[pathname] ?? "Admin";

  return (
    <>
      <header className="bg-white border-b h-16 px-6 flex items-center justify-between sticky top-0 z-20">
        {/* Left – hamburger (mobile) & title */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={20} />
          </Button>
          <h1 className="text-xl font-medium text-gray-900">{pageTitle}</h1>
        </div>

        {/* Right – notifications & avatar menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Avatar className="size-8">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onSelect={() => {}}>Profile</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
