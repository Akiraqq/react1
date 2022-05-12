let renderEntireTree = () => {
  console.log(' ');
};

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
      { id: 1, message: 'first', likeCount: 11 },
      { id: 2, message: 'second', likeCount: 14 },
      { id: 3, message: 'third', likeCount: 17 },
    ],
  },
};

export const addPost = (postText) => {
  const newPost = {
    id: 4,
    message: postText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree();
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
};
export default state;
