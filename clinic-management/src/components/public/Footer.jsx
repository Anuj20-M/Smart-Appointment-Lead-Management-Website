import { MapPin, Phone, Mail } from "lucide-react";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e6e8eb]">
      <div className="max-w-full lg:px-8 p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 my-5">
              <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-semibold">
                S
              </div>

              <h2 className="text-lg font-semibold text-[#004ac6]">
                Smart Clinic
              </h2>
            </div>

            <p className="text-[#434655] leading-7 text-sm max-w-xs">
              Providing trusted healthcare solutions with expert doctors, modern
              technology, and patient-focused care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#191c1e] mb-5">Quick Links</h3>

            <ul className="space-y-3 text-sm text-[#434655]">
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Patient Portal
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Doctors
                </a>
              </li>

              <li>
                <a href="#About" className="hover:text-[#2563eb]">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#191c1e] mb-5">Support</h3>

            <ul className="space-y-3 text-sm text-[#434655]">
              <li>Contact us</li>
              <li>Help Cennter</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#191c1e] mb-5">Contact</h3>

            <ul className="space-y-3 text-sm text-[#434655]">
              <li className="flex flex-row items-center gap-1">
                <MapPin size={14} strokeWidth={2} /> 123 Medical Street, City
              </li>

              <li className="flex flex-row items-center gap-1">
                <Phone size={14} strokeWidth={2} /> +91 98765 43210
              </li>

              <li className="flex flex-row items-center gap-1">
                <Mail size={14} strokeWidth={2} /> support@smartclinic.com
              </li>
            </ul>

            {/* Social Buttons */}
            <div className="flex gap-6 mt-5">
              <button className=" rounded-full bg-[#f2f4f7] text-[#2563eb] hover:bg-blue-100 ">
                <RiFacebookLine size={40} strokeWidth={2} className="p-2" />
              </button>

              <button className=" rounded-full bg-[#f2f4f7] text-[#2563eb] hover:bg-blue-100">
                <RiInstagramLine size={40} strokeWidth={2} className="p-2" />
              </button>

              <button className="rounded-full bg-[#f2f4f7] text-[#2563eb] hover:bg-blue-100">
                <RiTwitterXLine size={40} strokeWidth={2} className="p-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-[#e6e8eb] flex flex-col md:flex-row justify-between gap-4 text-sm text-[#737686]">
          <p>© {new Date().getFullYear()} Smart Clinic. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2563eb]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#2563eb]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
