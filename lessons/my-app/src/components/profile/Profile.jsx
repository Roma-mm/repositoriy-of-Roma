import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
import ProfileInfo from './profileinfo/ProfileInfo';

const Profile = (props) => {
  
    return (
      <div>
        <ProfileInfo/>
        <MyPosts 
        newPostText = {props.newPostText} 
        addPost = {props.addPost}
        update =  {props.update}
        post = {props.profilePage}
        />
      </div>
    )
}

export default Profile;