
import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
                   <textarea>{props.text}</textarea> 
        </div>
    )
}

export default Message;