import postImg from "../assets/add-post.png";

export default function TotalPosts() {
    return (
      <div className="flex border border-gray-200 shadow-lg hover:shadow-2xl w-96 h-38 rounded-lg bg-white transform hover:scale-105 transition-all duration-300">
        {/* Title */}
        <p className="text-gray-500 mt-4 text-2xl ml-5">Total Posts</p>
  
        {/* Count */}
        <div className="flex mt-20 -ml-28 text-gray-950 text-5xl font-medium font-mono">
          11
        </div>
  
        {/* Icon */}
        <div className="flex h-24 w-24 ml-40 mt-7 rounded-full justify-center items-center bg-amber-500 shadow-md">
          <img
            src={postImg}
            alt="Post Icon"
            className="h-16 w-16"
          />
        </div>
      </div>
    );
  }
  