import { NavLink } from "react-router-dom";
import module from "./../Dialogues.module.css";

const Dialogue = (props) => {
  let path = "/dialogues/" + props.id;
  return (
    <div className={module.dialogue}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogue;
