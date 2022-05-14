import MyPosts from './MyPosts';
import {
  createPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  const AddPost = () => {
    props.store.dispatch(createPostActionCreator());
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={AddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
