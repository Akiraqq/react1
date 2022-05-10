import React from 'react';
import module from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
import state from '../../redux/State';

const Dialodues = (props) => {
  const newMessage = React.createRef();
  const addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  const dialoguesElements = state.dialoguesPage.dialogues.map((d) => (
    <Dialogue name={d.name} id={d.id} />
  ));
  const messageElements = state.dialoguesPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={module.dialogues}>
      <div className={module.dialoguesItems}>{dialoguesElements}</div>
      <div className={module.messages}>{messageElements}</div>
      <div>
        <textarea
          ref={newMessage}
          className="textarea"
          cols="70"
          rows="5"
        ></textarea>
        <button onClick={addMessage}>send message</button>
      </div>
    </div>
  );
};

export default Dialodues;
