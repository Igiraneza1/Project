import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Intro() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  return (
    <div className="w-full bg-gray-100">
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Fire Safety Awareness
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-6">
          <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
            <img
              src="/src/assets/intro image/fire protection.jpg"
              alt="Fire Protection"
              className="w-full h-auto mx-auto mb-4 rounded-md"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Learn essential fire safety practices for electricity, gas, and
              fire extinguishers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
            <img
              src="/src/assets/intro image/fire awareness.jpg"
              alt="Fire Awareness"
              className="w-full h-auto mx-auto mb-4 rounded-md"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Our goal is to improve fire prevention awareness and help
              communities stay prepared for emergencies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
            <img
              src="/src/assets/intro image/join us.jpg"
              alt="Join Us"
              className="w-full h-auto mx-auto mb-4 rounded-md"
            />
            <p className="text-gray-700 text-sm sm:text-base">
              Join us to learn practical fire safety tips and protect your
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-6xl mx-auto border border-red-400 rounded-xl p-6 sm:p-10">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-red-700 mb-8 sm:mb-10">
            Stay Safe from Fire
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Find Fire Hazards",
                desc:
                  "Look for faulty wiring, gas leaks, and flammable materials to prevent fires early.",
              },
              {
                num: "02",
                title: "Use Safety Equipment",
                desc:
                  "Install smoke alarms and keep fire extinguishers ready and working.",
              },
              {
                num: "03",
                title: "Learn Fire Safety Rules",
                desc:
                  "Know emergency exits, practice drills, and learn how to use extinguishers.",
              },
              {
                num: "04",
                title: "Act Safely During a Fire",
                desc:
                  "Stay calm, warn others, exit safely, and call emergency services.",
              },
              {
                num: "05",
                title: "Teach and Prevent Fires",
                desc:
                  "Share fire safety knowledge with family and community members.",
              },
              {
                num: "06",
                title: "Stay Informed and Prepared",
                desc:
                  "Keep learning about fire risks and emergency contacts.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="m-8 flex justify-center">
        <Button label="Get Started" onClick={goToLogin} />
      </div>
    </div>
  );
}

export default Intro;
