import module from "./Post.module.css";

const Post = (prop) => {
  return (
    <div>
      <div className={module.item}>{prop.message}</div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
export default Post;
