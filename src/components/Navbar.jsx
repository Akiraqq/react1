import module from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div className={module.item}>
        <a>Profile</a>
      </div>
      <div className={module.item}>
        <a>Message</a>
      </div>
      <div className={module.item}>
        <a>News</a>
      </div>
      <div className={module.item}>
        <a>Music</a>
      </div>
      <div className={module.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
