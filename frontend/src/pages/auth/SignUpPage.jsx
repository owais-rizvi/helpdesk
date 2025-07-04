import { useState } from "react";
import { colors } from "../../colors";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful!");
    navigate('/dashboard');

  } catch (error) {
    console.error("Signup error:", error);
    alert("Something went wrong. Please try again.");
  }
  }

  return (
    <div
      style={{ backgroundColor: colors.turquoise }}
      className="h-screen flex items-center justify-center"
    >
      <div
        style={{ backgroundColor: "#a2e2d8" }}
        className="flex items-center justify-center w-[40%] h-[70%]"
      >
        <div className="flex flex-col items-center gap-5 w-full">
          <h1 className="font-bold italic text-3xl mb-3">Helpdesk System</h1>
          <h1 className="text-lg mb-3">Sign up here</h1>
          <form onSubmit={handleSignUp} className="flex flex-col items-center">
            <div className="flex flex-col gap-6">
              <input
                value={signupData.username}
                onChange={(e) =>
                  setSignupData({ ...signupData, username: e.target.value })
                }
                required
                type="text"
                placeholder="Username"
                className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
              />
              <input
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
                type="password"
                placeholder="Password"
                className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
              />
              <input
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
                type="email"
                placeholder="Email"
                className="bg-white border text-lg w-80 py-1 px-2 placeholder-black focus:outline-none"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: colors.trueBlue }}
              className=" mt-3 text-white rounded-xl px-6 py-2 text-xl cursor-pointer w-[50%] h-10 text-center"
            >
              Sign Up
            </button>
          </form>

          <div className="flex w-full justify-evenly mt-3.5">
            <Link to="/signin">
              <h1 className="text-xl">Sign In</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
