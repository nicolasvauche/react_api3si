import { NavLink } from "react-router-dom"

import './Navigation.scss'

const Navigation = () => {
return (
    <nav className='app-navigation'>
        <NavLink to='/'>
            Home
        </NavLink>

        <NavLink to='/blog'>
            Blog
        </NavLink>

        <NavLink to='/utilisateurs'>
            Users
        </NavLink>
    </nav>
)
}

export default Navigation