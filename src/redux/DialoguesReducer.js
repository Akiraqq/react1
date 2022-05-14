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
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      {
        let body = state.newMessageBody;

        state.messages.push({ id: 4, message: body });
        state.newMessageBody = '';
      }
      return state;
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
