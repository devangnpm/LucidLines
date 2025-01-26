import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const DisplayPost = () => {
  const [blog, setBlogData] = useState([]); ///setting the blog data after retrieval

  let { postId } = useParams(); // useParams to extract the postId for my api call
  console.log(`Logging postId ${postId}`);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${postId}`
        );
        console.log(`API Response: ${JSON.stringify(response.data, null, 2)}`);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, [postId]);

  return (
    <>
      <Header />
      <div className="flex flex-col  mt-20 border-2 border-red-400 p-2 max-w-90  space-y-2 max-h-[200rem]">
        <div className="flex border-2 border-red-400 text-black text-center sm:text-left h-14 w-full justify-center items-center">
          <h1 className="text-4xl">{blog.title}</h1>
        </div>
        <div className="flex border border-red-400 h-96 w-auto bg-cover bg-center bg-no-repeat">
          <img 
          className="w-full h-full object-contain "
          src={blog.image_url} alt="blog image"/>
        </div>
        <div className="flex h-auto border-2 border-red-400 ">{blog.content}</div>
      </div>
    </>
  )
};
