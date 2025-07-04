import "./App.css";
import { colors } from "./colors";
import { Navigate, Routes, Route } from "react-router";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import Dashboard from "./pages/user/Dashboard";
import MyTicket from "./pages/user/MyTicket";
import NewTicket from "./pages/user/NewTicket";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/user/dashboard/" element={<Dashboard />} />
        <Route path="/user/myticket/" element={<MyTicket />} />
        <Route path="/user/newticket/" element={<NewTicket />} />
      </Routes>
    </div>
  );
}

export default App;
