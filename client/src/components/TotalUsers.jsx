import { useEffect,useState } from "react";
import userImg from "../assets/users.svg";
import axios from "axios";

export default function TotalUsers() {

    const [users,setUsers] = useState(0);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/recent-users`);
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers(); 
    }, []); 
    


    return (
      <div>
        {/* Total Users */}
        <div className="flex border border-gray-200 shadow-lg hover:shadow-2xl w-96 h-50 ml-2 container mx-auto p-4 text-2xl rounded-xl bg-white transform hover:scale-105 transition-all duration-300">
          {/* Title */}
          <p className="text-gray-500">Total Users</p>
          
          {/* User Count */}
          <div className="flex mt-16 -ml-28 text-gray-950 text-5xl font-medium font-mono">
            {users.username}
          </div>
          
          {/* User Image */}
          <div className="flex border border-gray-300 shadow-md rounded-full w-24 h-24 ml-40 mt-4 justify-center items-center bg-sky-400">
            <img
              src={userImg}
              alt="userImageicon"
              className="w-16 rounded-full"
            />
          </div>
        </div>
      </div>
    );
  }
  