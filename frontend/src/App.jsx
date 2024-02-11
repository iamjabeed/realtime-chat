import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
