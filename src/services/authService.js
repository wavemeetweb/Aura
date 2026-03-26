import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, provider } from "./firebase";

export const loginWithGoogle = () => signInWithPopup(auth, provider);

export const registerUser = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(user.user);
  alert("Check your email");
};

export const loginUser = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);

  if (!user.user.emailVerified) {
    alert("Verify email first");
    throw new Error("Not verified");
  }

  return user;
};
