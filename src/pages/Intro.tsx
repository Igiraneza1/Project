import Button from "../components/Button";

function Intro() {
  return (
    <div className="w-full bg-gray-100">
      {/* grid */}
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

      {/* steps */}

      <div className="w-full bg-[#fbe4d5] py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-6xl mx-auto border border-red-400 rounded-xl p-6 sm:p-10">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-red-700 mb-8 sm:mb-10">
            Stay Safe from Fire
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                01
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Find Fire Hazards
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  The first step in fire safety is to look around and find
                  things that can catch fire easily. This could be faulty wires,
                  gas leaks, leaving cooking unattended, or flammable liquids.
                  By spotting these dangers early, you can take action to
                  prevent fires before they happen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                02
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Use Safety Equipment
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  It’s important to have the right safety equipment at home or
                  at work. Install smoke alarms and fire detectors so you are
                  alerted early. Keep fire extinguishers and fire blankets ready
                  and check them regularly to make sure they work. These tools
                  can save lives in case a fire starts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Learn Fire Safety Rules
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Knowing the rules of fire safety can help you react quickly in
                  an emergency. Learn how to use a fire extinguisher, know where
                  the emergency exits are, and practice fire drills with your
                  family or coworkers. Regular practice helps you stay calm and
                  know exactly what to do if a fire happens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                04
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Act Safely During a Fire
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  If a fire occurs, it’s important to stay calm and warn others
                  immediately. Leave the building using safe exits, and never
                  use elevators. Call the fire department as soon as you are
                  safe. Acting quickly and safely can prevent injuries and save
                  lives.er.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                05
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Teach and Prevent Fires
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fire safety is not just for you sharing it with others is very
                  important. Teach your family and friends about fire safety,
                  never leave stoves, candles, or fires unattended, and join
                  community programs about fire prevention. Educating others
                  helps everyone stay safer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
                06
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Stay Informed and Prepared
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Always keep yourself updated about fire safety. Learn about
                  local fire risks, emergency contacts, and new safety tools or
                  techniques. Being prepared and aware helps you react quickly
                  if a fire happens, keeping yourself and others safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}

      <div className="m-8 justify-center flex">
          <Button label="Get Started" />
        </div>
    </div>
  );
}

export default Intro;
