const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hay' },
    { id: 3, message: 'Yo' },
  ],
  dialogues: [
    {
      id: 1,
      name: 'Roma',
    },
    {
      id: 2,
      name: 'Asya',
    },
    {
      id: 3,
      name: 'Seroja',
    },
  ],
  newMessageBody: '',
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageBody,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      // let body = state.newMessageBody;
      // state.messages.push({ id: 4, message: body });
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = '';

      return stateCopy;
    }
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});
export default dialoguesReducer;
