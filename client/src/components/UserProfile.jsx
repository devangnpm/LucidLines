export default function UserProfile() {
  // Generate a random seed for the avatar
  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg`;

  return (
    <div className="container mx-auto flex flex-col w-full h-auto mt-14 ml-40  text-red-600 items-center p-2 gap-y-14">
      <h1 className="text-3xl mb-6 text-slate-800">Profile</h1>

      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-6 overflow-hidden">
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Input Fields */}
      <div className="flex flex-col space-y-4 w-3/4 max-w-md">
        <input
          type="text"
          placeholder="Username"
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Update
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Delete Account
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Sign Out
        </button>
      </div>
    </div>
  );
}
