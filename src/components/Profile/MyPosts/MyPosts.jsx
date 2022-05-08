import module from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostData } from "../../..";
const MyPosts = () => {
  const postElements = PostData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
