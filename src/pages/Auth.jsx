import { useState } from "react";
import {
  registerUser,
  loginUser,
  loginWithGoogle
} from "../services/authService";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await loginUser(email, password);
      } else {
        await registerUser(email, password);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-xl font-bold">
        {isLogin ? "Login" : "Sign Up"}
      </h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 bg-black border"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 bg-black border"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 px-4 py-2"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <button
        onClick={loginWithGoogle}
        className="bg-gray-700 px-4 py-2"
      >
        Continue with Google
      </button>

      <p
        onClick={() => setIsLogin(!isLogin)}
        className="cursor-pointer text-sm"
      >
        {isLogin
          ? "Create account"
          : "Already have an account?"}
      </p>
    </div>
  );
}
