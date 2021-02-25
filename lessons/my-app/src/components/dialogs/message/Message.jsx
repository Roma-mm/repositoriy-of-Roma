import s from './../Dialogs.module.css'

const Message = (props) => {
    
    return (
        <div className={s.message}>
                   <div>{props.text}</div>
                  
        </div>
    )
}

export default Message;