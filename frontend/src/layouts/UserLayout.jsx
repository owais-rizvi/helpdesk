import UserNavbar from "../components/user/UserNavbar";
import UserSidebar from "../components/user/UserSidebar";
import UserFooter from "../components/user/UserFooter";

const UserLayout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      <div className="flex">
        <UserSidebar />
        <div className="w-full">
            <main>{children}</main>
            <UserFooter/>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
