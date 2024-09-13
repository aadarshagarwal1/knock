import { useContext } from "react";
import { DataContext } from "../store/dataContext";
import Post from "./post";
export default function home() {
  const posts = useContext(DataContext).posts;
  const renderElement = posts.map((item) => {
    return (
      <Post
        key={item.id}
        id={item.id}
        title={item.title}
        comments={item.comments}
        reactionCount={item.reactionCount}
        hashtags={item.hashtags}
      />
    );
  });
  return (
    <div className="home">
      {posts.length === 0 ? (
        <center>
          <h1 style={{ marginTop: "2rem" }}>THERE ARE NO POSTS</h1>
        </center>
      ) : (
        renderElement
      )}
    </div>
  );
}
