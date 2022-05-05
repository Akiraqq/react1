import module from "./Dialogues.module.css";
const Dialodues = () => {
  return (
    <div className={module.dialogues}>
      <div className={module.dialoguesItems}>
        <div className={module.dialogue}>Roma</div>
        <div className={module.dialogue}>Asya</div>
        <div className={module.dialogue}>Sereja</div>
      </div>
      <div className={module.messages}>
        <div className={module.message}>hi</div>
        <div className={module.message}>Hello</div>
        <div className={module.message}>How are you?</div>
      </div>
    </div>
  );
};

export default Dialodues;
