import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
