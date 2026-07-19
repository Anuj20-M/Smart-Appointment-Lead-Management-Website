import {
  Stethoscope,
  UserRound,
  CalendarCheck,
  Syringe,
  ClipboardList,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: UserRound,
      title: "General Checkup",
      description:
        "Routine health examinations and preventive care for every age.",
    },
    {
      icon: Stethoscope,
      title: "Specialist Consultation",
      description:
        "Consult experienced specialists for personalized treatment.",
    },
    {
      icon: CalendarCheck,
      title: "Easy Appointment",
      description: "Book appointments online in just a few clicks.",
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description:
        "Safe and timely immunization services for children and adults.",
    },
    {
      icon: ClipboardList,
      title: "Follow-up Care",
      description: "Regular follow-up visits to monitor your recovery.",
    },
    {
      icon: HeartPulse,
      title: "Health Guidance",
      description: "Professional advice to help maintain a healthy lifestyle.",
    },
  ];

  return (
    <section id="services" className="bg-[#f7f9fc] py-10 px-6 lg:px-10">
      <div className="max-w-full mx-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#2563EB] font-medium uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#191c1e]">
            Our Medical Services
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#64748B] text-lg">
            Quality healthcare for you and your family with trusted medical
            professionals and modern facilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition">
                  <Icon
                    size={28}
                    className="text-[#2563EB] group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#191c1e] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#64748B] leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/BookAppointment" className="px-8 py-3 rounded-lg bg-[#2563EB] text-white font-medium hover:bg-[#1d4ed8] transition">
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
