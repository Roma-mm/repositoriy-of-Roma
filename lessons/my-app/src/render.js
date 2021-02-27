import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/State'
import {updatePost} from './redux/State'
export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        newPostText={props.profilePage.newPostText}
        data={props.friends}
        appState={props}
        addPost={addPost}
        update={updatePost}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

