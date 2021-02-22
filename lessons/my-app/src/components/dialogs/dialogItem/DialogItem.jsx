import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
const DialogItem = (props) => {
    return (
        <div className={s.dialog} >
                 <NavLink  activeClassName={s.active} to={props.way}>{props.img}<span>{props.name}</span></NavLink>
        </div>
    )
}

export default DialogItem;