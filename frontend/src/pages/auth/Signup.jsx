import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="w-full sm:max-w-lg 2xl:max-w-xl flex flex-col items-center justify-center mx-auto h-full  min-h-screen px-4">
      <div className="w-full rounded-lg border border-gray-400/15 p-4">
        <div className="">
          <h1 className="text-2xl font-extrabold text-gray-500 mb-2">
            Welcome to{" "}
            <span className="text-3xl font-bold text-pink">SwiftLine</span>
          </h1>

          <h2 className="text-lg text-gray-500">
            Your Ultimate Chat Experience
          </h2>
          <h2 className="mb-2 text-lg text-gray-500">
            Please sign up to continue
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 border rounded bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>

            <div className="w-1/2 ">
              <label className="label p-2 ">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="im_john"
                className="w-full p-2 border rounded bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="* * * * * *"
                className="w-full p-2 border rounded bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="* * * * * *"
                className="w-full p-2 border rounded bg-[#010102] placeholder-[#eaeaeab9] text-[#F6F6F6] outline-none border-[#3f3f41] focus:border-yellow"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div>
            <button
              className="w-full bg-yellow hover:bg-[#ecf400e5] transition-colors text-black border-none outline-none px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className="mt-2">
            <p className="text-base 2xl:text-lg  text-gray-300">
              Already have an account?{" "}
              <Link to={"/login"} className="text-pink hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
