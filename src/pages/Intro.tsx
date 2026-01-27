import Button from "../components/button";

function Intro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-lg text-center">
        
        <h1 className="text-3xl font-bold mb-4">
          Fire Safety Awareness Platform
        </h1>

        <p className="text-gray-700 mb-3">
          This platform provides accessible fire protection notes to help people
          in Rwanda learn and revise fire safety practices.
        </p>

        <p className="text-gray-700 mb-6">
          Topics include electrical safety, gas safety, use of fire extinguishers,
          and emergency actions to take during a fire incident.
        </p>

        <Button label="Get Started" />
      </div>
    </div>
  );
}

export default Intro;
