import { colors } from "../../colors";
import { Link } from "react-router";
const SignInPage = () => {
  return (
    <div
      style={{ backgroundColor: colors.turquoise }}
      className="h-screen flex items-center justify-center border border-red-500"
    >
      <div
        style={{ backgroundColor: "#a2e2d8" }}
        className="flex items-center justify-center w-[40%] h-[70%]"
      >
        <div className="flex flex-col items-center gap-5 w-full">
          <h1 className="font-bold italic text-3xl mb-10">Helpdesk System</h1>
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username"
              className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
            />
          </div>
          <button
            style={{ backgroundColor: "#03cc17" }}
            className="mt-3 text-white rounded-xl px-18 py-2 text-xl cursor-pointer"
          >
            Sign In
          </button>
          <div className="flex w-full justify-evenly mt-3.5">
            <Link to="/forgotpassword">
              <h1 className="text-red-800">Forgot password</h1>
            </Link>
            <Link to="/signup">
              <h1 className="text-xl">Sign Up</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
