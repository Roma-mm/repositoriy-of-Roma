import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post'
import {addPostActionCreater, updatePostActionCreater} from "../../../redux/State"

const MyPosts = (props) => {
  let PostElement = props.post.postData.map( p => <Post message={p.text} likes={p.likes} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostActionCreater(text));
  }

  return (
    <div >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} className={s.text} value={props.newPostText}/>
        </div>
        <button  onClick={addPost} className={s.btn}>Add post</button>
        <button className={s.btn2}>Remove</button>
      </div>
      <div className={s.posts}>

       {PostElement}
        
      
      </div>
    </div>
  )
}

export default MyPosts;