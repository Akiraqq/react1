import React from 'react';
import {
  createPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
import store from '../../../redux/State';

import module from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = store._state.profilePage.posts.map((p) => (
    <Post post={p.message} like={p.likeCount} />
  ));
  const newPost = React.createRef();

  const createPost = () => {
    props.dispatch(createPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPost.current.value;
    store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPost}
          value={store.getState().profilePage.newPostText}
        />
        <div>
          <button onClick={createPost}>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
