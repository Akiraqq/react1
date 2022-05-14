import React from 'react';

import module from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postElements = props.posts.map((p) => (
    <Post post={p.message} like={p.likeCount} />
  ));
  const newPost = React.createRef();

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  };
  const OnAddPost = () => {
    props.addPost();
    //props.dispatch(createPostActionCreator());
  };

  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPost}
          value={props.newPostText}
        />
        <div>
          <button onClick={OnAddPost}>Add Post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
