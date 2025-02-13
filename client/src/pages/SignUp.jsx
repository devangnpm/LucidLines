import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { username, email, password });
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        username,
        email,
        password,
      });
      
      if (response.status === 200) {
        console.log("User sign-up successfull!")
      }

    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-[900px] w-[2000px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -mt-10 -ml-[400px] overflow-hidden absolute">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg m-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold   text-indigo-600">LucidLines</h1>
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
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Your username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-600"
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
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition ease-in-out duration-150"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
