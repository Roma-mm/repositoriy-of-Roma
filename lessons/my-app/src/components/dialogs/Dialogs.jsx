import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import React from "react"
import {addMessageActionCreator,  updateMessageCreator} from '../../redux/dialog_reducer'
const Dialogs = (props) => {
   
   
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let changeMessage = (el) => {
        let text = el.target.value;
        props.dispatch(updateMessageCreator(text));
    } 
    let dialogElements =  
    props.state.dialogPage.dialogData.map( (d) =><DialogItem img={d.img} way={d.way} name={d.name} />)
     let messageElements = props.state.dialogPage.messages.map( (m) =>  <Message  text={m.text}/>, )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
               { 
              dialogElements
                }
             
           </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea onChange={changeMessage} value={props.state.dialogPage.newMessage} ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>send</button>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Dialogs;