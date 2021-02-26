import React from 'react';
import { addPost } from '../../../redux/State';
import s from './MyPosts.module.css'
import Post from './post/Post'


const MyPosts = (props) => {
  let PostElement = props.post.postData.map( p => <Post message={p.text} likes={p.likes} /> )
  let newPostElement = React.createRef();
  let addPost = () => {
   
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = " ";
  }
  return (
    <div >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} className={s.text}></textarea>
        </div>
        <button onClick={addPost} className={s.btn}>Add post</button>
        <button className={s.btn2}>Remove</button>
      </div>
      <div className={s.posts}>

       {PostElement}
        
      
      </div>
    </div>
  )
}

export default MyPosts;