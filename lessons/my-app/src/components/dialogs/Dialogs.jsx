import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'

const Dialogs = () => {
    let dialogData = [
        { name: "Tolik", way: "/dialogs/1"},
        { name: "Vasya", way: "/dialogs/2"},
        { name: "Masha", way: "/dialogs/3"},
        { name: "Lida", way: "/dialogs/4"},
        { name: "Stepan", way: "/dialogs/5"},
        { name: "Homer", way: "/dialogs/6"},
    ];
    let messagesData = [
        {id: 1, text: "Hello nigger" },
        {id: 2, text: "What you say about my mom?" },
        {id: 3, text: "Ye ye ye" },
        {id: 4, text: "Stop. This is police!!!" },
        {id: 5, text: "Runaway niggers!!!" },
        {id: 6, text: "facking cops!!!" },

    ];
    let dialogElements =  
    dialogData.map( (dialog) =><DialogItem way={dialog.way} name={dialog.name} />)
     let messageElements = 
     messagesData.map( (message) =>  <Message text={message.text}/>, )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
               { 
              dialogElements
                }
             
           </div>
           <div className={s.messages}>
              {
             messageElements
              }
           </div>
        </div>
    )
}
export default Dialogs;