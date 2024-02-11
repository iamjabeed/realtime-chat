import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="w-full sm:max-w-md 2xl:max-w-xl flex flex-col items-center justify-center mx-auto h-full min-h-screen px-4">
      <div className="w-full rounded-lg border border-gray-400/15 p-4">
        <div className="">
          <h1 className="text-2xl font-extrabold text-gray-500 mb-2">
            Welcome to{" "}
            <span className="text-3xl font-bold text-pink">SwiftLine</span>
          </h1>

          <h2 className="text-lg text-gray-500">
            Your Ultimate Chat Experience
          </h2>
          <h2 class="mb-2 text-lg text-gray-500">Please sign in to continue</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-2 border rounded bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border rounded mb-4 bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              className="w-full bg-yellow hover:bg-[#ecf400e5] transition-colors text-black border-none outline-none px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <div className="mt-2">
            <p className="text-base 2xl:text-lg  text-gray-300">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-pink hover:underline ">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
