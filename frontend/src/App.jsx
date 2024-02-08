import { Routes, Route } from "react-router-dom";

import MessageContainer from "./components/messages/MessageContainer.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Toaster /> */}
    </div>
  );
}

export default App;
