import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://lh3.googleusercontent.com/proxy/JDOFv9ESZ97uVsz2V24hNzWw07SXA3TgSY9BpRupjJnyZxo-Jojo5pyjEl12PBVjL7PSVow83_syYa27YsSXt44KbcE-w_yQxAw" />
            <span>{props.message}</span>
            <div>
                <span>like</span>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}
export default Post;