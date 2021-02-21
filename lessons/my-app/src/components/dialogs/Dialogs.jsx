import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
const DialogItem = (props) => {
    return (
        <div >
                 <NavLink activeClassName={s.active} to={props.way}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>
                   <div>{props.text}</div> 
        </div>
    )
}
const Dialogs = () => {
    let dialogData = [
        {id: 1, name: "Tolik", way: "/dialogs/1"},
        {id: 2, name: "Vasya", way: "/dialogs/2"},
        {id: 3, name: "Masha", way: "/dialogs/3"},
        {id: 4, name: "Lida", way: "/dialogs/4"},
        {id: 5, name: "Stepan", way: "/dialogs/5"},
        {id: 6, name: "Homer", way: "/dialogs/6"},
    ];
    let messagesData = [
        {id: 1, text: "Hello nigger" },
        {id: 2, text: "What you say about my mom?" },
        {id: 3, text: "Ye ye ye" },
        {id: 4, text: "Stop. This is police!!!" },
        {id: 5, text: "Runaway niggers!!!" },
        {id: 6, text: "facking cops!!!" },

    ]
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems} >
               <DialogItem way={dialogData[0].way} name={dialogData[0].name}/>
               <DialogItem way={dialogData[1].way} name={dialogData[1].name}/>
               <DialogItem way={dialogData[2].way} name={dialogData[2].name}/>
               <DialogItem way={dialogData[3].way} name={dialogData[3].name}/>
               <DialogItem way={dialogData[4].way} name={dialogData[4].name}/>
               <DialogItem way={dialogData[5].way} name={dialogData[5].name}/>
           </div>
           <div className={s.messages}>
              <Message text={messagesData[0].text}/>
              <Message text={messagesData[1].text}/>
              <Message text={messagesData[2].text}/>
              <Message text={messagesData[3].text}/>
              <Message text={messagesData[4].text}/>
              <Message text={messagesData[5].text}/>
           </div>
        </div>
    )
}
export default Dialogs;