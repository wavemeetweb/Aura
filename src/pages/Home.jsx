import Navbar from "../components/layout/Navbar";
import CreatePost from "../components/CreatePost";
import Feed from "../components/feed/Feed";

export default function Home() {
  return (
    <>
      <Navbar />
      <CreatePost />
      <Feed />
    </>
  );
}
