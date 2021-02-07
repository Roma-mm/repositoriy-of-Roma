import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1.jpg" />
            <span>{props.message}</span>
            <div>
                <span>like</span>
                <span>{" " + props.likes}</span>
            </div>
        </div>
    )
}
export default Post;