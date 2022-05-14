import dialoguesReducer from './DialoguesReducer';
import profileReducer from './ProfileReducer';

let store = {
  _state: {
    dialoguesPage: {
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
    },
    profilePage: {
      posts: [
        { id: 1, message: 'first', likeCount: 11 },
        { id: 2, message: 'second', likeCount: 14 },
        { id: 3, message: 'third', likeCount: 17 },
      ],
      newPostText: '',
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log(' ');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(
      this._state.dialoguesPage,
      action
    );
    this._callSubscriber(this._state);
  },
};

export default store;
