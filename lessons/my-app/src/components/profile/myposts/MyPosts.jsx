import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post'


const MyPosts = (props) => {
  let PostElement = props.post.postData.map( p => <Post message={p.text} likes={p.likes} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'add-post'});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "update-post", newText: text});
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