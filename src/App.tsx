import Button from "../src/components/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 px-4">
      
      <h1 className="text-3xl font-bold text-center">
        Fire Safety Awareness Platform
      </h1>

      <p className="text-gray-700 text-center max-w-xl">
        This platform provides accessible fire protection notes to help people
        learn and revise fire safety practices related to electricity, gas,
        fire extinguishers, and emergency actions.
      </p>

      <p className="text-gray-700 text-center max-w-xl">
        Our goal is to improve fire prevention awareness and help communities
        stay prepared for fire emergencies.
      </p>

      <Button label="Get Started" />
    </div>
  );
}

export default App;
