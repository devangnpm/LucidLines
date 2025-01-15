import { useEffect, useState } from "react";
import axios from "axios";

const recentUsers = [
  {
    id: 1,
    name: "Aarav Sharma",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "aarav.sharma@example.com",
    lastActivity: "2024-12-29T14:23:00Z",
  },
  {
    id: 2,
    name: "Isha Gupta",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "isha.gupta@example.com",
    lastActivity: "2024-12-29T13:45:00Z",
  },
  {
    id: 3,
    name: "Dev Patel",
    profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "dev.patel@example.com",
    lastActivity: "2024-12-29T12:10:00Z",
  },
  {
    id: 4,
    name: "Ananya Desai",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "ananya.desai@example.com",
    lastActivity: "2024-12-29T11:55:00Z",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "kabir.malhotra@example.com",
    lastActivity: "2024-12-29T10:40:00Z",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "kabir.malhotra@example.com",
    lastActivity: "2024-12-29T10:40:00Z",
  },
];

export default function RecentUsers() {
  // const [recentUsers, setRecentUsers] = useState([]);
  const [Error, setError] = useState(false);


  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get("/api/user/recentusers");
        console.log(`recentUsers : ${data}`)
        // setRecentUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(true)
      }
    };

    fetchUsers();
  }, []);

  if (Error) return <p>Error: {Error}</p>; // Display error state

  return (
    <div className="flex flex-col  h-[460px] w-[600px] border-2 p-1 border-black overflow-y-auto">
      <div className="flex text-black h-14 w-full justify-between items-center mt-2">
        <h1 className="flex justify-center items-center text-lg ml-5">
          Recent Users
        </h1>
        <button className=" flex p-4 w-24 h-9 mr-2 text-black font-semibold rounded-2xl shadow-md hover:bg-sky-950 border hover:text-white border-black items-center">
          View All
        </button>
      </div>
      <div className="flex mt-2 text-black justify-between p-2 border border-black bg-slate-300 font-bold text-lg">
        <p className="flex ml-4">User Image</p>
        <p className="flex mr-4">Username</p>
      </div>
      {recentUsers.map((user) => (
        <li
          key={user.id}
          className="flex border mt-1 border-black text-black justify-between p-2 items-center"
        >
          <img className="size-12 rounded-3xl ml-5" src={user.profilePicture} />
          <p className="flex mr-4">{user.name}</p>
        </li>
      ))}
    </div>
  );
}
