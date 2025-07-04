import { BellIcon, LogOutIcon, User2 } from "lucide-react";
import { colors } from "../../colors";
const UserNavbar = () => {
  return (
    <div
      style={{ backgroundColor: colors.turquoise }}
      className="flex justify-between items-center"
    >
      <div className="text-white text-4xl py-3 px-4 font-semibold italic">
        <h1>Helpdesk</h1>
      </div>
      <div className="mr-4 flex gap-4">
        <BellIcon className="cursor-pointer" />
        <User2 className="cursor-pointer" />
        <LogOutIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserNavbar;
