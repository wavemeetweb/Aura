import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { uploadImage } from "./uploadService";

export const createPost = async (file, caption, user) => {
  const image = await uploadImage(file, user); // 👈 pass user

  await addDoc(collection(db, "posts"), {
    image,
    caption,
    userId: user.uid,
    username: user.displayName,
    userAvatar: user.photoURL,
    createdAt: Date.now()
  });
};
