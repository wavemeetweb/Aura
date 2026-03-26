import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Post from "./Post";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snap) => {
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  return posts.map(p => <Post key={p.id} post={p} />);
}
