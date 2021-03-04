import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/State'
import App from './App';
import {addPost, updatePost, subscribe} from './redux/State'
let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App        
        appState={state}
        addPost={addPost}
        update={updatePost}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
