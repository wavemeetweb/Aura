import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-[#121212]">
      <h1>Aura</h1>
      <Link to="/auth">Auth</Link>
    </div>
  );
}
