import Dialogue from './Dialogue/Dialogue';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/DialoguesReducer';

const DialoduesContainer = (props) => {
  let state = props.store.getState().dialoguesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogue
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialoguesPage={state}
    />
  );
};

export default DialoduesContainer;
