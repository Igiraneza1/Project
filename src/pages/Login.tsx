import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center lg:justify-between px-6 lg:px-20"
      style={{ backgroundImage: "url('/src/assets/intro image/aimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 hidden lg:block max-w-xl text-white">
        <img src="/new.png" alt="Logo" className="w-20 mb-6" />

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Rwanda’s Trusted <br /> Fire Safety Education
        </h1>

        <p className="text-lg text-gray-200">
          Empowering communities with life-saving fire prevention knowledge.
          Learn practical safety skills, protect your home, and build a safer
          Rwanda together.
        </p>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6 lg:hidden">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-800">Fire Safe Login</h2>
        </div>

        <h2 className="hidden lg:block text-2xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500">
            Forgot your password?{" "}
            <Link to="/reset-password">
              <span className="text-orange-600 hover:underline cursor-pointer">
                Reset here
              </span>
            </Link>
          </p>

          <p className="mt-3 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-600 font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
