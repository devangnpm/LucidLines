
import { useEffect , useState} from 'react';
import axios from 'axios';


// const mockData = [
//   {
//     commentId: 1,
//     content: "This article really resonates with me. Great work!",
//     likes: 120,
//   },
//   {
//     commentId: 2,
//     content:
//       "I disagree with some points, but it's an interesting perspective.",
//     likes: 85,
//   },
//   {
//     commentId: 3,
//     content: "Can you provide more examples on this topic? Thanks!",
//     likes: 42,
//   },
//   {
//     commentId: 4,
//     content: "Wow, this was so insightful. Looking forward to more posts!",
//     likes: 150,
//   },
//   {
//     commentId: 5,
//     content: "Could you expand on the last section? It felt a bit rushed.",
//     likes: 68,
//   },
//   {
//     commentId: 5,
//     content: "Could you expand on the last section? It felt a bit rushed.",
//     likes: 68,
//   },
// ];

export default function RecentComments() {

  const [comments, setComments] = useState([]);


  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/comments/getcomments`);
        console.log(`recentUsers : ${response.data}`)
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchComments();
  }, []);


  return (
    <div className="flex flex-col border-2 border-black h-[480px] w-[900px] ml-28 mr-4 overflow-y-auto">
      {/* Header */}
      <div className="flex  text-black h-14 w-full justify-between items-center">
        <h1 className="flex justify-center items-center text-lg ml-5 mt-2">
          Recent Comments
        </h1>
        <button className="flex p-4 w-24 h-9 mr-3 text-black font-semibold rounded-2xl shadow-md hover:bg-sky-950 border border-black items-center hover:text-white mt-3">
          View All
        </button>
      </div>

      {/* Comments Table */}
      <div className="p-1 overflow-hidden hover:overflow-y-auto mt-2  h-full ">
        {/* Table Header */}
        <div className="grid grid-cols-2 w-full border border-black bg-slate-300 pb-2 font-bold ">
          <p className="text-lg mt-2 text-black -ml-48">Comments</p>
          <p className="text-lg mt-2 -mr-24 text-black pl-28">Likes</p>
        </div>

        {/* Table Rows */}
        {comments.map((comment) => (
          <div
            key={comment.commentId}
            className="grid grid-cols-2 w-full border mt-1 border-black py-2  items-center pl-2"
          >
            <p className="text-gray-800">{comment.content}</p>
            <p className="text-green-600 ml-52">{comment.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



