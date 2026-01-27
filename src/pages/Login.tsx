import Button from "../components/button";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        
        {/* Introduction Section */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Fire Safety Awareness Platform
        </h1>

        <p className="text-sm text-gray-700 mb-6 text-center">
          This platform provides accessible fire protection notes to help
          people in Rwanda learn fire safety practices related to electricity,
          gas, fire extinguishers, and emergency actions.
        </p>

        <p className="text-sm text-gray-700 mb-6 text-center">
          Our goal is to improve fire prevention awareness and help communities
          stay prepared for fire emergencies.
        </p>

        {/* Login Section */}
        <h2 className="text-xl font-semibold mb-3 text-center">
          Login to Continue
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <Button label="Login" />
      </div>
    </div>
  );
}

export default Login;
