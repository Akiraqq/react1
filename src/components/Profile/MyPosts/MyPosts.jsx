import module from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <Post message="First post" />
      <Post message="Second post" />
      <Post message="Third post" />
    </div>
  );
};
export default MyPosts;
