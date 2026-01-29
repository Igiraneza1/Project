import Button from "../components/button";

function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 px-4">
      
      <h1 className="text-3xl font-bold text-center">
        Fire Safety Awareness 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

  <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
    <img
      src="/src/assets/intro image/fire protection.jpg"
      alt="Fire Protection"
      className="w-80 h-auto mx-auto mb-4 rounded-md"
    />
    <p className="text-gray-700">
      Learn essential fire safety practices for electricity, gas, and fire extinguishers.
    </p>
  </div>

  <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
    <img
      src="/src/assets/intro image/fire awareness.jpg"
      alt="Fire Awareness"
      className="w-80 h-auto mx-auto mb-4 rounded-md"
    />
    <p className="text-gray-700">
      Our goal is to improve fire prevention awareness and help communities stay prepared for emergencies.
    </p>
  </div>

  <div className="bg-white p-6 rounded-md shadow text-center transform transition duration-300 hover:scale-105">
    <img
      src="/src/assets/intro image/join us.jpg"
      alt="Join Us"
      className="w-80 h-auto mx-auto mb-4 rounded-md"
    />
    <p className="text-gray-700">
      Join us to learn practical fire safety tips and protect your community.
    </p>
  </div>

</div>



      <Button label="Get Started" />
    </div>
  );
}

export default Intro;
