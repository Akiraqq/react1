import React from 'react';
import module from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/DialoguesReducer';
import store from '../../redux/State';

const Dialodues = (props) => {
  const newMessage = React.createRef();
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };
  let newMessageBody = store.getState().newMessageBody;
  let onNewMessageChange = () => {
    let body = newMessage.current.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  const dialoguesElements = store
    .getState()
    .dialoguesPage.dialogues.map((d) => <Dialogue name={d.name} id={d.id} />);
  const messageElements = store
    .getState()
    .dialoguesPage.messages.map((m) => (
      <Message message={m.message} id={m.id} />
    ));
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
