import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center lg:justify-between px-6 lg:px-20"
      style={{ backgroundImage: "url('/src/assets/intro image/aimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 hidden lg:block max-w-xl text-white">
        <img src="/new.png" alt="Logo" className="w-20 mb-6" />

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Join Rwanda’s <br /> Fire Safety Movement
        </h1>

        <p className="text-lg text-gray-200">
          Create your account to access fire safety training materials,
          community programs, and life-saving prevention education.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6 lg:hidden">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        </div>

        <h2 className="hidden lg:block text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </button>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-600 font-medium hover:underline cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
