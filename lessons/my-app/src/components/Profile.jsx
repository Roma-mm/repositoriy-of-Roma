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
        <div>
          my posts
          <div>
            new post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>

      </div>
    )
}

export default Profile;