import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Left Image Section */}
      <div className="hidden md:flex w-2/3 items-center justify-center">
        <img
          src="/src/assets/intro image/aimage.jpg"
          alt="Fire Safety"
          className="w-full  h-auto shadow-lg rounded-md m-5"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-2 rounded-md shadow-md w-100"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-sm text-red-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 mb-3"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full border border-gray-300 p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img
              src="/src/assets/login/google.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
