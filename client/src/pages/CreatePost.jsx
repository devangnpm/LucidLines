import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log("Submit clicked!");
  };

  return (
    <div className="flex flex-col border border-red-600 mt-12 ml-28 h-[700px] w-[1200px] gap-y-5">
      <Header />
      <Sidebar />
      <p className="flex  text-zinc-500 font-medium justify-center text-[40px] font-bold mt-4 text-under ">
        Create Post
      </p>
      <div className="flex mt-5 w-full h-12 justify-between items-center   text-black">
        <input
          id="post-title"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex h-12  border-black border w-[800px] text-black rounded-xl px-5 ml-12 "
        />
        <select
          id="topic-selector"
          onChange={(e) => setTopic(e.target.value)}
          className="flex h-10 text-white px-6 w-[200px] rounded-lg mr-14 bg-grey-50 align-items justify-center"
        >
          <option value="" disabled>
            Select Topic
          </option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="nodejs">Node.js</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>
      <div className="flex border-dashed border-2 mt-3 border-stone-500 text-black items-center gap-5 px-1 ml-12 w-[1100px] py-1">
        {/* Choose File Button */}
        <button
          onClick={() => document.getElementById("file-upload").click()}
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 rounded-md font-medium h-12 w-[150px] flex items-center justify-center"
        >
          Choose File
        </button>

        {/* File Name Display */}
        <span className="flex text-gray-700 font-medium flex-grow">
          {fileName || "No file selected"}
        </span>

        {/* File Input */}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Upload Image Button */}
        <button
          onClick={handleSubmit}
          className="text-white bg-green-500 hover:bg-green-600  rounded-md font-medium h-12 w-[150px] flex items-center justify-center mr-1"
        >
          Upload Image
        </button>
      </div>
      <div className="flex w-[1150px] justify-center items-center">
        <img 
          src={imagePreview}
          alt={fileName}
          className="flex   ml-12  h-[400px] w-full object-contain min-h-0"
        />
      </div>
    </div>
  );
}
