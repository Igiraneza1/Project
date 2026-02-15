// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState<string | null>(null);

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const storedName = localStorage.getItem("username");

//     if (!isLoggedIn) {
//       navigate("/login");
//     } else {
//       setUsername(storedName);
//     }
//   }, [navigate]);

//   function handleLogout() {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("username");
//     navigate("/");
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Navbar */}
//       <nav className="bg-red-600 text-white p-4 rounded mb-6 flex justify-between">
//         <h1 className="font-bold text-lg">Fire Safety Platform</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-200"
//         >
//           Logout
//         </button>
//       </nav>

//       {/* Welcome Section */}
//       <div className="bg-white p-6 rounded shadow text-center">
//         <h2 className="text-2xl font-bold mb-2">
//           Welcome, {username || "User"}!
//         </h2>
//         <p className="text-gray-700">
//           You are now logged in. Explore fire safety notes and learn important
//           safety practices.
//         </p>
//       </div>

//       {/* Placeholder for future content */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded shadow">Electrical Safety</div>
//         <div className="bg-white p-4 rounded shadow">Gas Safety</div>
//         <div className="bg-white p-4 rounded shadow">Fire Extinguishers</div>
//         <div className="bg-white p-4 rounded shadow">Emergency Actions</div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
