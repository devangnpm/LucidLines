import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg"






export default function Sidebar() {
  return (
    <div className="fixed left-0 top-7 h-full w-64 mt-10  bg-zinc-700 text-white z-50 font-mono text-lg
    border-r">
      <div className="flex flex-col items-center space-y-4 ">
        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black pt-3 mt-2">
        <MdOutlineSpaceDashboard className=" mr-2 size-7" /> Dashboard</div>

        <div className="flex hover:border justify-center w-full p-3 pl-2  hover:bg-green-200 hover:text-black">
        <CgProfile className=" mr-7 size-7" />
        Profile</div>

        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">Posts</div>

        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">Users</div>

        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">Comments</div>

        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">Sign Out</div>
      </div>
    </div>
  );
}
