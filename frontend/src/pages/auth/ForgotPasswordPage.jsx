import { colors } from "../../colors";
import { Link } from "react-router";

const ForgotPasswordPage = () => {
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
          <h1 className="text-lg mb-3 w-[70%] flex text-center">
            Don't worry, enter your email below and we will send you a link to
            change password.
          </h1>
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email"
              className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
            />
          </div>
          <button
            style={{ backgroundColor: "#03cc17" }}
            className="mt-3 text-white rounded-xl px-18 py-2 text-xl cursor-pointer"
          >
            Submit
          </button>
          <Link to="/signup">
            <button
              style={{ backgroundColor: colors.trueBlue }}
              className="mt-1 text-white rounded-xl px-18 py-2 text-xl cursor-pointer"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
