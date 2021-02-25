import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import React from "react"

const Dialogs = (props) => {
   
    let el = React.createRef();
    let dialogElements =  
    props.state.dialogData.map( (d) =><DialogItem img={d.img} way={d.way} name={d.name} />)
     let messageElements = props.state.messages.map( (m) =>  <Message  text={m.text}/>, )
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
              <textarea ref={el}></textarea>
              <button onClick={() => alert(el.current.value)}>send</button>
           </div>
        </div>
    )
}
export default Dialogs;