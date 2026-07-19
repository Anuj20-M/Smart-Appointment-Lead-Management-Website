import DoctorImg from "../../assets/imges/image.png";
import { Link } from "react-router-dom";



const HeroSection = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-full px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex px-2 py- rounded-full bg-blue-100 text-[#004ac6] text-sm font-medium mb-3">
              Trusted Healthcare Platform
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight tracking-tight text-[#191c1e] mb-6">
              Quality Healthcare,
              <br />
              <span className="text-blue-600">Simplified For You</span>
            </h1>

            <p className="text-lg leading-8 text-[#434655] max-w-xl mb-8">
              Smart Clinic connects you with experienced doctors and makes
              booking appointments simple, fast, and stress-free.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/BookAppointment"
                className="px-7 py-3 rounded-lg bg-[#2563eb] text-white font-medium hover:bg-[#004ac6] transition"
              >
                Book Appointment
              </Link>

              <a
                href="#about"
                className="px-7 py-3 rounded-lg border border-[#2563eb] text-[#2563eb] font-medium hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>

            {/* Trust Info */}
            <div className="flex gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold">50+</h3>
                <p className="text-sm text-[#64748b]">Specialist Doctors</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">10K+</h3>
                <p className="text-sm text-[#64748b]">Patients Served</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">24/7</h3>
                <p className="text-sm text-[#64748b]">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image / Illustration */}
          <div className="">
            <div className="bg-white rounded-3xl p-4 lg:p- shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative ">
              <img
                src={DoctorImg}
                alt="Doctor consultation"
                className="w-full object-cover"
              />
              {/* Floating Appointment Card */}
              <div className="absolute bottom-2 left-2 bg-white rounded-xl px-5 py-4 shadow-lg">
                <p className="text-sm text-[#64748b]">Available Today</p>
                <p className="font-semibold text-[#006242]">
                  10:30 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
