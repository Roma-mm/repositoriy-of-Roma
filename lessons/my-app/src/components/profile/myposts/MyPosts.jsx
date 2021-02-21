import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
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

        <Post message="Hi, i'll eat Jerry" likes='12' />
        <Post message='wait!' likes='15'/>
      
      </div>
    </div>
  )
}

export default MyPosts;