// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// interface NavbarProps {
//   isLoggedIn?: boolean; // optional prop
// }

// function Navbar({ isLoggedIn = false }: NavbarProps) {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="Platform Logo" className="w-10 h-10" />
//         <span className="font-bold text-xl text-gray-800">
//           Fire Safety
//         </span>
//       </div>

//       {/* Only show links if logged in */}
//       {isLoggedIn && (
//         <div className="hidden md:flex gap-6">
//           <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
//             Home
//           </Link>
//           <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
//             About
//           </Link>
//           <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">
//             Login
//           </Link>
//         </div>
//       )}

//     </nav>
//   );
// }

// export default Navbar;
