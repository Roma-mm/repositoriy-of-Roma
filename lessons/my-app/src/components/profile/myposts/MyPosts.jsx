import s from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = () => {
  let postData = [
    {id: 1, text: "Hi, i'll eat Jerry" , likes: '12'},
    {id: 2, text: 'wait!', likes: '15' },
    

]
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

        <Post message={postData[0].text} likes={postData[0].likes} />
        <Post message={postData[1].text} likes={postData[1].likes} />
        
      
      </div>
    </div>
  )
}

export default MyPosts;