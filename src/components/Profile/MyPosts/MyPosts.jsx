import React from 'react';
import state from '../../../redux/State';
import module from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = state.profilePage.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  const newPost = React.createRef();
  const addPost = () => {
    let text = newPost.current.value;
    alert(text);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea ref={newPost}></textarea>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
