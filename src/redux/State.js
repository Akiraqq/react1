const state = {
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
  },
  profilePage: {
    posts: [
      { id: 1, post: 'first', likeCount: 11 },
      { id: 2, post: 'second', likeCount: 14 },
      { id: 3, post: 'third', likeCount: 17 },
    ],
  },
};
export default state;
