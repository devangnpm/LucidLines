import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsCardText } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <div
      className="fixed left-0  top-8 h-full w-72  mt-9  bg-zinc-700 text-white z-50 font-mono text-lg
    border-r"
    >
      <div className="flex flex-col items-center gap-5 space-y-5 ">
        <Link
        to="/dashboard"
        className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black pt-3 mt-2">
          <MdOutlineSpaceDashboard className=" size-7 -ml-3" />
          <span className="flex pl-4">Dashboard</span>
        </Link>

        <Link
         to="/profile"
         className="flex hover:border gap-2 justify-center w-full p-3 pl-3  hover:bg-green-200 hover:text-black">
          <CgProfile className="flex -ml-6 size-7" />
          <span className="flex pl-2 pr-2">Profile</span>
        </Link>

        <Link
        to="/blogs"
        className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">
          <div className="flex items-center -ml-12">
            <BsCardText className="size-7 mr-7" />
          </div>
          <div className="flex items-center -ml-2 ">
            <span>Blogs</span>
          </div>
        </Link>

        <div className="flex hover:border justify-center w-full p-3 hover:bg-green-200 hover:text-black">
          <FaUsers className="flex size-7 mr-3" />
          <span className="flex pl-2 pr-2 mr-10">Users</span>
        </div>

        <Link 
        to="/create-post"
        className="flex hover:border gap-2  justify-center w-full p-3 hover:bg-green-200 hover:text-black">
          <LiaCommentSolid className="flex  size-7" />
          <span className="flex pl-2 pr-2 mr-2">Create Post</span>
        </Link>

        <div className="flex hover:border gap-2 justify-center w-full p-3 hover:bg-green-200 hover:text-black">
          <BiLogOut className="flex -ml-1 size-7" />
          <span className="flex pl-3 pr-2 mr-3">Log Out</span>
        </div>
      </div>
    </div>
  );
}
