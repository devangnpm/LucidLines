import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export function AllBlogs() {
  // Mock blog data
  const blogs = [
    {
      title: "How to Learn React Effectively",
      image: "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?t=st=1736175280~exp=1736178880~hmac=4d78b78f66868c6866d10c513e8eb1e30b56cc71a5523021571710e7e0c7387c&w=740",
      description: "Learn the best practices and tips for mastering React.",
    },
    {
      title: "The Future of JavaScript",
      image: "https://via.placeholder.com/400x300",
      description: "Explore what lies ahead for JavaScript and web development.",
    },
    {
      title: "Node.js for Beginners",
      image: "https://via.placeholder.com/400x300",
      description: "A complete guide for those starting with Node.js.",
    },
    {
      title: "Building Full-Stack Apps with Express",
      image: "https://via.placeholder.com/400x300",
      description: "Learn to build robust full-stack applications using Express.js.",
    },
    {
      title: "Building Full-Stack Apps with Express",
      image: "https://via.placeholder.com/400x300",
      description: "Learn to build robust full-stack applications using Express.js.",
    },
    // Add more blogs as needed
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <div className="flex flex-col items-center mt-10 -ml-16 w-[1600px]">
        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1600px] ">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white border hover:border-stone-500 shadow-lg "
              onClick={() => console.log('Blogclick')}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="mt-2 text-gray-700">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
