import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src="https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
        </div>
        <div>
          ava + decription
        </div>
        <MyPosts/>
      </div>
    )
}

export default Profile;