import module from './Post.module.css';

const Post = (prop) => {
  return (
    <div>
      <div className={module.item}>{prop.post}</div>
      <div>
        <span>Like {prop.like}</span>
      </div>
    </div>
  );
};
export default Post;
