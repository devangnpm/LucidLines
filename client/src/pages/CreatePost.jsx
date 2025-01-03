import { useEffect, useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <p>Create Post</p>
      <input
        type="text"
        placeholder="Enter Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/*File uploader*/}
      <div className="">
        <input 
         type="file"
         accept="image/*" 
         onChange={hand}
         />
      </div>
    </div>
  );
}
