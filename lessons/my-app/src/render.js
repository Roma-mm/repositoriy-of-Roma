import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={props.friends} appState={props}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

