import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import React from 'react'

const App = (props) => {
  
 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar data={props.appState.friends} />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() =>
            <Profile newPostText={props.appState.profilePage.newPostText}
            dispatch={props.dispatch}
              profilePage={props.appState.profilePage} />} />
          <Route path="/dialogs" render={() => <Dialogs state={props.appState} dispatch={props.dispatch} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
