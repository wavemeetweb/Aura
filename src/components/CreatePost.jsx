import { useState } from "react";
import { createPost } from "../services/postService";
import { useAuth } from "../hooks/useAuth";

export default function CreatePost() {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input onChange={e => setCaption(e.target.value)} />
      <button onClick={() => createPost(file, caption, user)}>Post</button>
    </div>
  );
}
