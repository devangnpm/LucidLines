
import { useEffect } from 'react';


const comments = [
  {
    commentId: 1,
    content: "This article really resonates with me. Great work!",
    likes: 120,
  },
  {
    commentId: 2,
    content:
      "I disagree with some points, but it's an interesting perspective.",
    likes: 85,
  },
  {
    commentId: 3,
    content: "Can you provide more examples on this topic? Thanks!",
    likes: 42,
  },
  {
    commentId: 4,
    content: "Wow, this was so insightful. Looking forward to more posts!",
    likes: 150,
  },
  {
    commentId: 5,
    content: "Could you expand on the last section? It felt a bit rushed.",
    likes: 68,
  },
];

export default function RecentComments() {

  // useEffect(() => {
    
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  


  return (
    <div className="flex flex-col border border-black-500 h-[500px] w-[900px] ml-28 mr-4">
      {/* Header */}
      <div className="flex border border-black-500 text-black h-14 w-full justify-between items-center">
        <h1 className="flex justify-center items-center text-lg ml-10">
          Recent Comments
        </h1>
        <button className="flex p-4 w-24 h-9 mr-14 text-black font-semibold rounded-2xl shadow-md hover:bg-sky-950 border border-black items-center hover:text-white">
          View All
        </button>
      </div>

      {/* Comments Table */}
      <div className="p-4 overflow-hidden hover:overflow-y-auto h-full">
        {/* Table Header */}
        <div className="grid grid-cols-2 w-full border-b border-gray-400 pb-2 mb-4 font-bold ">
          <p className="text-lg text-gray-700">Comments</p>
          <p className="text-lg text-gray-700 pl-32">Likes</p>
        </div>

        {/* Table Rows */}
        {comments.map((comment) => (
          <div
            key={comment.commentId}
            className="grid grid-cols-2 w-full border-b border-gray-300 py-2  items-center"
          >
            <p className="text-gray-800">{comment.content}</p>
            <p className="text-green-600 pl-32">{comment.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



