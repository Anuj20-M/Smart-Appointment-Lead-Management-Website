import { useState } from "react";
import { Link } from "react-router-dom";
import { Hospital, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-gray-200 bg-white shadow-sm">
      <div className=" flex h-15 max-w-full items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-2xl font-bold text-blue-600"
        >
          <span className="text-3xl">
            <Hospital size={32} />
          </span>
          <span>Smart Clinic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            to="/"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/#services"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            to="/#about"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/auth?mode=login"
            className="rounded-lg border border-blue-600 px-5 py-2.5 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Log In
          </Link>

          <Link
            to="/auth?mode=register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-slate-700 hover:bg-gray-100 md:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between shadow-md p-5">
          <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <Hospital size={28} />
            Smart Clinic
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex h-[calc(100vh-60px)] flex-col bg-white px-6 py-8">
          {/* Navigation Links */}
          <div className="space-y-5 ">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/#services"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              to="/#about"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              About
            </Link>
          </div>

          {/* Login/Register at Bottom */}
          <div className="mt-auto flex flex-col gap-3">
            <Link
              to="/auth?mode=login"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-blue-600 py-3 text-center font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Log In
            </Link>

            <Link
              to="/auth?mode=register"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
