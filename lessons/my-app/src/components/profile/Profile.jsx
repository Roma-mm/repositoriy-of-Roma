import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = (props) => {
 
    return (
      <div>
        <ProfileInfo/>
        <MyPosts 
        newPostText = {props.newPostText} 
        dispatch = {props.dispatch}
        post = {props.profilePage}
        />
      </div>
    )
}

export default Profile;