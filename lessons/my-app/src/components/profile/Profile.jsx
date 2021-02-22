import MyPosts from './myposts/MyPosts'
import s from  './Profile.module.css'
import ProfileInfo from './profileinfo/ProfileInfo';
let postData = [
  {id: 1, text: "Hi, i'll eat Jerry" , likes: '12'},
  {id: 2, text: 'wait!', likes: '15' },
];
const Profile = () => {
  
    return (
      <div>
        <ProfileInfo/>
        <MyPosts data={postData}/>
      </div>
    )
}

export default Profile;