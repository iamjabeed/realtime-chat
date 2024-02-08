import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/Signup.jsx";

function App() {
  return (
    <div className="h-screen bg-gray-400">
      <h1 className="flex justify-center items-center text-2xl py-4 text-red-700 font-bold">
        Chat app
      </h1>
      <SignUp />
    </div>
  );
}

export default App;
