import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
        </div>
        <div>
          ava + decription
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
