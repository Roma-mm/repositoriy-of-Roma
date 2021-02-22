import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
const DialogItem = (props) => {
    return (
        <div >
                 <NavLink activeClassName={s.active} to={props.way}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;