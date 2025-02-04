import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const DisplayPost = () => {
  const [blog, setBlogData] = useState([]); ///setting the blog data after retrieval

  let { postId } = useParams(); // useParams to extract the postId for my api call
  console.log(`Logging postId ${postId}`);

  useEffect(() => {
    document.body.style.backgroundColor = "#121212";
    document.documentElement.style.backgroundColor = "#121212"; 

    async function fetchData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/${postId}`
        );
        console.log(`API Response: ${JSON.stringify(response.data, null, 2)}`);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();

    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = ""; 
    };
  }, [postId]);

  return (
    <>
      <Header />
      <div className="flex flex-col mt-20 p-2 max-w-90 space-y-9">
        {/* Title */}
        <div className="flex text-black text-center sm:text-left w-full justify-center items-center">
          <h1 className="text-[2.8em] shadow-text-glow text-neutral-50">{blog.title}</h1>
        </div>
  
        {/* Image - removed fixed height */}
        <div className="relative aspect-[4/2] w-full overflow-hidden">
          <img 
            className="object-contain w-full h-[34em]"
            src={blog.image_url}
            alt="blog image"
          />
        </div>
  
        {/* Content */}
        <div 
          className="flex flex-col font-sans text-2xl text-left text-neutral-50 space-y-8"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
};
