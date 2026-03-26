import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATSioQeAc2A9BoGzv8S8o53f6-iDcWVr4",
  authDomain: "aurapers0n.firebaseapp.com",
  projectId: "aurapers0n",
  appId: "1:180300314364:web:1cf8bf819d17ac2f324979"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
