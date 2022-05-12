import React from 'react';
import state, { addPost } from '../../../redux/State';
import module from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = state.profilePage.posts.map((p) => (
    <Post post={p.message} like={p.likeCount} />
  ));

  const newPost = React.createRef();
  const createPost = () => {
    let text = newPost.current.value;
    addPost(text);
    newPost.current.value = ' ';
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea ref={newPost}></textarea>
        <div>
          <button onClick={createPost}>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
