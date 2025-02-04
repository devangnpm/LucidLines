import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [fileURL, setFileURL] = useState("");

  const editorRef = useRef(null); // creating a reference object to our editor and setting it to null initially

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
      setImagePreview(URL.createObjectURL(file)); // temp url for image previewd
    }
  };

  const handleUploadImage = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // Sending file to backend uploading to Cloudinary and getting back fileUrl
    const response = await axios.post(
      "/api/posts/upload",
      formData, // sending form data containing the file
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { fileUrl } = response.data;

    setFileURL(fileUrl);

    console.log(fileUrl);
  };

  const handleBlogPost = async () => {
    if (editorRef.current) {
      const editorContent = editorRef.current.getContent();
  
      const blogData = new FormData();
      blogData.append("editor", editorContent);
      blogData.append("url", fileURL);
      blogData.append("title", title);
      blogData.append("userId", "1");
  
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/posts/create`,
          blogData
        );
  
        if (response.status === 200) {  // server sends 200 Ok and then reload the page 
          console.log("Response backend:", response.status)
                    
          // Reload page after post submission
          window.location.reload();
        }
      } catch (error) {
        console.error("Error posting blog:", error);
      }
    } else {
      console.error("Editor reference is not available.");
    }
  };
  
  return (
    <div className="flex flex-col  mt-2 ml-28 h-[1200px] w-[1200px] gap-y-4">
      <Header />
      <Sidebar />
      <p className="flex  text-zinc-500 justify-center text-[40px] font-bold mt-4">
        Create Post
      </p>
      <div className="flex mt-5 w-full h-12 justify-between items-center   text-black">
        <input
          id="post-title"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex h-12  border-black border w-[800px] text-white text-xl rounded-xl px-5 ml-12 "
        />
        <select
          id="topic-selector"
          // onChange={(e) => setTopic(e.target.value)}
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
          onClick={handleUploadImage}
          className="text-white bg-green-500 hover:bg-green-600  rounded-md font-medium h-12 w-[150px] flex items-center justify-center mr-1"
        >
          Upload Image
        </button>
      </div>
      <div className="flex w-[1150px] justify-center items-center h-screen">
        <img
          src={imagePreview}
          alt={fileName}
          width={250}
          className="flex   ml-12  h-[400px] w-full object-contain"
        />
      </div>
      {/*Tiny MCE Editor*/}
      <div className="flex pl-12 ">
        <Editor
          apiKey="50rw478e93pv3v5o8si48417dxoq8hesq048n6rr8b9rrall" // exposed key cuz not important
          onInit={(_evt, editor) =>
            (editorRef.current = editor)
          } /* Once editor initialized  assigning the editor
        instance to  our  editorRef object created using useRef here*/
          init={{
            height: 600,
            width: 1105,
            valid_elements: "*[*]", // Allows all HTML elements and attributes
            extended_valid_elements: "iframe[src|width|height|frameborder|allowfullscreen]",
            plugins: [
              // Core editing features
              "anchor",
              "autolink",
              "charmap",
              "codesample",
              "emoticons",
              "link",
              "lists",
              "searchreplace",
              "table",
              "visualblocks",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
          }}
          initialValue="Welcome to TinyMCE! Write your Blog details here"
        />
      </div>
      {/* Create post button here*/}
      <button
        onClick={handleBlogPost}
        className="flex border border-red-600 text-black justify-center items-center"
      >
        + Create Post
      </button>
    </div>
  );
}
