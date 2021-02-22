import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'

const Dialogs = (props) => {
    
    
    let dialogElements =  
    props.dialog.map( (d) =><DialogItem way={d.way} name={d.name} />)
     let messageElements = props.message.map( (m) =>  <Message text={m.text}/>, )
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