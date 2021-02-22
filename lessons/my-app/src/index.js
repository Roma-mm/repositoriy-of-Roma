import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [
  {id: 1, text: "Hi, i'll eat Jerry" , likes: '12'},
  {id: 2, text: 'wait!', likes: '15' },
];
let dialogData = [
  { name: "Tolik", way: "/dialogs/1"},
  { name: "Vasya", way: "/dialogs/2"},
  { name: "Masha", way: "/dialogs/3"},
  { name: "Lida", way: "/dialogs/4"},
  { name: "Stepan", way: "/dialogs/5"},
  { name: "Homer", way: "/dialogs/6"},
];
let Messages  = [
  {id: 1, text: "Hello nigger" },
  {id: 2, text: "What you say about my mom?" },
  {id: 3, text: "Ye ye ye" },
  {id: 4, text: "Stop. This is police!!!" },
  {id: 5, text: "Runaway niggers!!!" },
  {id: 6, text: "facking cops!!!" },

];
ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogData} message={Messages} post={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
