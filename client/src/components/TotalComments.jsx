import { useEffect , useState} from "react";
import commentImg from "../assets/comment.png";
import axios from "axios";

export default function TotalComments() {

  const [comments,setComments] = useState(0);

  useEffect(() => {
  
    try {
      const response = axios.get(`${import.meta.env.VITE_API_URL}/comments/getcomments`);

      setComments(response.data);

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  return (
    <div className="flex border border-gray-200 shadow-lg hover:shadow-2xl w-96 h-50 rounded-lg flex-wrap bg-white transform hover:scale-105 transition-all duration-300">
      {/* Title */}
      <p className="text-gray-500 text-2xl mt-4 ml-4">Total Comments</p>

      {/* Count */}
      <div className="mt-20 text-gray-950 text-5xl font-medium font-mono -ml-40 ">
        {comments}
      </div>

      {/* Icon */}
      <div className="flex h-24 w-24 ml-40 mt-8 rounded-full justify-center items-center bg-emerald-500 shadow-md">
        <img src={commentImg} alt="CommentsIcon" className="w-16 h-16 mt-2" />
      </div>
    </div>
  );
}
