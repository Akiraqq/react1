import { NavLink } from "react-router-dom";
import module from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div className={module.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={module.item}>
        <NavLink
          to="/dialogues"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Message
        </NavLink>
      </div>
      <div className={module.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={module.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={module.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
