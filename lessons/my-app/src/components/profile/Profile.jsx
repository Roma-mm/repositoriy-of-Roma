import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>
        <ProfileInfo/>
        <MyPosts post={props.post}/>
      </div>
    )
}

export default Profile;