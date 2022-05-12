import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/State';
import { addPost } from './redux/State';

const renderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App addPost={addPost} />
    </React.StrictMode>
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);
