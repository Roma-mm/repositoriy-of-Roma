import { NavLink } from 'react-router-dom';
import Friend from './friends/Friend';
import s from './Navbar.module.css'




  

const Navbar = (props) => {
  let friendElements = props.data.map(f => <Friend name={f.name} img={f.img}/>)
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/profile' >Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/music' >Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/settings' >Settings</NavLink>
      </div>
      <div className={s.friends + " " + s.item}>
        <div activeClassName={s.activeLink} to='/friends' >Friends</div>
        <div className={s.somepeople}>
         
         { friendElements}
         

        </div>
      </div>
    </nav>
  )
}

export default Navbar;