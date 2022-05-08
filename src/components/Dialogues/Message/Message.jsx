import module from "./../Dialogues.module.css";
const Message = (props) => {
  return <div className={module.message}>{props.message}</div>;
};

export default Message;
