import { useState } from "react";
import { Heart } from "lucide-react";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-[#121212] p-4 mb-4 rounded-xl">
      <img src={post.image} />
      <Heart
        onClick={() => setLiked(!liked)}
        className={liked ? "text-red-500" : ""}
      />
      <p><b>{post.username}</b> {post.caption}</p>
    </div>
  );
}
