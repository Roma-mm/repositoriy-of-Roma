import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  let postData = [
    {id: 1, text: "Hi, i'll eat Jerry" , likes: '12'},
    {id: 2, text: 'wait!', likes: '15' },
];
  let PostElement = postData.map( p => <Post message={p.text} likes={p.likes} /> )
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.text}></textarea>
        </div>
        <button className={s.btn}>Add post</button>
        <button className={s.btn2}>Remove</button>
      </div>
      <div className={s.posts}>

       {PostElement}
        
      
      </div>
    </div>
  )
}

export default MyPosts;