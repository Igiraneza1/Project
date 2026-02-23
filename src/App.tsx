import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/Reset-password";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
