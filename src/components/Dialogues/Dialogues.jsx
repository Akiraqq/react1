import React from 'react';
import module from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';

const Dialodues = (props) => {
  let state = props.dialoguesPage;

  const dialoguesElements = state.dialogue.map((d) => (
    <Dialogue name={d.name} id={d.id} />
  ));
  const messageElements = state.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  const newMessage = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    //let body = newMessage.current.value;
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={module.dialogues}>
      <div className={module.dialoguesItems}>{dialoguesElements}</div>
      <div className={module.messages}>{messageElements}</div>
      <div>
        <textarea
          ref={newMessage}
          onChange={onNewMessageChange}
          value={newMessageBody}
        ></textarea>
        <button onClick={onSendMessageClick}>send message</button>
      </div>
    </div>
  );
};

export default Dialodues;
