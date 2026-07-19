import { MapPin, Clock3, Map } from "lucide-react";
import DoctorImg1 from "../../assets/imges/DoctorImg1.png";
import DoctorImg2 from "../../assets/imges/DoctorImg2.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialization: "Chief of Cardiology",
    image: { DoctorImg1 },
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Pediatric Specialist",
    image: { DoctorImg2 },
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#f7f9fc] py-10">
      <div className="max-w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold text-blue-700">
              Our Mission
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-gray-900">
              About Our Clinic
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Founded in 2018, Smart Clinic has been committed to providing
              compassionate, patient-centered healthcare through experienced
              medical professionals and modern technology. Our mission is to
              make quality healthcare accessible, transparent, and convenient
              for everyone.
            </p>

            <h3 className="mt-10 mb-6 text-2xl font-semibold">
              Meet Our Specialists
            </h3>

            <div className="space-y-5">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex items-center gap-5 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">{doctor.name}</h4>

                    <p className="text-blue-600 text-sm">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}

          <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <Map size={20} />
              <h3 className="font-semibold text-xl">Visit Us</h3>
            </div>

            <h4 className="text-2xl font-semibold mb-4">Smart Clinic HQ</h4>

            <div className="flex gap-2 text-blue-100 mb-10">
              <MapPin className="mt-2" size={20} />

              <p className="leading-7">
                123 Medical Plaza, Suite 400 <br />
                Healthcare District, NY 10001
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Clock3 size={20} />

              <h3 className="font-semibold text-xl">Working Hours</h3>
            </div>

            <div className="space-y-5">
              <div className="flex justify-between border-b border-blue-500 pb-3">
                <span>Monday - Friday</span>
                <span className="font-semibold">08:00 AM - 06:00 PM</span>
              </div>

              <div className="flex justify-between border-b border-blue-500 pb-3">
                <span>Saturday</span>
                <span className="font-semibold">09:00 AM - 02:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="italic font-semibold">Emergency Only</span>
              </div>
            </div>

            <button className="mt-auto bg-white text-blue-700 font-semibold rounded-xl py-4 hover:bg-blue-50 transition">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
