import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Swaps from "./pages/Swaps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swaps" element={<Swaps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;