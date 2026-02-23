import React from "react";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 lg:px-20"
      style={{ backgroundImage: "url('/src/assets/intro image/aimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-16 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Reset Your Password
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter your email address and we will send you a password reset link.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link
            to="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;