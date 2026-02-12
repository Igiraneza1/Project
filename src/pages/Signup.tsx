import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function handleSignup(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      
      {/* Left Image Section */}
      <div className="hidden md:flex w-2/3 h-full">
        <img
          src="/src/assets/intro image/aimage.jpg"
          alt="Fire Safety"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/3 flex items-center justify-center px-6">
        <form
          onSubmit={handleSignup}
          className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 mb-3"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full border border-gray-300 p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img
              src="/src/assets/login/google.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>

          {/* Login link */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-red-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
