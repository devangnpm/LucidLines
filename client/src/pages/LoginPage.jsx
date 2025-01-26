import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log("Login attempt:", { username, password });

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });

      const user = response.data.user;
      console.log(`User login page user object: ${JSON.stringify(user)}`);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        console.log(`Response data token: ${response.data.token}`);
        console.log("User before navigating:", user);
        navigate('/blogs', { state: { user } });
      }

      
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-[57em] w-[125em] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -mt-10 -ml-[400px] overflow-hidden absolute">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg m-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-indigo-600">LucidLines</h1>
          <p className="text-sm text-gray-600">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
