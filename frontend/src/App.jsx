import MessageContainer from "./components/messages/MessageContainer.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="h-screen bg-gray-400">
      <h1 className="flex justify-center items-center text-2xl py-4 text-red-700 font-bold">
        Chat app
      </h1>
      <Home />
    </div>
  );
}

export default App;
