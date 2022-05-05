import module from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://funart.pro/uploads/posts/2021-04/1617391686_8-p-oboi-spokoinii-fon-8.jpg" />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
