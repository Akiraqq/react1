import module from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={module.content}>
      <div>
        <img src="https://funart.pro/uploads/posts/2021-04/1617391686_8-p-oboi-spokoinii-fon-8.jpg" />
      </div>
      <div>ava + discription</div>
      <div>
        My posts
        <div>New post</div>
        <div className={module.item}>post 1</div>
        <div className={module.item}>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
