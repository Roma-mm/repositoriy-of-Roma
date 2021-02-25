import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>
        <ProfileInfo/>
        <MyPosts addPost = {props.addPost} post={props.state}/>
      </div>
    )
}

export default Profile;