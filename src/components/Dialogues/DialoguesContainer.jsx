import Dialogues from './Dialogues';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/DialoguesReducer';
import { connect } from 'react-redux';

// const DialoduesContainer = (props) => {
//   let state = props.store.getState().dialoguesPage;

//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogues
//       updateNewMessageBody={onNewMessageChange}
//       sendMessage={onSendMessageClick}
//       dialoguesPage={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
    newMessageBody: state.dialoguesPage.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialoduesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogues);

export default DialoduesContainer;
