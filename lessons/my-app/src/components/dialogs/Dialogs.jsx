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
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems} >
               <DialogItem way="/dialogs/1" name="Tolik"/>
               <DialogItem way="/dialogs/2" name="Vasay"/>
               <DialogItem way="/dialogs/3" name="Masha"/>
               <DialogItem way="/dialogs/4" name="Lida"/>
               <DialogItem way="/dialogs/5" name="Stepan"/>
               <DialogItem way="/dialogs/6" name="Homer"/>
               
           </div>
           <div className={s.messages}>
              <Message text="Hello nigger" ></Message>
              <Message text="What you say about my mom?"></Message>
              <Message text="Ye ye ye" ></Message>
              <Message text="Stop. This is police!!!"></Message>
              <Message text="Runaway niggers!!!" ></Message>
              <Message text="facking cops!!!" ></Message>
           </div>
        </div>
    )
}
export default Dialogs;