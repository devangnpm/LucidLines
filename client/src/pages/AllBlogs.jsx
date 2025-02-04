import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export function AllBlogs() {

   const [blogs,setBlogs] = useState([]);

   const location = useLocation();
   const user = location.state?.user; // Get user object
   console.log("User info: " + JSON.stringify(user));

   const navigate = useNavigate()

  // Making request on mount using useEffect and empty dependecy array to only run once on page load
  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.API_URL}/posts/getposts`);
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      
    }

    fetchData()
  },[]);

  // navigate to single blog endpoint and display the blog with the id
  function handleBlogClick(blog) {
    console.log("Blogclicked")
    navigate(`/posts/${blog.id}`, { state: { blog } });
  }

  return (
    <>
      <Header />
      <Sidebar />

      <div className="flex flex-col items-center mt-16 -ml-8 w-[1560px]">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1600px]">
          {blogs.slice(0, 9).map((blog) => (
            <div
              key={blog.id}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg border-gray-500  border-2  shadow-lg bg-[#EEEEEE]/100 overflow-hidden"
              onClick={() => handleBlogClick(blog)} // send the blogid to the handler func 
            >
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-64 object-contain rounded-lg max-w-full -my-5"
              />
              <div className="flex border-t-2 border-black border-dashed h-auto p-2 pl-3 pb-8">
                <h3 className="text-2xl  mt-4 font-sans text-black text-left">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
