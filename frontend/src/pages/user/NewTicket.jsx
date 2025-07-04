import { PaperclipIcon } from "lucide-react";
import { colors } from "../../colors";
import ReCaptchaComponent from "../../components/ReCaptchaComponent";
import UserLayout from "../../layouts/UserLayout";

const NewTicket = () => {
  return (
    <UserLayout>
      <div className="min-h-screen" style={{ fontFamily: "Sanchez, serif" }}>
        <h1 className="text-center text-2xl mt-4">Create New Ticket</h1>
        <form className="px-4 grid grid-cols-2 gap-x-6 gap-y-4">

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Ticket No.</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ colorScheme: "light" }}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Department</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Category</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Type</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Priority</label>
            <input
              type="text"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>

          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="7"
              className="px-3 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <label htmlFor="attachment"><PaperclipIcon style={{backgroundColor: colors.turquoise}} className="p-2 rounded-lg cursor-pointer absolute bottom-3 right-1 w-10 h-10"/></label>
            <div className="cursor-pointer opacity-0 absolute bottom-3 right-1 w-10 h-10">
              <input type="file" />
            </div>
          </div>
          <ReCaptchaComponent/>
          <button style={{backgroundColor: colors.turquoise}} className="h-12 w-[40%] rounded-lg mt-8 cursor-pointer">Submit</button>
        </form>
      </div>
    </UserLayout>
  );
};

export default NewTicket;
