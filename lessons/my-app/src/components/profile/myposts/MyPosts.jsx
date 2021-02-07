import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>

        <Post message="Hi, i'll eat Jerry" likes='12' />
        <Post message='wait!' likes='15'/>
      
      </div>
    </div>
  )
}

export default MyPosts;