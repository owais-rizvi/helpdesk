import {
  ChevronRight,
  LayoutDashboard,
  Ticket,
  TicketPlusIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router";
const UserSidebar = () => {
  return (
    <div
      style={{ backgroundColor: "#e0dfdf", fontFamily: "Sanchez, serif" }}
      className="min-h-screen w-[15%] flex flex-col pl-8 pt-4 gap-3"
    >
      <NavLink to="/user/dashboard">
        {({ isActive }) => (
          <div className="flex">
            <ChevronRight className={isActive ? "opacity-[100%]" : "opacity-[0%]"} />
            <div className="flex gap-4">
              <LayoutDashboard />
              <p>Dashboard</p>
            </div>
          </div>
        )}
      </NavLink>
      <NavLink to="/user/newticket">
        {({ isActive }) => (
          <div className="flex">
            <ChevronRight className={isActive ? "opacity-[100%]" : "opacity-[0%]"} />
            <div className="flex gap-4">
              <TicketPlusIcon />
              <p>New Ticket</p>
            </div>
          </div>
        )}
      </NavLink>
      <NavLink to="/user/myticket">
        {({ isActive }) => (
          <div className="flex">
            <ChevronRight className={isActive ? "opacity-[100%]" : "opacity-[0%]"} />
            <div className="flex gap-4">
              <Ticket />
              <p>My Ticket</p>
            </div>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default UserSidebar;
