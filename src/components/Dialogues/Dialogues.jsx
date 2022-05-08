import module from "./Dialogues.module.css";
import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import { DialogueData } from "../..";
import { MessageData } from "../..";
const Dialodues = () => {
  const dialoguesElements = DialogueData.map((d) => (
    <Dialogue name={d.name} id={d.id} />
  ));
  const messageElements = MessageData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={module.dialogues}>
      <div className={module.dialoguesItems}>{dialoguesElements}</div>
      <div className={module.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialodues;
