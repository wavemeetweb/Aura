import { useState } from "react";
import { registerUser, loginUser, loginWithGoogle } from "../services/authService";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle = async () => {
    if (isLogin) await loginUser(email, password);
    else await registerUser(email, password);
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handle}>
        {isLogin ? "Login" : "Signup"}
      </button>

      <button onClick={loginWithGoogle}>Google</button>

      <p onClick={() => setIsLogin(!isLogin)}>Switch</p>
    </div>
  );
}
